import React  from 'react';

import { useState , useEffect } from "react";
import style from "../../assets/css/shopingForm.module.css";
import { useId } from 'react';

import { useMask } from '@react-input/mask';
import ShopinCard from "./shopinCard";
import { GetProduct } from "../../actions/product";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ShopingBug from "./shopingBag.jsx";

const ShoppingForm = () => {
    const [phone , setPhone] = useState('')
    const [info , setInfo] = useState('')
    const [shahar , setShahar] = useState('')
    const [tuman , setTuman] = useState('')
    const products = useSelector(state => state.product.singleProduct);

    const  {id} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetProduct(id))
    }, []);
    const vegetableSelectId = useId();
    const inputRef = useMask({ mask: '+___ (__) ___-__-__', replacement: { _: /\d/ } });

    const ProductArray = products ? [products] : null;
    return (
        <>
            <div className={style.container}>
                <div className={style.Title}>
                    <h1>Buyurtma rasmiylashtirish</h1>
                </div>
                <div className={style.Forms}>
                    <div className={style.formInfo}>
                        <form>
                            <div className={style.PhoneNumber}>
                                <input placeholder="+998 (__) ___-__-__"  ref={inputRef}  onChange={e => setPhone(e.target.value)}/>
                            </div>
                            <div className={style.userInfo}>
                                <input type="text" onChange={e => setInfo(e.target.value)} placeholder="F.I.SH" />
                            </div>
                        </form>

                    </div>
                    <div style={{ marginTop: "20px" }} className={style.formInfo}>
                        <div className={style.PhoneNumber}>
                            <label> Viloyat</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                defaultValue="0"
                                id={vegetableSelectId}
                                onChange={e => setShahar(e.target.value)}
                                // Set the default selected value here
                            >
                                <option value="Toshkent shahri">Toshkent shahri</option>
                                <option value="Andijon viloyati">Andijon viloyati</option>
                                <option value="Buxora viloyati">Buxora viloyati</option>
                                <option value="Jizzax viloyati">Jizzax viloyati</option>
                                <option value="Qashqadaryo viloyati">Qashqadaryo viloyati</option>
                                <option value="Navoiy viloyati">Navoiy viloyati</option>
                                <option value="Namangan viloyati">Namangan viloyati</option>
                                <option value="Toshkent viloyati">Toshkent viloyati</option>
                                <option value="Farg`ona viloyati">Farg`ona viloyati</option>
                                <option value="Xorazm viloyati">Xorazm viloyati</option>
                                <option value="Samarqand viloyati">Samarqand viloyati</option>
                                <option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
                            </select>
                        </div>
                        <div className={style.userInfo}>
                            <label> Shahar / Tuman</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={e => setTuman(e.target.value)}
                                defaultValue="01" // Set the default selected value here
                            >
                                <option value="Andijon shahri">Andijon shahri</option>
                                <option value="Andijon tumani">Andijon tumani</option>
                                <option value="Asaka tumani">Asaka tumani</option>
                                <option value="Baliqchi tumani">Baliqchi tumani</option>
                                <option value="Bo`ston tumani">Bo`ston tumani</option>
                                <option value="Buloqboshi tumani">Buloqboshi tumani</option>
                                <option value="Izboskan tumani">Izboskan tumani</option>
                                <option value="Xonobod tumani">Xonobod tumani</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.SelectedProducts}>
                    <h2 style={{fontSize: "21px"}}>Tanlangan maxsulotlar</h2>
                </div>

            </div>
            {!ProductArray ? <span>Malumot yigilyapti......</span> : <ShopingBug product={ProductArray}/>}
        </>
    );
};

export default ShoppingForm;