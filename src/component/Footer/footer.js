import React from 'react'
import '../../component/Footer/Main.css'

export default function Footer() {
  return (
    <footer>
      <div className='container'> 
        <div className='footer__row'>
          <div className='footer__first_block'>
          <h1 className='footer__title'>О компании</h1>
          <p className='footer__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
        </div>
        <div className='footer__second_block'>
          <h1 className='footer__title'>Информация</h1>
          <p className='footer__p'>Услуги</p>
          <p className='footer__p'>О нас</p>
          <p className='footer__p'>Контакты</p>
          <p className='footer__p'>Портфолио</p>
          <p className='footer__p'>Произдводство</p>
        </div>
        <div className='footer__thirt_block'>
          <h1 className='footer__title'>Контактная информация</h1>
          <p className='footer__p'>Бишкек, ул. Калык Акиева 66, ТЦ Весна, 3 этаж, офис №37</p>
          <p className='footer__p'>+996 (0553) 577-575</p>
          <p className='footer__p'>Email@gmail.com</p>
        </div>
        <div className='footer__fourth_block'>
          <h1 className='footer__title'>Мы в социальных сетях</h1>
          <p className='footer__p'>instagram</p>
          <p className='footer__p'>facebook</p>
        </div>
        </div>
      </div>
    </footer>
  )
}
