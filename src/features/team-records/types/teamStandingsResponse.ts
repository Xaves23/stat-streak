export interface TeamStandingsResponse {
  uid: string;
  id: string;
  name: string;
  abbreviation: string;
  shortName: string;
  children: Child[];
  season: Season;
  links: Link[];
  seasons: Season[];
}

export interface Child {
  uid: string;
  id: string;
  name: string;
  abbreviation: string;
  shortName: string;
  standings: Standings;
}

export interface Standings {
  id: string;
  name: string;
  displayName: ShortText;
  links: Link[];
  season: number;
  seasonType: number;
  seasonDisplayName: string;
  entries: Entry[];
}

export enum ShortText {
  Clubhouse = "Clubhouse",
  Standings = "Standings",
}

export interface Entry {
  team: Team;
  stats: Stat[];
}

export interface Stat {
  name: string;
  displayName?: string;
  shortDisplayName?: string;
  description?: string;
  abbreviation: string;
  type: string;
  value?: number;
  displayValue: string;
  id?: string;
  summary?: string;
}

export interface Team {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
  logos: Logo[];
  links: Link[];
}

export interface Link {
  language: Language;
  rel: LinkRel[];
  href: string;
  text: Text;
  shortText: ShortText;
  isExternal: boolean;
  isPremium: boolean;
}

export enum Language {
  EnUS = "en-US",
}

export enum LinkRel {
  Clubhouse = "clubhouse",
  Desktop = "desktop",
  Standings = "standings",
  Team = "team",
}

export enum Text {
  Clubhouse = "Clubhouse",
  Table = "Table",
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: LogoRel[];
  lastUpdated: string;
}

export enum LogoRel {
  Dark = "dark",
  Default = "default",
  Full = "full",
  Scoreboard = "scoreboard",
}

export interface Season {
  year: number;
  startDate: string;
  endDate: string;
  displayName: string;
  types?: Type[];
}

export interface Type {
  id: string;
  name: Name;
  abbreviation: Abbreviation;
  startDate: string;
  endDate: string;
  hasStandings: boolean;
}

export enum Abbreviation {
  Off = "off",
  Post = "post",
  Pre = "pre",
  Reg = "reg",
}

export enum Name {
  OffSeason = "Off Season",
  Postseason = "Postseason",
  RegularSeason = "Regular Season",
  SpringTraining = "Spring Training",
}
