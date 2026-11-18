import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeUp, viewportOnce } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  animate?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
  titleClassName,
  descriptionClassName,
  className,
  animate = true,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? { variants: fadeUp, initial: 'hidden', whileInView: 'visible', viewport: viewportOnce }
    : {};

  return (
    <Wrapper
      className={cn('max-w-3xl space-y-4', alignClasses[align], className)}
      {...wrapperProps}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-2', align === 'center' && 'justify-center')}>
          <span className="h-px w-8 bg-primary-600" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-600">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-primary-600" aria-hidden="true" />
        </div>
      )}

      <h2 className={cn('font-display font-bold text-dark-900 leading-tight', titleClassName)}>
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient-primary">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className={cn('text-dark-500 text-lg leading-relaxed', descriptionClassName)}>
          {description}
        </p>
      )}
    </Wrapper>
  );
}
