import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
      <nav className='container flex h-14 items-center'>
        <ul className='flex space-x-6'>
          <li>
            <Link to={`/`}>Trang chủ</Link>
          </li>
          <li>
            <Link to={`/huong-dan`}>Hướng dẫn</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
