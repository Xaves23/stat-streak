import type { TeamRecord } from "@/features/team-records/types/teamRecord";
import type { TeamStandingsResponse } from "@/features/team-records/types/teamStandingsResponse";

const getResultsFromRecord = (record: string) => {
  const values = record.split("-").map((n) => Number(n));
  return { wins: values[0], losses: values[1] };
};

export const transformTeamStandingsResponseToTeamRecord = (
  response: TeamStandingsResponse,
): TeamRecord[] => {
  const teams = [
    ...response.children[0].standings.entries,
    ...response.children[1].standings.entries,
  ];

  return teams.map((entry) => {
    const lastTen = getResultsFromRecord(entry.stats[37].summary ?? "0-0");

    return {
      id: entry.team.id,
      name: entry.team.displayName,
      logo: entry.team.logos[0].href,
      wins: entry.stats[18].value ?? 0,
      losses: entry.stats[9].value ?? 0,
      homeWins: entry.stats[24].value ?? 0,
      homeLosses: entry.stats[22].value ?? 0,
      awayWins: entry.stats[30].value ?? 0,
      awayLosses: entry.stats[28].value ?? 0,
      percentage: entry.stats[17].value ?? 0,
      streak: entry.stats[15].value ?? 0,
      winsInLastTen: lastTen.wins,
      lossesInLastTen: lastTen.losses,
    };
  });
};
