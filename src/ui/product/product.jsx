import React, { useState, useEffect, memo } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import { GetAllProducts } from "../../actions/product.js";
import { saveProduct } from "../../helpers/save_product.js";
import style from '../../assets/css/product.module.css';
import CommentModal from "./comment.jsx";

import ProductItem from "./product_Items.jsx";
import { Pagination } from "@mui/material";

const Product = () => {
    const products = useSelector((state) => state.product.product);
    const { count , currentPage } = useSelector((state) => state.product); // Redux store dan currentPage va totalPages olish


    let pageCount = Math.ceil(count / currentPage);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [productID, setProductID] = useState('');
    const [counts , setCounts] = useState(1);

    useEffect(() => {
        dispatch(GetAllProducts(counts)); // Yangi sahifani olish uchun
    }, [dispatch , counts]);

    const navigateToDetails = (id) => {
        setProductID(id);
        navigate(`/product_detail/${id}`);
    };

    const handlePaginationChange = (event, value) => {
        setCounts(value)}

    return (
        <>
            <div className={style.productSection}>
            {
                    products.map((pro, index) => (
                        <ProductItem
                            key={index}
                            pro={pro}
                            navigateToDetails={navigateToDetails}
                            setProductID={setProductID}
                            saveProduct={saveProduct}
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
            <CommentModal productID={productID}/>
        </>
    );
}

export default memo(Product);
