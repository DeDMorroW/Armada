import React from 'react'
import './Main.css'
import banner from '../../../img/banner.png'
import leaflets from '../../../img/leaflets.png'
import mounting from '../../../img/mounting.png'
import self from '../../../img/self.png'
import booklet from '../../../img/booklet.png'
import visit from '../../../img/visit.png'
import bigImg from '../../../img/bigImg.png'


export default function Service_section1() {
  return (
    <div className='Service__section1'>
        <div className='container'>
          <h1 className='section__title'>Наши услуги</h1>
            <div className='Service__section_main_block'>
              <div className='Service__section_top_block'>
                  <div className='first__column'>
                    <img className='Service__section_img' src={mounting}/>
                    <img className='Service__section_img_bottom' src={booklet}/>
                  </div>
                  <div className='second__column'>
                    <img className='Service__section_img' src={self}/>
                    <img className='Service__section_img_bottom' src={visit}/>
                  </div>
                  <div className='third__column'>
                    <img className='Service__section_top_block_img' src={banner}/>
                  </div>
              </div>
              <div className='Service__section_bottom_block'>
                  <img className='Service__section_bottom_block_img' src={bigImg}/>
                  <img className='Service__section_img' src={leaflets}/>
              </div>
            </div>
        </div>
    </div>
  )
}

