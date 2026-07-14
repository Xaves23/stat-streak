import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team-records')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/team-records"!</div>
}
