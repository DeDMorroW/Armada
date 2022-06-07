import React from 'react'
import './Main.css'
import clock2 from '../../../img/clock2.png'
import book2 from '../../../img/book2.png'
import settings2 from '../../../img/settings2.png'
import task2 from '../../../img/task2.png'

export default function service_section2() {
  return (
    <div className='service__section2'>
        <div className='container'>
              <h1 className='section__title'>Наши преимущества</h1>
          <div className='service__section_row'>
            <div className='service__section_top_block'>
              <div className='service__column_fist'>
                <img className='service__column_img'  src={clock2}/>
                <h1 className='service__column_h1'>Оперативность</h1>
              </div>
              <div className='service__column_second'>
                <img className='service__column_img'  src={book2}/>
                <h1 className='service__column_h1'>Высококвалифицированные специалисты</h1>
              </div>
              <div className='service__column'>
               <img className='service__column_img'  src={settings2}/>
                <h1 className='service__column_h1'>Современное оборудование</h1>
              </div>
              <div className='service__column_four'>
                <img className='service__column_img' src={task2}/>
                <h1 className='service__column_h1'>Широкий спектр услуг</h1>
              </div>
            </div>
            <div className='section__bottom_block'>
                    <h1 className='bottom_block_h1'>Оставьте бесплатную заявку</h1>
                    <p className='bottom_block_p'>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
                <form>
                    <input placeholder='Ваше имя'></input> 
                    <input placeholder='Ваш телефон'></input>
                    <button className='section__seven_btn'>Отправить</button>
                </form>
            </div>
           </div>
        </div>
    </div>
  )
}


 

