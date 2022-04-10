import { useState } from 'react'
import logo from './img/Monarch_Color_splatter.png'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full bg-slate-100 flex flex-col items-center">
      <header className="flex flex-col items-center space-y-4">
        <img src={logo} className="max-w-sm mx-auto" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button className="p-3 bg-blue-400 rounded text-white" type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-blue"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <div className="flex-end w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default App
