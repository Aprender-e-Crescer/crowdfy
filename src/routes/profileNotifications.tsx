import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(`/profileNotifications`)({
  component: ProfileNotifications,
})

function ProfileNotifications() {
  return <div className="p-2">
    Coloquem seus Componentes aqui para testar
  </div>
}