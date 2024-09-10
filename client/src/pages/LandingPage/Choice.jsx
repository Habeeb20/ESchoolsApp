import React from 'react'
import FadeIn from '../../FadeIn'

const size = {
  fontSize: "30px"
}
const Choice = () => {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
    <FadeIn delay={0.2} direction="up">
      <h4 style={size} className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
        Make the right choices during your school year with...
      </h4>
    </FadeIn>
    </div>

  )
}

export default Choice
