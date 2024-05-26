import React  from 'react';
import style from '../../assets/css/banner.module.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ForumIcon from '@mui/icons-material/Forum';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
const Banner = () => {
    return(
        <div className={style.banner}>
            <div className={style.container}>
                <div className={style.Banner_item}>
                    <LocalShippingIcon/>
                    <h5>
                        XAVFSIZ YETKAZIB BERISH XIZMATI
                    </h5>
                    <h6>Barcha xaridlarni yetkazib berish !</h6>
                </div>
                {/*    2 */}
                <div className={style.Banner_item}>
                    <CurrencyExchangeIcon className={style.RatotateIcon}/>
                    <h5>
                        PULNI QAYTARISH KAFOLATI
                    </h5>
                    <h6>24/2 soat ichida qaytariladi !</h6>
                </div>
                <div className={style.Banner_item}>
                    <ForumIcon/>
                    <h5>
                        24/7 YORDAM MARKAZI
                    </h5>
                    <h6>Barcha savollaringizga javob beriladi !</h6>
                </div>
                <div className={style.Banner_item}>
                    <CheckBoxOutlinedIcon/>
                    <h5>
                        XAVFSIZ TO'LOVLAR
                    </h5>
                    <h6>Barcha to'lovlar xavfsiz va ishonchli !</h6>
                </div>
            </div>
        </div>
    )
}


export default Banner;