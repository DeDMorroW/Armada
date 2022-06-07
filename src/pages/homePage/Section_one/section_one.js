import React from 'react'
import './Main.css'
import instagram from '../../../img/instagram.png'
import facebook from '../../../img/facebook.png'
import whatsapp from '../../../img/whatsapp.png'

export default function Section_one() {
  return (
    <section>
      <div className='section__one'>
        <div className='overlay'>
          <div className='container'>
            <div className='section__one_row'>
              <div className='section__one_left_block'>
                <h1 className='section__one_h1'>Наружная  реклама в Бишкеке </h1>
                <p className='section__one_p'>Произдводство наружной рекламы и создание проектов под ключ</p>
                <button className='section__one_btn'>Оставить заявку</button>
              </div>
              <div className='section__one_right_block'>
                <img src={instagram}/>
                <img src={facebook}/>
                <img src={whatsapp}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
