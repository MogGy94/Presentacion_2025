import { useState } from 'react'

import * as React from 'react';
import TextAnimation from './components/Textanimation/TextAnimation';
import NavBar from './components/NavBar/NavBar';
//import GraciasView from './view/gracias/gracias';

import './App.css'
import {
  Header,
  Slide_2
} from './Slides';

function App() {
  const [count, setCount] = useState(0)
  const gracias = {
    l_main: "Putos",
    l_sub: "Pinches",
    d_main: "Gracias",
    d_sub: "muchas"
  }
  const contents = {
    s1: <Header />,
    s2: <Slide_2 />,
    s3: <Slide_2 />,
    s4: <Slide_2 />,
    s5: <Slide_2 />,
    s6: <Slide_2 />,
    s7: <TextAnimation {...gracias} />
    //s7: <GraciasView />,
  }
  return (
    <>
      <NavBar {...{ contents }}></NavBar>
    </>
  )
}

export default App
