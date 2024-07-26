import React from "react";

import style from "../assets/css/parallax.module.css"

const Parallax = () => {
    return(
        <>
            <div className={style.Parralax}
                 style={{width: '100' , height: '100vh' ,
                     backgroundAttachment:"fixed" ,
                     backgroundImage: `url('https://wallpapercave.com/wp/wp4810879.jpg')`,
                     backgroundSize:'cover' ,
                     backgroundRepeat:'no-repeat',
                 }}>
            </div>
            <div className={style.Parralax}  style={{width: '100' , height: '50vh' ,
                backgroundImage: `url('https://cdn.shopify.com/s/files/1/0761/7970/2080/files/1200x800_0df1150f-f496-4796-a830-d34a862c4696_1200x.jpg?v=1715941961')`,
                backgroundPosition:'center center' ,
                backgroundRepeat:'no-repeat',
                padding: "40px"
            }}>
            </div>
        </>
    )
}


export default Parallax;
