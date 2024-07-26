import React, {memo} from 'react';
import {Link} from "react-router-dom";
import styles from "../../assets/css/cotegories.module.css";
import ishQurrolari from "../../assets/ishqurolari.jpg";

const Links = () => {
    return (
        <>
            <Link to="/product_list?categories=Smartfon" className={styles.Card}
                  style={{backgroundImage: `url("https://cdn.easycep.com/assets/_blog/img/post/2023/04/en-iyi-fiyat-performans-telefonlar-88.webp?v=1.2.50")`}}>
                <h3 className={styles.CotogoriesName}> Telefonlar </h3>
            </Link>
            <Link to="/product_list?categories=Uy Rozgor Buyumlari" className={styles.Card}
                  style={{backgroundImage: `url('https://myuborka24.ru/cases-img/hozka-main.webp')`}}>
                <h3 className={styles.CotogoriesName}> Uy Ro'zgor Buyumlari </h3>
            </Link>
            <Link to="/product_list?categories=ChinniBuyumlar" className={styles.Card}
                  style={{backgroundImage: `url('https://files.glotr.uz/company/000/015/352/products/2020/07/16/2020-07-16-19-01-37-093775-cbd2e077e476bef497abf0aac5cc4bdf.jpg?_=ozbol')`}}>
                <h3 className={styles.CotogoriesName}> Chinni Buyumlar </h3>
            </Link>
            <Link to="/product_list?categories=AvtomobilQismlari" className={styles.Card}
                  style={{backgroundImage: `url('https://st2.depositphotos.com/2518853/8028/v/450/depositphotos_80282876-stock-illustration-vector-car-spares-concept-with.jpg)`}}>
                <h3 className={styles.CotogoriesName}> Avtomobil Qismlari </h3>
            </Link>
            <Link to="/product_list?categories=QurilishVaTa'mirlash" className={styles.Card} style={{backgroundImage: `url('https://avtosreda.ru/info/uploads/articles/2023/03/13/stroitelnie-materiali.jpg')`}}>
                <h3 className={styles.CotogoriesName}> Qurilish va taʼmirlash</h3>
            </Link>
            <Link to="/product_list?categories=Go'zallik va Parvarish" className={styles.Card}
                  style={{backgroundImage: `url('https://worldclassmag.com/files/nodus_items/0004/2457/_cache/fit988x988-image-2457-1586269893.jpg')`}}>
                <h3 className={styles.CotogoriesName}>Go'zallik va Parvarish</h3>
            </Link>
            <Link to="/product_list?categories=Maishiy Texnika" className={styles.Card}
                  style={{backgroundImage: `url('https://frankfurt.apollo.olxcdn.com/v1/files/yresezz6tqdy2-UZ/image')`}}>
                <h3 className={styles.CotogoriesName}>Maishiy texnika</h3>
            </Link>
            <Link to="/product_list?categories=Elektronika" className={styles.Card}
                  style={{backgroundImage: `url('https://st.depositphotos.com/1000651/4362/i/450/depositphotos_43626833-stock-photo-morher-board-background.jpg')`}}>
                <h3 className={styles.CotogoriesName}>Elektronika</h3>
            </Link>
        </>
    )
}

export default memo(Links);
