import { useState } from 'react'

import TextAnimation from './components/Textanimation/TextAnimation';
import NavBar from './components/NavBar/NavBar';
//import GraciasView from './view/gracias/gracias';

import './App.css'
import { Header } from './Slides';
import SLIDES from './Slides';



function App() {
  const [count, setCount] = useState(0)

  let SLIDE_COMPONENTS = {} 

  SLIDES.SLIDES_INFO.forEach((slides, num)=>{
    slides = {...slides, num: num}
    console.log(slides);
    if (num % 2 === 0 ){
      SLIDE_COMPONENTS = { ...SLIDE_COMPONENTS, [`S${num}`]: <SLIDES.Slide_1 {...slides} />}
    }else {
      SLIDE_COMPONENTS = { ...SLIDE_COMPONENTS, [`S${num}`]: <SLIDES.Slide_2 {...slides} /> }
    }
  })
  const gracias = {
    l_main: "Putos",
    l_sub: "Pinches",
    d_main: "Gracias",
    d_sub: "muchas"
  }
  const contents = {
    header: <Header />,
    ...SLIDE_COMPONENTS,
    last: <TextAnimation {...gracias} />
    //s7: <GraciasView />,
  }
  return (
    <>
      <NavBar {...{ contents }}></NavBar>
    </>
  )
}

export default App
