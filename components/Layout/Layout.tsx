import React from 'react'
import NavBar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return(
    <div>
      <NavBar/>
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
