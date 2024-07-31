import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Layout() {
  return (
    <div className='min-h-screen'>
      <header>
        <Navbar />
      </header>
      <div className=' '>
        <main className=' container mx-auto px-4'>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}
