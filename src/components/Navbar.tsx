import { Link } from 'react-router-dom'
import { ModeToggle } from '../components/ModeTogge'
import { Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
      <nav className='container h-14 flex justify-between items-center'>
        <div>
          <ul className='flex space-x-6'>
            <li>
              <Link to={`/`}>Trang chủ</Link>
            </li>
            <li>
              <Link to={`/huong-dan`}>Hướng dẫn</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center space-x-4 '>
          <Link
            to='https://github.com/nguyentuan1696/google-index-checker'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Github />
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}
