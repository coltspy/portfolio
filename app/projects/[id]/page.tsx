// app/projects/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import ProjectPage from '@/app/components/ProjectPage'

export default function Project() {
  const params = useParams()
  const id = params.id as string
  
  return <ProjectPage params={{ id }} />
}