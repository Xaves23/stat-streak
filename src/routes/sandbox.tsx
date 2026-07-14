import { createFileRoute } from "@tanstack/react-router";
import {
  placeholdersQueryOptions,
  Sandbox,
} from "@/features/sandbox-page/components/Sandbox";

export const Route = createFileRoute("/sandbox")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(placeholdersQueryOptions()),

  component: Sandbox,
});
