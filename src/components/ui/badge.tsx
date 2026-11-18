import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

type BadgeVariant = 'default' | 'primary' | 'navy' | 'success' | 'warning' | 'danger' | 'outline' | 'new' | 'sale' | 'featured';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-dark-100 text-dark-700',
  primary: 'bg-primary-50 text-primary-700 border border-primary-200',
  navy: 'bg-navy-50 text-navy-600 border border-navy-200',
  success: 'bg-green-50 text-green-700 border border-green-200',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  danger: 'bg-red-50 text-red-700 border border-red-200',
  outline: 'border border-dark-300 text-dark-600',
  new: 'bg-emerald-500 text-white',
  sale: 'bg-red-500 text-white',
  featured: 'bg-primary-600 text-white',
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';

export { Badge };
export type { BadgeProps, BadgeVariant };
