import React, { useState, useEffect, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductFilter } from "../../actions/product.js";
import { saveProduct } from "../../helpers/save_product.js";
import style from "../../assets/css/product.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import CommentModal from "./comment.jsx";
import ProductItem from "./product_Items.jsx";
import { Pagination } from "@mui/material";

const ProductList = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product); // Corrected state path
  const [productID, setProductID] = useState("");
  const navigate = useNavigate();
  const { count } = useSelector((state) => state.product); // Corrected state path

  let pageCount = Math.ceil(count / 10); // Adjusted to use a fixed limit (10 per page)
  const [counts, setCounts] = useState(1);

  useEffect(() => {
    dispatch(ProductFilter(search, counts));
  }, [search, dispatch, counts]);

  const navigateToDetails = (id) => {
    navigate(`/product_detail/${id}`);
  };

  const handleProductSave = (pro) => {
    saveProduct(pro);
  };

  const handlePaginationChange = (event, value) => {
    setCounts(value);
  };

  return (
    <>
      <div className={style.productSection}>
        {product.map((pro, index) => (
          <ProductItem
            key={index}
            pro={pro}
            navigateToDetails={navigateToDetails}
            saveProduct={handleProductSave}
            setProductID={setProductID}
          />
        ))}
        <CommentModal productID={productID} />
      </div>
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Pagination
          count={pageCount} // Total number of pages
          page={counts} // Current page number
          color="secondary"
          onChange={handlePaginationChange} // Function to handle page change
        />
      </div>
    </>
  );
};

export default memo(ProductList);
