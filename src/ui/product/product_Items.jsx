import React, {memo} from "react";
import style from "../../assets/css/product.module.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined.js";
import { BASE_URL } from "../../services/base_url.js";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import CommentIcon from '@mui/icons-material/Comment';
const ProductItem = memo(({ pro, navigateToDetails, setProductID, saveProduct }) => {

    return (
        <>
                    <div className={style.ProductItems}>
                        <div className={style.ProductStatus}><p> NEW</p></div>
                        <div className={style.ItemImage}>
                            <LazyLoadImage
                                src={`${BASE_URL}/${pro.image[0]}`}
                                effect="blur"
                                alt="Image Alt"
                            />
                        </div>
                        <div className={style.ProductItemname}>
                            <div className={style.ProductItemName}>
                                <p>
                                    {pro.productname}
                                </p>
                            </div>
                            <div className={style.ProductItemRating}>
                                <div className={style.RatingStar}>
                                    <button onClick={() => setProductID(pro._id)} className={style.RatingButton}
                                            type="button"
                                            data-toggle="modal" data-target="#exampleModalCenter">
                                        <StarBorderIcon/>
                                        <StarBorderIcon/>
                                        <StarBorderIcon/>
                                        <StarBorderIcon/>
                                        <StarBorderIcon/>
                                    </button>
                                </div>
                                <div className={style.ProductRatingComments}>
                                    <p className={style.CommentInfo}><CommentIcon/> <span>12</span></p>
                                </div>
                            </div>
                            <div style={{marginTop: "10px"}} className={style.ProductCost}>
                                <p> {pro.price}</p>
                            </div>
                            <div className={style.ProductNavigationButtonsa}>
                                <button onClick={() => navigateToDetails(pro._id)}>
                                    <p>
                                        Hoziroq Sotib Olish
                                    </p>
                                </button>
                                <button onClick={() => saveProduct(pro)}>
                                    <AddShoppingCartOutlinedIcon/>
                                </button>
                            </div>
                        </div>
                    </div>

        </>
    );
});

export default ProductItem;
