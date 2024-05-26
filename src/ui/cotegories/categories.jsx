import React, {memo} from "react";
import styles from '../../assets/css/cotegories.module.css';
import Product from "../product/product.jsx";
import Banner from "../banner/banner.jsx";
import Parallax from "../parallax.jsx";
import Footer from "../footer.jsx";
import Links from "./cotegoriesLinks.jsx";
import LastContainer from "./LastContainer.jsx";
import  {CarouselItems} from "../slider/Carousel.jsx";

const Categories = () => {
    return (
        <>

            <div  className={styles.Carousel} >
                <CarouselItems/>

            </div>

            <div className={styles.Container}>
                <Links/>
            </div>
          <LastContainer/>
            <Product/>
            <br/>
            {/*Banner Uchun*/}
            <Banner/>
            {/*Parallx uchun */}
            <Parallax/>
            <Footer/>
        </>
    )
}

export default memo(Categories);
