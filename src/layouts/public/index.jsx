import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Section, Footer } from '../../components/layout'
export const Public = () => {
  return (
    <>
      <Header/>
      
      <Section height='100'>
        <Outlet/>
      </Section>

      <Footer/>
    
    </>
  )
}
