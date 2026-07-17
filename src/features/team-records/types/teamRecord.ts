export interface TeamRecord {
  id: string;
  name: string;
  logo: string;
  wins: number;
  losses: number;
  homeWins: number;
  homeLosses: number;
  awayWins: number;
  awayLosses: number;
  percentage: number;
  winsInLastTen: number;
  lossesInLastTen: number;
  streak: number;
}
