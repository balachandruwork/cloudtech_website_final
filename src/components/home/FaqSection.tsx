import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FAQ_ITEMS } from '@/data/faq.data';
import { ROUTES } from '@/constants/routes';

export function FaqSection() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Answers to Common"
        titleHighlight="Rental & Service Questions"
        description="Straightforward details on minimum rental periods, delivery in Coimbatore, warranty coverage, and IT support."
      />

      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion items={FAQ_ITEMS} />
        <div className="mt-8 text-center">
          <Link to={ROUTES.CONTACT}>
            <Button variant="outline" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Still have a question? Contact us
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
