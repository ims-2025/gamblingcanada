import PillarPage, { pillarMetadata } from '@/components/PillarPage';
import { getPillar } from '@/lib/pillars';

const pillar = getPillar('online-gambling-manitoba')!;

export const metadata = pillarMetadata(pillar);

export default function Page() {
  return <PillarPage pillar={pillar} />;
}
