import React from 'react';
import Slider from 'infinite-react-carousel';

import './SliderComp.css';

const SliderComp = () => (
    <Slider dots arrows={false} autoplay autoplaySpeed={3000} className="slider-container">
      <div>
        <img className="slide" src="https://ep01.epimg.net/elpais/imagenes/2019/10/20/buenavida/1571569203_304000_1571569390_noticia_normal_recorte1.jpg" alt="Girl practicing yoga 1"></img>
      </div>
      <div>
        <img className="slide" src="https://static2.abc.es/media/bienestar/2019/09/17/apertura-yoga-kG6E--1200x630@abc.jpg" alt="Girl practicing yoga 2"></img>
      </div>
      <div>
        <img className="slide" src="https://classpass-res.cloudinary.com/image/upload/f_auto,q_auto/xnynmzl9rr2xsj3unqw8.png" alt="Girl practicing yoga 3"></img>
      </div>
      <div>
        <img className="slide" src="https://images.vogue.it/Storage/Assets/Crops/1478/12/1380/yoga_0x440.jpg" alt="Yoga retreat 2"></img>
      </div>
    </Slider>
);
   
export default SliderComp;