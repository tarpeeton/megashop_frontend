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
            </div>
        </>
    )
}


export default Parallax;
