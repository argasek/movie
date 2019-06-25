import React from 'react';
import Slider from "react-slick";
import './slider.scss';
import poster1 from './poster-1.jpg';
import poster2 from './poster-2.jpg';
import { Link } from 'react-router-dom';

const SliderHomePage = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <Slider className="homePageSlider" {...settings}>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster1} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster2} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster1} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster2} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster1} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster2} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster1} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>
            <div className="sliderItem">
                <Link to='/film' className="sliderImage">
                    <img src={poster2} alt="plakat" />
                    <div className="data">
                        <p className="rating"> 6/10 </p>
                        <p className="name"> Detektyw Pikachu </p>
                        <p className="type"> przygodowy </p>
                    </div>
                </Link>
            </div>

        </Slider>
    );
}

export default SliderHomePage;