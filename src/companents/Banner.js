import React from 'react'
import banner from './img/bg.png'
export default function Banner() {
  return (
    <div>
        <section class="banner">
            {/* <img src={banner} alt='ty'/> */}
            <div class="wrapper">
                <h1 class="title">Супер кресло</h1>
                <p>Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее</p>
                <a class="btn" href="#">Подробнее</a>
            </div>
        </section>
    </div>
  )
}
