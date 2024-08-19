import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personalInfo')({
  component: () => <div>Hello /personalInfo!</div>
})