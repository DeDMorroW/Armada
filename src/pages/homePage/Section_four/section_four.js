import React from 'react'
import './Main.css'
import img_seven from '../../../img/img_seven.png'
import img_eight from '../../../img/img_eight.png'
import img_nine from '../../../img/img_nine.png'

export default function Section_four() {
  return (
    <div className='section__four'>
      <div className='container'>
      <h1 className='section__title'>Производство</h1>
        <div className='section__four_row'>
        <img className='section__four_img' src={img_seven}/>
        <img className='section__four_img' src={img_eight}/>
        <img className='section__four_img' src={img_nine}/>
        </div>  
      </div>
    </div>
  )
}
