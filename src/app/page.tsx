import Bio from '@/components/Bio'

import ProjectRequestForm from '@/components/ProjectRequestForm'
import Projects from '@/components/Projects'
import ScrollAppearNoJump from '@/components/ScrollFadeIn'
import React from 'react'

export default function Home() {
  return (
    <div>
      <ScrollAppearNoJump>
      <Bio />
      </ScrollAppearNoJump>
      <ScrollAppearNoJump>
      <Projects  />
      </ScrollAppearNoJump>
      <ScrollAppearNoJump>
        <ProjectRequestForm />
      </ScrollAppearNoJump>
    
    </div>
  )
}
