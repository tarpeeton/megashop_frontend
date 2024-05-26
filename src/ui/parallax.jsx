import React from "react";

import style from "../assets/css/parallax.module.css"

const Parallax = () => {
    return(
        <>
            <div className={style.Parralax}
                 style={{width: '100' , height: '100vh' ,
                     backgroundAttachment:"fixed" ,
                     backgroundImage: `url('https://olmashop.uz/static/assets/document/images/ads-1.png')`,
                     backgroundSize:'cover' ,
                     backgroundRepeat:'no-repeat',
                 }}>
            </div>
            <div className={style.Parralax}  style={{width: '100' , height: '50vh' ,
                backgroundImage: `url('https://olmashop.uz/static/assets/document/images/brands/Macbook.png')`,
                backgroundPosition:'center center' ,
                backgroundRepeat:'no-repeat',
                padding: "40px"
            }}>
            </div>
        </>
    )
}


export default Parallax;