import React from 'react'
import envelopemes from './img/envelopemess.png'
import buss from './img/buss.png'

export default function Pink() {
  return (
    <div>
        <div class='wrapper'>
            <div class='grid'>
                <div class="pink">
                    <div class="grid-item-left">
                        <div class="bg-green">
                            <div class="bg-green-item">
                                <h3 class="title-h3">Получайте бонусы и подарки</h3>
                                <p>Каждый месяц разыгрываем  10 000 рублей для наших клиентов</p>
                                {/* <input type="email" placeholder="Введите e-mail"> */}
                            </div>
                            <div class="bg-green-item">
                                <img class='messag' src={envelopemes} alt=""/>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
        
        
    </div>
  )
}
