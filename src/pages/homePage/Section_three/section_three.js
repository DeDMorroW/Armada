import React from 'react'
import './Main.css'
import img_one from '../../../img/img_one.png'
import img_two from '../../../img/img_two.png'
import img_three from '../../../img/img_three.png'
import img_four from '../../../img/img_four.png'
import img_five from '../../../img/img_five.png'
import img_six from '../../../img/img_six.png'

export default function Section_three() {
  return (
    <div className='section__three'>
        <div className='container'>
                <h1 className='section__title'>Наши работы</h1>
            <div className='section__three_row'>
                <div className='section__three_column'>
                    <div className='section__three_block'>
                        <img className='section__three_img' src={img_one}/>
                        <h1 >Работа на Манаса</h1>
                    </div>
                    <div className='section__three_block'>
                        <img className='section__three_img' src={img_two}/>
                        <h1 >Работа на Манаса</h1>
                    </div>
                    <div className='section__three_block'>
                        <img className='section__three_img' src={img_three}/>
                        <h1 >Работа на Манаса</h1>
                    </div>
                </div>
                <div className='section__three_column'>
                    <div className='section__three_block'>
                        <img className='section__three_img' src={img_four}/>
                        <h1 >Работа на Манаса</h1>
                    </div>
                    <div className='section__three_block'>
                        <img className='section__three_img' src={img_five}/>
                        <h1 >Работа на Манаса</h1>
                    </div>
                    <div className='section__three_block'>
                        <img className='section__three_img' src={img_six}/>
                        <h1 >Работа на Манаса</h1>
                    </div>
                </div>
                <div className='btn_block'>
                    <a className='section__three_a' href='#'>Все работы</a> 
                </div>
            </div>
        </div>
    </div>
  )
}
