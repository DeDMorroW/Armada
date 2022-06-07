import React from 'react'
import './Main.css'
import img_girl from '../../../img/img_girl.png'
import img_boy from '../../../img/img_boy.png'
import img_girl2 from '../../../img/img_girl2.png'

export default function Section_seven() {
  return (
    <div className='section__seven'>
        <div className='container'>
                <h1 className='section__title'>Наша команда</h1>
            <div className='section__seven_row'>
                <div className='section__seven_top_block'>
                    <div className='section__seven_column'>
                        <img className='section__seven_img' src={img_girl}/>
                        <h1 className='section__seven_h1'>Юля</h1>
                        <p>Соучредитель</p>
                    </div>
                    <div className='section__seven_column'>
                        <img className='section__seven_img' src={img_girl2}/>
                        <h1 className='section__seven_h1'>Анна</h1>
                        <p>Дизайнер</p>
                    </div>
                    <div className='section__seven_column'>
                        <img className='section__seven_img' src={img_boy}/>
                        <h1 className='section__seven_h1'>Андрей</h1>
                        <p>Соучредитель</p>
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
