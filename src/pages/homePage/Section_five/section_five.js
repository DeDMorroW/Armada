import React from 'react'
import './Main.css'
import card_one from '../../../img/card_one.png'
import card_two from '../../../img/card_two.png'
import card_three from '../../../img/card_three.png'
import card_four from '../../../img/card_four.png'

export default function Section_five() {
  return (
    <div className='section__five'>
        <div className='container'>
                <h1 className='section__title'>Наш прайс</h1>
            <div className='section__five_row'> 
                <div className='section__five_block'>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_one}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_two}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_three}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_four}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                </div>
                <div className='section__five_block'>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_one}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_two}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_three}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                    <div className='section__five_card'>
                        <img className='section__five_img' src={card_four}/>
                        <h1 className='section__five_h1'>Фасадная вывеска (подсветка внутреняя, железный короб, флекс)</h1>
                        <p>1990 сом</p>
                    </div>
                </div>
                <div className='btn_block'>
                    <a className='section__three_a' href='#'>Cкачать прайс</a> 
                </div>
            </div>
        </div>
    </div>
  )
}

