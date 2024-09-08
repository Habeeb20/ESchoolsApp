import { BiFontSize } from "react-icons/bi";
import FadeIn from "../../FadeIn";

import React from 'react'
const size = {
  fontSize: "30px"
}
function Connect() {
  return (
    <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
    <FadeIn delay={0.2} direction="down">
      <h3 style={size} className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
        Connect student, the world of students, schools and exams <button style={{ border: "1px solid black", backgroundColor:"greenyellow", padding: "25px", borderRadius:"25%", color:"white"}}>together</button>
      </h3>
    </FadeIn>

    <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
        if you are traveling with a group of friends
        </h5>
      </FadeIn>
    </div>




  )
}

export default Connect
