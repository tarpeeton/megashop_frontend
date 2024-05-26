import React  from 'react';

import style from "../../assets/css/shopingCard.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { BASE_URL } from "../../services/base_url.js";
import { useState } from "react";
import deleteItem from "../../helpers/delete_products.js";

const ShopinCard = ({ product, phone, info, shahar, tuman }) => {
  // Malumotlarni localstoragedan olish
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleDeleteItem = (index) => {
    const newCartItems = deleteItem(cartItems, index); // Funksiyani yangi joyda chaqirish
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  // Calculate total price by converting string prices to numbers and summing them up
  const totalPrice = product
    ? product.reduce(
        (accumulator, currentValue) =>
          accumulator + parseInt(currentValue.price.replace(/\D+/g, "")),
        0
      )
    : cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + parseInt(currentValue.price.replace(/\D+/g, "")),
        0
      );
  const selectProduct = [...(product || []), ...(cartItems || [])];

  const productOrder = async (productID, phone, info, shahar, tuman) => {
    console.log(
      `Maxsulot buyutma berdi ${phone} , ${info} , ${shahar} , ${tuman} , ${productID}`
    );
  };
  return (
      <>
        <div className={style.ShopingContainer}>
          <div className={style.Shoping}>
            {selectProduct.map((item, index) => (
                <div key={index} className={style.Row}>
                  <div className={style.ProductImage}>
                    <img src={`${BASE_URL}/${item.image[0]}`} alt="Product Image"/>
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
                        startIcon={<DeleteIcon/>}
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
                Maxsulot Soni : <span style={{color: "yellow"}}>{cartItems.length}</span>
              </p>
            </div>
            <div className={style.Price}>
              {/* Display total price */}
              <p>
                Umumiy:{" "}
                <span style={{color: "yellow"}}>
              {totalPrice.toLocaleString()}so`m
            </span>
              </p>
            </div>
            <div className={style.Buttons}>
              <Button
                  onClick={() =>
                      productOrder(
                          selectProduct.map((item) => item._id),
                          phone,
                          info,
                          shahar,
                          tuman
                      )
                  }
                  variant="outlined"
              >
                Rasmiylashtirish
              </Button>
            </div>
          </div>
        </div>
      </>

  );
};

export default ShopinCard;
