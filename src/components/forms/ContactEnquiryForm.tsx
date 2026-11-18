import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  contactSchema,
  SERVICE_OPTIONS,
  type ContactFormData,
} from '@/schemas/contact.schema';
import {
  submitContactForm,
  type ContactSubmissionResult,
} from '@/services/contact.service';

interface ContactEnquiryFormProps {
  defaultService?: string;
}

export function ContactEnquiryForm({ defaultService = '' }: ContactEnquiryFormProps) {
  const [submitResult, setSubmitResult] = useState<ContactSubmissionResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      email: '',
      service: defaultService,
      message: '',
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    setSubmitResult(null);
    try {
      const result = await submitContactForm(data);
      setSubmitResult(result);
      reset({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: defaultService,
        message: '',
        consent: false,
      });
    } catch {
      setSubmitError(
        'We could not submit your enquiry right now. Please try again or reach us via WhatsApp or email.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {submitResult?.success && (
        <div
          className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-3 text-emerald-900"
          role="status"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold">{submitResult.message}</p>
            {submitResult.referenceId && (
              <p className="mt-1 text-emerald-700">
                Reference ID: <span className="font-mono font-semibold">{submitResult.referenceId}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {submitError && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 p-4 flex items-start gap-3 text-red-900"
          role="alert"
        >
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm font-medium">{submitError}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          placeholder="Your name"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Company / Organization"
          placeholder="Optional"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 98765 43210"
          required
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="you@company.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Select
        label="Service Needed"
        required
        options={[...SERVICE_OPTIONS]}
        error={errors.service?.message}
        {...register('service')}
      />

      <Textarea
        label="Enquiry Details"
        placeholder="Share your device requirements, rental duration, repair issue, or location in Coimbatore..."
        rows={4}
        required
        error={errors.message?.message}
        {...register('message')}
      />

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border text-primary-600 focus:ring-primary-500"
            {...register('consent')}
          />
          <span className="text-sm text-dark-600">
            I agree to be contacted by Cloud Tech via phone, WhatsApp, or email regarding this enquiry.
          </span>
        </label>
        {errors.consent?.message && (
          <p className="mt-1 text-xs text-red-500" role="alert">
            {errors.consent.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
        rightIcon={<Send className="h-4 w-4" />}
      >
        Send Enquiry
      </Button>
    </form>
  );
}
