import React from 'react'
import './style.scss'
export const Footer = () => {
  return (
    <footer>
    <p>
      &copy; {new Date().getFullYear()} Your Company. All rights reserved. 
      Follow us on: 
      <a href="https://twitter.com/yourcompany">Twitter</a>, 
      <a href="https://facebook.com/yourcompany">Facebook</a>.
    </p>
  </footer>
  )
}
