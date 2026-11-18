# Cloud Tech Firestore Security Specification (Phase 0 TDD)

## 1. Data Invariants
1. **PII Isolation:** `contactEnquiries`, `quoteRequests`, and `newsletterSubscribers` contain customer PII (`email`, `phone`, `name`). Public/anonymous users and non-admin authenticated users MUST NEVER be able to `get` or `list` any document in these collections. Only verified admin (`balachandruwork@gmail.com` with `email_verified == true`) may read them.
2. **Immutable Submissions:** Once created, enquiries, quotes, and subscriptions are append-only (`update` and `delete` are unconditionally denied).
3. **Newsletter Deduplication & Atomicity:** `newsletterIndex/{subscriberKey}` stores zero PII (`{ active: true, createdAt: request.time }`) and denies `list`, allowing only single-doc `get` by deterministic `sub_<64-hex>` SHA-256 key. Creating a `newsletterIndex` document requires atomic co-creation of `newsletterSubscribers/{subscriberKey}` (and vice-versa) using `existsAfter`.
4. **Strict Payload & Temporal Integrity:** All creates validate exact required/optional keys (`hasAll` / `hasOnly`), enforce strict string length limits, integer bounds (`quantity` 1..10000), valid ID regexes, and `createdAt == request.time`.

## 2. The "Dirty Dozen" Adversarial Payloads
1. **Unauthenticated PII Read (`contactEnquiries`):** `getDoc(doc(db, 'contactEnquiries', 'CT-123'))` without admin auth -> `PERMISSION_DENIED`.
2. **Unauthenticated PII List (`quoteRequests`):** `getDocs(collection(db, 'quoteRequests'))` without admin auth -> `PERMISSION_DENIED`.
3. **Unauthenticated Subscriber List (`newsletterSubscribers`):** `getDocs(collection(db, 'newsletterSubscribers'))` -> `PERMISSION_DENIED`.
4. **Newsletter Index Scraping (`newsletterIndex`):** `getDocs(collection(db, 'newsletterIndex'))` (`list` query) -> `PERMISSION_DENIED`.
5. **Unverified Admin Email Spoof:** Authenticated user with `email: 'balachandruwork@gmail.com'` and `email_verified: false` reading `contactEnquiries` -> `PERMISSION_DENIED`.
6. **Shadow / Ghost Field Injection (`contactEnquiries`):** Creating an enquiry with an extra field `{ ..., isReviewed: true }` -> `PERMISSION_DENIED` (`hasOnly` check).
7. **Timestamp Forgery (`quoteRequests`):** Creating a quote with client-supplied past timestamp `createdAt: new Date('2020-01-01')` instead of `serverTimestamp()` -> `PERMISSION_DENIED`.
8. **ID Poisoning (`contactEnquiries`):** Creating doc with 500-char or invalid-char ID `../admin$bad` -> `PERMISSION_DENIED`.
9. **Resource Exhaustion / Oversized Message:** Creating `contactEnquiries` with `message` > 2000 chars -> `PERMISSION_DENIED`.
10. **Invalid Quantity Type/Bound (`quoteRequests`):** Creating quote with `quantity: 0` or `quantity: "10"` -> `PERMISSION_DENIED`.
11. **Orphaned Newsletter Index Write:** Creating `newsletterIndex/{key}` without batching `newsletterSubscribers/{key}` -> `PERMISSION_DENIED` (`existsAfter` fails).
12. **Consent Bypass / Tampering:** Creating `contactEnquiries` with `consent: false` or updating an existing `quoteRequests` doc -> `PERMISSION_DENIED`.
