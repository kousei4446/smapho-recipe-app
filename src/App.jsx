
import './App.css'
import Foot from './components/Foot/Foot'
import Head from './components/Head/Head'
import Main from "./components/Main/Main"

function App() {

  return (
    <div className='all'>
      <div className='head'>
        <div className='shadow'>
          <Head />
        </div>
      </div>
      <div className='main'>
        <Main />
      </div>
    </div>
  )
}

export default App
