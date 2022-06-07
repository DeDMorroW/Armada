import React from 'react'
import Header from '../../component/Header/header'
import Footer from '../../component/Footer/footer'  
import Service_section1 from './Section_one/service_section1'
import Service_section2 from './Section_two/service_section2'

export default function Service() {
  return (
    <>
      <Header/>
      <Service_section1 />
      <Service_section2 />
      <Footer/>
    </>
  )
}

