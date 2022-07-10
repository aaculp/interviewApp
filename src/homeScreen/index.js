// Libraries

import React from 'react'
import { Link } from "react-router-dom";

// Dependencies


const HomeScreen = () => {
  return (
    <div>
      <div>Quiz</div>
      <Link 
        to="/middleScreen" 
        state={{
          // this is where i will add state to pass on
        }}
        onClick={() => console.log("just clicked me")}
      >Start!</Link>
    </div>
  )
}

export default HomeScreen