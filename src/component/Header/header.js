import React from 'react'
import logo from '../../img/logo.png'
import '../../../src/component/Header/Main.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>  
    <div className='container'>
      <div className='left__block'>
      <p className='header__page'>Наша сила в вашем успехе!</p>
    </div>
    <div className='right__block'>
      <p className='header__page'>Нужна помощь? Свяжитесь с нашим экспертом</p>
      <a className='number' href='0705978200'>+996(705)978200</a>
      </div>
    </div>
</header>
    <navbar>
        <Link to="/"><img src={logo}/></Link>
          <div className='nav__a'>
            <Link to="/service" className='header__a'>Услуги </Link>
            <Link to="/" className='header__a'>О нас</Link>
            <Link to="/contact" className='header__a'>Контакты</Link>
            <Link to='' className='header__a'>Портфолио</Link>
            <Link to='' className='header__a'>Производство </Link>
            <button className='btn'>Скачать прайс</button>
          </div>
      </navbar>
</>
  )
}
