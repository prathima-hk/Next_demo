import layout from '../styles/Layout.module.css'
import Nav from './Nav';

const Layout =  ({children}) => {
    return (
        <>
        <Nav/>
      <div className={layout.container}>
        {children}
      </div>
      </>
    )
  }
  
  
  export default Layout;