// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import Canvas from './canvas'
// import { Customizer } from './pages/Customizer'

// import Home from './pages/Home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <main className='app tansition-all ease-in'>
//       {/* //<h1 className='head-text'>React - App</h1> */}
//       <Home/>
//       <Canvas/>
//       <Customizer/>
//     </main>
//   )
// }

// export default App






import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App