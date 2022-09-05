import navStyles from '../styles/Nav.module.css';
import Link from 'next/link'

const Nav =  () => {
    return (
      <nav>
        <ul className={navStyles.menu}>
            <li className={navStyles.list}>
                <Link href='/'>Home</Link>
            </li>  
            <li className={navStyles.list}>
                <Link href='/about'>About</Link>
            </li>
        </ul>
      </nav>
    )
  }
  
  
  export default Nav;