import React from 'react'
import './Main.css'
import nike from '../../../img/nike.png'

export default function Section_six() {
  return (
    <div className='section__six'>
        <div className='container'>
        <h1 className='section__title'>Наши клиенты</h1>
            <div className='section__six_row'>
                <img className='section__six_img' src={nike}/>
                <img className='section__six_img' src={nike}/>
                <img className='section__six_img' src={nike}/>
                <img className='section__six_img' src={nike}/>
                <img className='section__six_img' src={nike}/>
                <img className='section__six_img' src={nike}/>
            </div>
        </div>
    </div>
  )
}
