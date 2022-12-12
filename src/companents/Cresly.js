import creslo from './img/creslo.png'
import envelopemes from './img/envelopemess.png'
import buss from './img/buss.png'
import React from 'react'

export default function Cresly() {
  return (
    <div>
        <div class="wrapper">
            <div class="grid">
                <h2 class="title-h2">Специальные предложения</h2>
                <div class="rustam-ali">
                    
                    <div class='container__chair' >
                        <div class="stol">
                            <div class = 'chair__block'>
                                <img src={creslo} alt="kbu"/>
                                <p>Парикмахерское кресло «Норм» гидравлическое</p>
                                <h5>9 900 ₽ </h5>
                                <button>Купить</button>
                            </div>

                            <div class = 'chair__block'>
                                <img src={creslo} alt=""/>
                                <p>Парикмахерское кресло «Норм» гидравлическое</p>
                                <h5>9 900 ₽ </h5>
                                <button>Купить</button>
                            </div>
                        </div>
                        
                        <div class="stul">
                            <div class = 'chair__block'>
                                <img src={creslo} alt=""/>
                                <p>Парикмахерское кресло «Норм» гидравлическое</p>
                                <h5>9 900 ₽ </h5>
                                <button>Купить</button>
                            </div>

                            <div class = 'chair__block'>
                                <img src={creslo} alt=""/>
                                <p>Парикмахерское кресло «Норм» гидравлическое</p>
                                <h5>9 900 ₽ </h5>
                                <button>Купить</button>
                            </div>
                        </div>
                          
                          
                    </div>
                </div>
                
                <div class="pink">
                    <div class="grid-item-left">
                        <div class="bg-green">
                            <div class="bg-green-item">
                                <h3 class="title-h3">Получайте бонусы и подарки</h3>
                                <p>Каждый месяц разыгрываем  10 000 рублей для наших клиентов</p>
                                {/* <input type="email" placeholder="Введите e-mail"> */}
                            </div>
                            <div class="bg-green-item">
                                <img src={envelopemes} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item-right">
                    <div class="bg-green">
                        <div class="bg-green-item">
                            <h3 class="title-h3">Заходите к нам</h3>
                            <p>Более 300 магазинов<br/>по всей России</p>
                            <a class="btn" href="#">Карта магазинов</a>
                        </div>
                        <div class="bg-green-item">
                            <img src={buss} alt=""/>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
