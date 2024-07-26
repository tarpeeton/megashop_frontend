import React, {memo} from 'react';
import styles from "../../assets/css/cotegories.module.css";
import {Link} from "react-router-dom";

const LastContainer = () => {
    return (
        <div className={styles.LastContainer}>
            <div className={styles.BigContainer}>
                <img src="https://www.goldenpages.uz/timur/1400909-16/avtozapchasti_rubrics.jpg" alt="image"/>
                <Link to="/product_list?categories=AvtomobilQismlari" className={styles.info}>
                    <p>Avtomobillar mahsuloti </p>
                    <h4>Avtomobillar uchun ehtiyot qismlar</h4>
                </Link>
            </div>
            <div className={styles.GridContainers}>
                <div className={styles.Row}>
                    <Link to="/product_list?categories=Go'zallik va Parvarish" className={styles.GridChilder}>
                        <img src='https://www.silady.ru/upload-files/category-img/lico.jpg' alt="Rasm"/>
                        <div className={styles.infoClick}>
                            <p>Go'zallik va Parvarish </p>
                            <h4>Kosmetika mahsulotlar</h4>
                        </div>
                    </Link>
                    <Link to="/product_list?categories=Elektronika" className={styles.GridChilder}>
                        <img alt="elektronika" src="https://avatars.mds.yandex.net/get-altay/10637174/2a0000018a3712ce173f87b643e8265e8778/L_height"/>
                        <div className={styles.replaceToPage}>
                            <p>Elektronika</p>
                            <h4>Elektron mahsulotlar</h4>
                        </div>
                    </Link>
                </div>

                <div className={styles.GridChilderFull}>
                    <Link to="/product_list?categories=Maishiy Texnika" className={styles.GridChilder}>
                        <img alt="Rasm" src="https://olmashop.uz/static/new/Household_appliances.png"/>
                        <div className={styles.InfoClick}>
                            <p>Maishiy texnika</p>
                            <h4>Kafolati Bilan !</h4>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export default memo(LastContainer);
