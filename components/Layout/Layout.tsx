import React from 'react'
import NavBar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return(
    <div className="coloredContainer">
      <NavBar />
      {children}
      <footer>This is the footer</footer>

      <style jsx>{`
        .coloredContainer {
          background: salmon
        }
        footer {
          background: lightblue
        }
      `}</style>
    </div>
  )
}

export default Layout
