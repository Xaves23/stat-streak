import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchStandings } from "../api/teamRecordsApi";

export const teamRecordsQueryOptions = () =>
  queryOptions({
    queryKey: ["teamRecords"],
    queryFn: () => fetchStandings(),
    staleTime: 1000 * 60 * 60 * 24,
  });

const getSmallLogoUrl = (logoUrl: string, size = 40) => {
  const path = logoUrl.replace("https://a.espncdn.com", "");
  return `https://a.espncdn.com/combiner/i?img=${path}&w=${size}&h=${size}`;
};

const getStreakString = (streakValue: number) => {
  return streakValue < 0
    ? `L${streakValue}`.replace("-", "")
    : `W${streakValue}`;
};

export const TeamRecords = () => {
  const { data: teamRecords } = useSuspenseQuery(teamRecordsQueryOptions());

  const rows = teamRecords.map((record) => ({
    ...record,
    percentage: `${record.percentage.toFixed(3).slice(1)}`,
    home: `${record.homeWins}-${record.homeLosses}`,
    away: `${record.awayWins}-${record.awayLosses}`,
    streak: getStreakString(record.streak),
    lastTen: `${record.winsInLastTen}-${record.lossesInLastTen}`,
    logo: getSmallLogoUrl(record.logo),
  }));

  return (
    <div>
      <Table>
        <TableCaption>Team records and streaks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Wins</TableHead>
            <TableHead>Losses</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>Home</TableHead>
            <TableHead>Away</TableHead>
            <TableHead>Streak</TableHead>
            <TableHead>Last 10</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="flex items-center gap-2">
                <img
                  src={record.logo}
                  alt={record.name}
                  width={40}
                  height={40}
                />
                {record.name}
              </TableCell>
              <TableCell>{record.wins}</TableCell>
              <TableCell>{record.losses}</TableCell>
              <TableCell>{record.percentage}</TableCell>
              <TableCell>{record.home}</TableCell>
              <TableCell>{record.away}</TableCell>
              <TableCell>{record.streak}</TableCell>
              <TableCell>{record.lastTen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
