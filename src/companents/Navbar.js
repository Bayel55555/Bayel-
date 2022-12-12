import React from 'react'

export default function Navbar() {
  return (
        <div class="wrapper">
            <nav>
                <div class="navi">
                    <ul id="nav" >

                        <li><a href="">Доставка</a></li>
                        <li><a href="">Оплата</a></li>
                        <li><a href="">Отзывы</a></li>
                    </ul>
                    <ul id="nav">
                        <li><a href="">Вопрос-ответ</a></li>
                        <li><a href="">Контакты</a></li>
                        <div class="tog-btn" onclick="openMenu ()"> 
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </ul>
                        
                    
                </div>
                
                
            </nav>
        </div>
  )
}

