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
                
                
                
            </div>
        </div>
    </div>
  )
}
