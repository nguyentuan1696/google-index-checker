import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <header>
        <Navbar />
      </header>
      <div className='flex-1'>
        <main className=' container mx-auto px-4'>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
