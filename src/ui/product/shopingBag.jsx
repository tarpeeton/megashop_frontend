import React, { useState } from 'react';
import style from "../../assets/css/shopingCard.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { BASE_URL } from "../../services/base_url.js";
import deleteItem from "../../helpers/delete_products.js";
import { useNavigate } from "react-router-dom";


const ShopingBug = ({ product }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    // Combine product and cartItems arrays
    const mergedItems = [...(product || []), ...cartItems];
    const productID = mergedItems.map((item, index) => (item._id))
    const navigateID = productID[0]
    // Calculate total price by converting string prices to numbers and summing them up
    const totalPrice = mergedItems.reduce((accumulator, currentValue) =>
        accumulator + parseInt(currentValue.price.replace(/\D+/g, "")), 0);

    const handleDeleteItem = (index) => {
        const newCartItems = deleteItem(cartItems, index);
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };

    const navigate = useNavigate();
    const navigateOrder = () => {
        navigate(`/shoping/order/${navigateID}`);
    };

    return (
        <>
            <div className={style.ShopingContainer}>
                <div className={style.Shoping}>
                    {mergedItems.map((item, index) => (
                        <div key={index} className={style.Row}>
                            <div className={style.ProductImage}>
                                <img src={`${BASE_URL}/${item.image[0]}`} alt="Product Image" />
                            </div>
                            <div className={style.ProductName}>
                                <p>{item.name}</p>
                            </div>
                            <div className={style.ProductCotegories}>
                                <p className={style.ProductInfo}>{item.productname}</p>
                            </div>
                            <div className={style.ProductPrice}>
                                <p className={style.ProductInfoPrice}>{item.price}</p>
                                <Button
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => handleDeleteItem(index)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* SUMMARY */}
                <div className={style.Summary}>
                    <div className={style.SummaryTitle}>
                        <h1>Xulosa</h1>
                    </div>
                    <div className={style.AllItems}>
                        <p>
                            Maxsulot Soni : <span style={{ color: "yellow" }}>{mergedItems.length}</span>
                        </p>
                    </div>
                    <div className={style.Price}>
                        {/* Display total price */}
                        <p>
                            Umumiy:{" "}
                            <span style={{ color: "yellow" }}>
                                {totalPrice.toLocaleString()}so`m
                            </span>
                        </p>
                    </div>
                    <div className={style.Buttons}>
                        <Button variant="outlined" onClick={() => navigateOrder()}>
                            Rasmiylashtirish
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopingBug;
