import React, {memo} from 'react';
import style from "../../assets/css/product.module.css";
import {Link} from "react-router-dom";
import styles from "../../assets/css/cotegories.module.css";

const FooterCotegories = () => {
    return (
        <div className={style.productsCotegories}>
            <div className={style.ProductCotegoriesRow}>
                <img src="https://olmashop.uz/static/new/building.png" alt="Qurilish va ta'mirlash"/>
                <Link to="/Qurilish" className={styles.infoCotegories}>
                    <p>
                        Qurilish va ta'mirlash </p>
                    <span>Uy qurilishi materiallari</span>
                </Link>
            </div>
            <div className={style.ProductCotegoriesRow}>
                <img src="https://olmashop.uz/static/new/watch.png" alt="Sogat"/>
                <Link to="/Qurilish" className={styles.infoCotegories}>
                    <p>
                        Soatlar</p>
                    <span>Barcha turdagi soatlar</span>
                </Link>
            </div>
        </div>
    )
}


export default memo(FooterCotegories)