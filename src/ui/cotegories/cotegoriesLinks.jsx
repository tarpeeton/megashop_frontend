import React, {memo} from 'react';
import {Link} from "react-router-dom";
import styles from "../../assets/css/cotegories.module.css";
import ishQurrolari from "../../assets/ishqurolari.jpg";

const Links = () => {
    return (
        <>
            <Link to="/product_list?categories=Smartfon" className={styles.Card}
                  style={{backgroundImage: `url("https://cdn.dxomark.com/wp-content/uploads/medias/post-157904/Apple-iPhone-15_-blue_featured-image-packshot-review.jpg")`}}>
                <h3 className={styles.CotogoriesName}> Telefonlar </h3>
            </Link>
            <Link to="/product_list?categories=Uy Rozgor Buyumlari" className={styles.Card}
                  style={{backgroundImage: `url('https://srcyrl.ootakukan.com/uploads/202339140/small/electric-fans-for-camping36219042-ca01-4d38-81ca-f9d9691d21ae.jpg')`}}>
                <h3 className={styles.CotogoriesName}> Uy Ro'zgor Buyumlari </h3>
            </Link>
            <Link to="/product_list?categories=ChinniBuyumlar" className={styles.Card}
                  style={{backgroundImage: `url('https://files.glotr.uz/company/000/015/352/products/2020/07/16/2020-07-16-19-01-37-093775-cbd2e077e476bef497abf0aac5cc4bdf.jpg?_=ozbol')`}}>
                <h3 className={styles.CotogoriesName}> Chinni Buyumlar </h3>
            </Link>
            <Link to="/product_list?categories=AvtomobilQismlari" className={styles.Card}
                  style={{backgroundImage: `url(https://olmashop.uz/media/images/Category/Avtotovarlar.jpg)`}}>
                <h3 className={styles.CotogoriesName}> Avtomobil Qismlari </h3>
            </Link>
            <Link to="/product_list?categories=QurilishVaTa'mirlash" className={styles.Card} style={{backgroundImage: `url(${ishQurrolari})`}}>
                <h3 className={styles.CotogoriesName}> Qurilish va taʼmirlash</h3>
            </Link>
            <Link to="/product_list?categories=Go'zallik va Parvarish" className={styles.Card}
                  style={{backgroundImage: `url(https://olmashop.uz/media/images/Category/Go%CA%BBzallik_va_parvarish.jpg)`}}>
                <h3 className={styles.CotogoriesName}>Go'zallik va Parvarish</h3>
            </Link>
            <Link to="/product_list?categories=Maishiy Texnika" className={styles.Card}
                  style={{backgroundImage: `url(https://olmashop.uz/media/images/Category/Maishiy_texnika.jpg)`}}>
                <h3 className={styles.CotogoriesName}>Maishiy texnika</h3>
            </Link>
            <Link to="/product_list?categories=Elektronika" className={styles.Card}
                  style={{backgroundImage: `url(https://olmashop.uz/media/images/Category/elektronika.jpg)`}}>
                <h3 className={styles.CotogoriesName}>Elektronika</h3>
            </Link>
        </>
    )
}

export default memo(Links);
