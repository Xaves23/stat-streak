import {
  placeholdersQueryOptions,
  Sandbox,
} from "@/features/sandbox-page/components/Sandbox"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/sandbox")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(placeholdersQueryOptions()),

  component: Sandbox,
})
