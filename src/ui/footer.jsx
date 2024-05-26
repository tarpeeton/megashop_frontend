import React from "react";

import {Link} from "react-router-dom";
import style from "../assets/css/footer.module.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer =  () => {
    return(
        <div className={style.FooterContainer}>
            <div className={style.SocialLinks}>
                <div className={style.Links}>
                    <Link to={"https://t.me/@tot_rustem"}>
                        <TelegramIcon />
                    </Link>
                    <Link to={"https://www.instagram.com/rus11_05/"}>
                        <InstagramIcon />
                    </Link>
                    <Link to={"https://facebook.com"}>
                        <FacebookOutlinedIcon />
                    </Link>
                </div>
            </div>
            <div className={style.Copyrigth}>
                <p>© 2024 Megashop All Rights Reserved.</p>
            </div>
        </div>
    )
}



export default Footer;