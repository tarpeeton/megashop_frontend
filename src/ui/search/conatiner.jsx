import React, { useState } from 'react';
import { useSearchParams} from "react-router-dom";
import {searchProduct} from "../../actions/product.js";
import {useDispatch, useSelector} from "react-redux";
import style from '../../assets/css/search.module.css';
import image from "./undraw_Searching_re_3ra9.png"

import Product from "../product/product.jsx";
import SearchIcon from '@mui/icons-material/Search';
import Starts from "./starts.jsx";
import {Pagination} from "@mui/material";
import ProductItem from "../product/product_Items.jsx";
const SearchProduct = () => {
    const [product, setProduct] = useState('');
    const products = useSelector((state) => state.product.product);
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    const { count , currentPage } = useSelector((state) => state.product); // Redux store dan currentPage va totalPages olish
    const [counts , setCounts] = useState(1);

    let pageCount = Math.ceil(count / currentPage);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams(`productname=${product}`);
        dispatch(searchProduct(product , counts))

    };

    const handlePaginationChange = (event, value) => {
        setCounts(value)}
    return (
        <>

            <div className={style.ConatinerWrapper}>
                <div className={style.Conatiner}>
                    <Starts/>
                    <div className={style.ConatinerForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={style.rowSearching}>
                                <SearchIcon/>
                                <input placeholder='Iphone' onChange={e => setProduct(e.target.value)} value={product}/>
                            </div>
                            <button type="submit">Qidirish</button>
                        </form>
                    </div>
                    <div className={style.ContainerIlustration}>
                        <img src={image}/>
                    </div>

                </div>
                <div className={style.ContainerItems}>
                    {
                        products.map((pro, index) => (
                            <ProductItem key={index} pro={pro}
                            />
                        ))
                    }
                </div>
                <div style={{width: "200px", margin: "0 auto"}}>
                    <Pagination
                        count={pageCount} // Total number of pages
                        page={counts} // Current page number
                        color="secondary"
                        onChange={handlePaginationChange} // Function to handle page change
                    />

                </div>
            </div>

        </>
    );
};

export default SearchProduct;
