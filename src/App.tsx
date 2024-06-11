// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Test from './src/test'
import Vid from './src/vid/test'

function App() {
  console.log('test 4')
  console.log('test 3')
  console.log('Big 2')
  console.log('Big 3')
  console.log('Big 4')
  // const [count, setCount] = useState(0)
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          Component={Test}
          path="/"
        />
        <Route
          Component={Vid}
          path="/vid"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
