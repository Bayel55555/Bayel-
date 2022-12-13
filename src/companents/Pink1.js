import React from 'react'
import envelopemes from './img/envelopemess.png'
import buss from './img/buss.png'

export default function Pink1() {
  return (
    <div class='wrapper'>
        <div class='grid'>
            <div class="pink">
                <div class="grid-item-right">
                    <div class="bg-green">
                        <div class="bg-green-item">
                            <h3 class="title-h3">Заходите к нам</h3>
                            <p>Более 300 магазинов<br/>по всей России</p>
                            <a class="btn" href="#">Карта магазинов</a>
                        </div>
                        <div class="bg-green-item">
                            <img class='bus' src={buss} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}
