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
                backgroundImage: `url('https://www.cgdirector.com/wp-content/uploads/media/2023/02/Is-MSI-a-Good-Laptop-Brand-Twitter-1200x675.jpg')`,
                backgroundPosition:'center center' ,
                backgroundRepeat:'no-repeat',
                padding: "40px"
            }}>
            </div>
        </>
    )
}


export default Parallax;
