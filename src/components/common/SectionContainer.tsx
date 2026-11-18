import { cn } from '@/lib/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  innerClassName?: string;
}

export function SectionContainer({
  children,
  className,
  id,
  as: Tag = 'section',
  innerClassName,
}: SectionContainerProps) {
  return (
    <Tag id={id} className={cn('section-py', className)}>
      <div className={cn('container-site', innerClassName)}>{children}</div>
    </Tag>
  );
}
