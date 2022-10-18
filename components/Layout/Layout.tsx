import React from 'react'
import Navbar from '../Navbar/Navbar'
type props = {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer style={{ color: 'white' }}>My footer in my site</footer>
      <style jsx>{`
        footer {
          padding: 5px 0;
          font-size: 0.8rem;
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color: #6D6D6D;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Layout