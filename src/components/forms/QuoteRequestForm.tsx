import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  DEVICE_TYPE_OPTIONS,
  quoteSchema,
  RENTAL_DURATION_OPTIONS,
  type QuoteFormData,
} from '@/schemas/quote.schema';
import {
  submitQuoteRequest,
  type QuoteSubmissionResult,
} from '@/services/quote.service';

interface QuoteRequestFormProps {
  initialDevice?: string;
}

export function QuoteRequestForm({ initialDevice = '' }: QuoteRequestFormProps) {
  const [submitResult, setSubmitResult] = useState<QuoteSubmissionResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const hasMatchingPreset = DEVICE_TYPE_OPTIONS.some((opt) => opt.value === initialDevice);
  const dynamicOptions =
    initialDevice && !hasMatchingPreset
      ? [
          DEVICE_TYPE_OPTIONS[0],
          { value: initialDevice, label: initialDevice },
          ...DEVICE_TYPE_OPTIONS.slice(1),
        ]
      : [...DEVICE_TYPE_OPTIONS];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      email: '',
      deviceType: initialDevice,
      quantity: 1,
      duration: '',
      requirements: '',
    },
  });

  useEffect(() => {
    if (initialDevice) {
      setValue('deviceType', initialDevice);
    }
  }, [initialDevice, setValue]);

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitError(null);
    setSubmitResult(null);
    try {
      const result = await submitQuoteRequest(data);
      setSubmitResult(result);
      reset({
        name: '',
        company: '',
        phone: '',
        email: '',
        deviceType: initialDevice,
        quantity: 1,
        duration: '',
        requirements: '',
      });
    } catch {
      setSubmitError(
        'Unable to submit your quote request right now. Please try again or reach us via WhatsApp or email.'
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
            {submitResult.quoteId && (
              <p className="mt-1 text-emerald-700">
                Quote ID: <span className="font-mono font-semibold">{submitResult.quoteId}</span>
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
          label="Customer Name"
          placeholder="Your full name"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Company / Team Name"
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
        label="Device / Requirement Type"
        required
        options={dynamicOptions}
        error={errors.deviceType?.message}
        {...register('deviceType')}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Required Quantity"
          type="number"
          min={1}
          max={10000}
          required
          error={errors.quantity?.message}
          {...register('quantity', { valueAsNumber: true })}
        />
        <Select
          label="Rental Duration / Scope"
          required
          options={[...RENTAL_DURATION_OPTIONS]}
          error={errors.duration?.message}
          {...register('duration')}
        />
      </div>

      <Textarea
        label="Additional Requirements"
        placeholder="Preferred specs (RAM/SSD/OS), pre-installed software, delivery area in Coimbatore, or accessories..."
        rows={3}
        error={errors.requirements?.message}
        {...register('requirements')}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
        rightIcon={<FileText className="h-4 w-4" />}
      >
        Request Quote
      </Button>
    </form>
  );
}
