import React from 'react'
import './Main.css'
import clock from '../../../img/clock.png'
import phone from '../../../img/Phone.png'
import location from '../../../img/location.png'

export default function section() {
  return (
    <section className='section__contact'>
      <div className='container'>
        <div className='section__row'>

          {/* <-- Left block --> */}

          <div className='section__left_block'>
             <h1 className='title'>Контакты</h1>
            <div className='section__line'>
                <img className='icon' src={clock}/>
              <div className='section__column'>
                <h1>Режим работы</h1>
                  <p>c 10:00 до 20:00</p>
                  <p>Сб, Вс - выходной.</p>
              </div>
            </div>
            <div className='section__line'>
                <img className='icon' src={phone}/>
              <div className='section__column'>
                <h1>Телефон</h1>
                <p>+996(0705)978-200,+996(0773)577-575</p>
              </div>
            </div>
            <div className='section__line'>
                <img className='icon' src={location}/>
              <div className='section__column'>
                <h1>Адрес</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
              </div>
            </div>
          </div>
          {/* <-- /left block */}

          {/* <-- right block --> */}
          <div className='section__right_block'>
            <iframe id="gmap__canvas" src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d10420.020429828415!2d74.56520113360648!3d42.872435757830544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d42.871693199999996!2d74.57449179999999!4m0!5e0!3m2!1sru!2skg!4v1653249716557!5m2!1sru!2skg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
          {/* <-- /right block --> */}
        </div>
      </div>   
    </section>
  )
}