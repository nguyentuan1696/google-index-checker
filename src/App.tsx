import Root from './routes/root'
import Tutorial from './routes/tutorial'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={'/google-index-checker/'}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Root />} />
          <Route path='/huong-dan' element={<Tutorial />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
