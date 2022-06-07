import React from 'react'
import './Main.css'
import section__two_first_img from '../../../img/Group.png'
import section__two_second_img from '../../../img/Group2.png'
import section__two_third_img from '../../../img/Group3.png'
import section__two_fourth_img from '../../../img/Group4.png'

export default function Section_two() {
  return (
    <div className='section__two'>
        <div className='container'>
            <h1 className='section__title'>Наши услуги</h1>
            <div className='section__two_row'>
                <div className='section__two_block'>
                    <img src={section__two_first_img}/>
                    <h1 className='section__two__title_first'>Конструкция под ключ</h1>
                    <p>Хотите узнать подробность,телефон для связи:</p>
                    <h6>+996 (705) 978-200</h6>
                </div>
                <div className='section__two_block'>
                    <img src={section__two_second_img}/>
                    <h1 className='section__two_title'>Вывески, объемные буквы</h1>
                    <p>Хотите узнать подробность,телефон для связи:</p>
                    <h6>+996 (705) 978-200</h6>
                </div>
                <div className='section__two_block'>
                    <img  src={section__two_third_img}/>
                    <h1 className='section__two_title'>Визитки, буклеты, полиграфия</h1>
                    <p>Хотите узнать подробность,телефон для связи:</p>
                    <h6>+996 (705) 978-200</h6>
                </div>
                <div className='section__two_block'>
                    <img src={section__two_fourth_img}/>
                    <h1 className='section__two_title'>Банеры, самоклейка, монтажная установка </h1>
                    <p>Хотите узнать подробность,телефон для связи:</p>
                    <h6>+996 (705) 978-200</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
