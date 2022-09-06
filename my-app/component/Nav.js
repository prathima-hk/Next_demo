import layout from '../styles/Layout.module.css'
import Link from 'next/link'

const Nav =  () => {
    return (
      <nav>
        <ul className={layout.menu}>
            <li className={layout.list}>
                <Link href='/'>Home</Link>
            </li>  
            <li className={layout.list}>
                <Link href='/about'>About</Link>
            </li>
            <li className={layout.list}>
             <Link href='/article'>Articles</Link>
            </li>
        </ul>
      </nav>
    )
  }
  
  
  export default Nav;