import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TESTIMONIALS } from '@/data/testimonials.data';

export function TestimonialsSection() {
  // MOD-9: Render customer testimonials only when verified reviews added with customer permission exist.
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <SectionContainer className="bg-white">
      <SectionHeading
        eyebrow="Client Feedback"
        title="What Our Customers"
        titleHighlight="Say"
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => (
          <article key={item.id} className="card-base p-6 flex flex-col justify-between gap-4">
            <p className="text-sm text-dark-600 leading-relaxed">&ldquo;{item.content}&rdquo;</p>
            <div>
              <p className="font-semibold text-dark-900 text-sm">{item.name}</p>
              <p className="text-xs text-dark-500">
                {item.role}, {item.company}
              </p>
              <p className="text-xs text-primary-600 mt-1">{item.serviceUsed}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
