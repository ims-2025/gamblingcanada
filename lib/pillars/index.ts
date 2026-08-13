import type { Pillar } from './_types';
// Phase 1
import { onlineCasinosOntario } from './online-casinos-ontario';
import { onlineCasinosAlberta } from './online-casinos-alberta';
import { casinoBonuses } from './casino-bonuses';
import { noDepositBonusCanada } from './no-deposit-bonus-canada';
import { interacCasinos } from './interac-casinos';
import { fastestPayoutCasinos } from './fastest-payout-casinos';
import { bestBingoSites } from './best-bingo-sites';
import { isOnlineGamblingLegalInCanada } from './is-online-gambling-legal-in-canada';
// Phase 2
import { onlineGamblingBritishColumbia } from './online-gambling-british-columbia';
import { onlineGamblingQuebec } from './online-gambling-quebec';
import { onlineGamblingByProvince } from './online-gambling-by-province';
import { freeSpinsCanada } from './free-spins-canada';
import { sportsBettingBonusesCanada } from './sports-betting-bonuses-canada';
import { casinoPaymentMethods } from './casino-payment-methods';
import { liveDealerCasinos } from './live-dealer-casinos';
import { newOnlineCasinosCanada } from './new-online-casinos-canada';
import { onlineSlotsRealMoney } from './online-slots-real-money';
import { howToBetOnHockey } from './how-to-bet-on-hockey';
// Phase 3
import { onlineGamblingManitoba } from './online-gambling-manitoba';
import { onlineGamblingSaskatchewan } from './online-gambling-saskatchewan';
import { payByPhoneCasinos } from './pay-by-phone-casinos';
import { highRollerCasinos } from './high-roller-casinos';
import { bestBlackjackSites } from './best-blackjack-sites';
import { nflBettingCanada } from './nfl-betting-canada';
import { gamblingTaxesCanada } from './gambling-taxes-canada';

export const PILLARS: Pillar[] = [
  onlineCasinosOntario,
  onlineCasinosAlberta,
  casinoBonuses,
  noDepositBonusCanada,
  interacCasinos,
  fastestPayoutCasinos,
  bestBingoSites,
  isOnlineGamblingLegalInCanada,
  onlineGamblingBritishColumbia,
  onlineGamblingQuebec,
  onlineGamblingByProvince,
  freeSpinsCanada,
  sportsBettingBonusesCanada,
  casinoPaymentMethods,
  liveDealerCasinos,
  newOnlineCasinosCanada,
  onlineSlotsRealMoney,
  howToBetOnHockey,
  onlineGamblingManitoba,
  onlineGamblingSaskatchewan,
  payByPhoneCasinos,
  highRollerCasinos,
  bestBlackjackSites,
  nflBettingCanada,
  gamblingTaxesCanada,
];

export function getPillar(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}

export type { Pillar } from './_types';
