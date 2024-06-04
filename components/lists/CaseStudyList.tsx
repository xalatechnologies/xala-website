import { CaseStudy } from '@/lib/models';
import CaseStudyCard from '../cards/CaseStudyCard';

const CaseStudyList = ({ items }: { items: CaseStudy[] }) => {
  return (
    <div className="container mx-auto p-4">
     {items.map((caseStudy: CaseStudy) => {
        return <CaseStudyCard item={caseStudy} key={caseStudy._id} />
      })
      }
    </div>
  );
};

export default CaseStudyList;
