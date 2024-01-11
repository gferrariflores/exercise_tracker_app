// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './utils/routes'
import Index from './pages'
import About from './pages/about'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path={routes.index} element={<Index />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
