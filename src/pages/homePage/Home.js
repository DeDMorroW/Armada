import React from 'react'
import Footer from '../../component/Footer/footer'
import Header from '../../component/Header/header'
import Section_one from './Section_one/section_one'
import Section_two from './Section_two/section_two'
import Section_three from './Section_three/section_three'
import Section_four from './Section_four/section_four'
import Section_five from './Section_five/section_five'
import Section_six from './Section_six/section_six'
import Section_seven from './Section_seven/section_seven'


export default function Home() {
  return (
    <>
    <Header />
    <Section_one/>
    <Section_two/>
    <Section_three />
    <Section_four />
    <Section_five />
    <Section_six />
    <Section_seven />
    <Footer/>
    </>
  )
}
