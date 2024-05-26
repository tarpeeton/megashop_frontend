import React  from 'react';

import style from "../../assets/css/about.module.css"
import Footer from "../footer.jsx";
import BannerInfo from "./bannerInfo.jsx";

const About = () => {
    return(
        <>
            <div className={style.ContainerAbout}>
                <div className={style.BannerImage}>
                    <div className={style.BannerRigth}>
                        <img src='https://olmashop.uz/media/images/2024/04/08/photo_2023-09-12_22-39-12.jpg'
                             alt="Phones"/>
                    </div>
                    <div className={style.BannerLeft}>
                        <img src="https://olmashop.uz/media/images/2024/04/08/photo_2023-09-12_23-30-26.jpg"
                             alt="Phone"/>
                    </div>
                </div>
                <BannerInfo/>
            </div>
             <Footer/>
        </>
    )
}


export default About;