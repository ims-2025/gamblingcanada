import PillarPage, { pillarMetadata } from '@/components/PillarPage';
import { getPillar } from '@/lib/pillars';

const pillar = getPillar('casino-payment-methods')!;

export const metadata = pillarMetadata(pillar);

export default function Page() {
  return <PillarPage pillar={pillar} />;
}
