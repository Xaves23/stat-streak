import { createFileRoute } from "@tanstack/react-router";
import { teamRecordsQueryOptions } from "@/features/team-records/components/TeamRecords";
import { TeamRecordsPage } from "@/features/team-records/components/TeamRecordsPage";

export const Route = createFileRoute("/team-records")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(teamRecordsQueryOptions());
  },
  component: TeamRecordsPage,
});
