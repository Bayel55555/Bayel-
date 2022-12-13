import React from 'react'
import image from './img/image.png'

export default function Ampuls() {
  return (
    <div class="section">
        <div class="impuls">
            <div class="q">
                <div class="b">
                    <div class="s"><img class='image' src={image} alt=""/></div>   
                    <div class="s"><img class='image' src={image} alt=""/></div>    
                </div>   
                <div class="b">
                    <div class="s"><img class='image' src={image} alt=""/></div>
                    <div class="s"><img class='image' src={image} alt=""/></div>
                </div>
            </div>
  
        </div>
    </div>
  )
}
