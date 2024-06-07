
import './App.css'
import Foot from './components/Foot/Foot'
import Head from './components/Head/Head'
import Main from "./components/Main/Main"

function App() {

  return (
    <div className='all'>
      <div className='head'>
        <Head />
      </div>
      <div className='main'>
        <Main />
      </div>
      <div className='foot'>
        <Foot />
      </div>
    </div>
  )
}

export default App
