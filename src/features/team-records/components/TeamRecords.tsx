import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { fetchStandings } from "../api/teamRecordsApi";

export const teamRecordsQueryOptions = () =>
  queryOptions({
    queryKey: ["teamRecords"],
    queryFn: () => fetchStandings(),
    staleTime: 1000 * 60 * 60 * 24,
  });

export const TeamRecords = () => {
  const { data: teamRecords } = useSuspenseQuery(teamRecordsQueryOptions());

  return (
    <div>
      {teamRecords.slice(0, 10).map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
};
