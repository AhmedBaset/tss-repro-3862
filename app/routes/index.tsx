import { createFileRoute } from '@tanstack/react-router'
import { getHeader } from "@tanstack/react-start/server"

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const header = getHeader("Authorization");
    console.log(header)
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/"!</div>
}
