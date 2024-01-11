// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './utils/routes'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="container mx-auto max-w-xl">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
