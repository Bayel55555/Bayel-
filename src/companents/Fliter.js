import React from 'react'
import youtube from './img/youtube.png'
import vk from './img/vk.png'
import fb from './img/fb.png'
import insta from './img/instagram.png'

export default function Fliter() {
  return (
    <div>
        <footer >
            <div class="bg-wite" >
                <div class="wrapper">
                    <div class="footer-top">
                        <div class="footer-top-item">
                            <ul class="social">
                                <li class="social-item"><a class="social-link social-youtube" href="" target="_blank"></a></li>
                                <li class="social-item"><a class="social-link social-vk" href="" target="_blank"></a></li>
                                <li class="social-item"><a class="social-link social-fb" href="" target="_blank"></a></li>
                                <li class="social-item"><a class="social-link social-instagram" href="" target="_blank"></a></li>
                            </ul>
                        </div>
                        <div class="footer-info">
                            <span >198555, Невский пр. 140, офис 140</span>
                            <span>8 (812) 123-45-67</span>
                            <button type="button">Обратный звонок</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="footer-bottom">
                <p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</p>
                <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
            
        </footer>
    </div>
  )
}
