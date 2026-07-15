import { createServerFn } from "@tanstack/react-start";
import { transformTeamStandingsResponseToTeamRecord } from "@/features/team-records/api/responseFormatter";
import type { TeamRecord } from "../types/teamRecord";

export const fetchStandings = createServerFn({ method: "GET" }).handler(
  async (): Promise<TeamRecord[]> => {
    const response = await fetch("https://site.api.espn.com/apis/v2/sports/baseball/mlb/standings");

    if (!response.ok) {
      throw new Error(`failed to fetch team standings: ${response.statusText}`);
    }

    const data = await response.json();
    const teamRecords = transformTeamStandingsResponseToTeamRecord(data);

    return teamRecords;
  },
);

// const fetchTeamGames = () => {};

// export const enrichTeamRecords = () => {};
