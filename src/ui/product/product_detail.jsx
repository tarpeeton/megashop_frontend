import React from "react";

import style from "../../assets/css/productDetail.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "./slider.jsx";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined.js";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { saveProduct } from "../../helpers/save_product.js";
import { GetProduct } from "../../actions/product.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../services/base_url.js";

const ProductDetail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.singleProduct);
  useEffect(() => {
    dispatch(GetProduct(id));
  }, []);
  const ShopingOrder = (_id) => {
    navigate(`/shoping/order/${_id}`);
  };

  return (
    <>
      <div className={style.Conatiner}>
        <div className={style.Info}>
          <div className={style.multipleImage}>
            {products &&
              products.image &&
              products.image.map((image, index) => (
                <button key={index} className={style.Image}>
                  <LazyLoadImage src={`${BASE_URL}/${image}`} alt="Image Alt" />
                </button>
              ))}
          </div>
          <div className={style.someImage}>
            <Slider image={products && products.image} />
          </div>
          <div className={style.someInfo}>
            {products && (
              <>
                <h1> {products.productname}</h1>
                <p>{products.cotegories}</p>
                <p>{products.soldOut} sotilgan</p>
                <p className={style.price}>{products.price}</p>
                <div className={style.buttons}>
                  <button
                    onClick={() => ShopingOrder(products._id)}
                    title="Sotib olish"
                    className="btn btn-success d-flex row"
                  >
                    Hoziroq sotib olish{" "}
                    <AccountBalanceWalletIcon className="ml-2" />{" "}
                  </button>
                  <button
                    onClick={() => saveProduct(products)}
                    title="Savatga Qo'shish"
                    className="btn btn-dark d-flex row "
                  >
                    Savatchaga qo'shish{" "}
                    <AddShoppingCartOutlinedIcon className="ml-2" />{" "}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={style.Description}>
          <h2>Mahsulot tafsilotlari </h2>
          <span>{products && products.description}</span>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
