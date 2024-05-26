import style from "../../assets/css/product.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder.js";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeComment } from "../../actions/product.js";
const ratings = [1, 2, 3, 4, 5];

const CommentModal = ({ productID }) => {
  const userID = useSelector((state) => state.auth.user._id);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [phone, setPhone] = useState("");

  const WriteComment = () => {
    dispatch(writeComment(userID, productID, rating, comment, phone, name));
    setName("");
    setComment("");
    setPhone("");
    setRating("");
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Baxolash
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className={style.modalBodyForm}>
                <form>
                  <div className={style.userInfoRating}>
                    <div>
                      <input
                        id="name"
                        className="input"
                        value={name}
                        placeholder="Ismingizni Kiriting ( Rustam )"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        id="phone"
                        className="input"
                        value={phone}
                        placeholder="Telefon Raqamingizni Kiriting"
                        // 'getFieldProps' automatically handles onChange, onBlur, and value for the input.
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={style.productRewiew}>
                      <div className={style.ratingIcons}>
                        {ratings.map((value) => (
                          <React.Fragment key={value}>
                            <input
                              id={"star" + value}
                              className="input"
                              value={value}
                              type="radio"
                              required
                              name="rating"
                              onClick={(e) => setRating(e.target.value)}
                            />
                            <label
                              className="star"
                              htmlFor={"star" + value}
                              title="Qoniqarli"
                              aria-hidden="true"
                            >
                              <div className={style.starIcon}>
                                <StarBorderIcon />
                              </div>
                            </label>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={style.textAreaModal}>
                    <textarea
                      id="comment"
                      className="textarea"
                      required
                      value={comment}
                      placeholder="Matni Kiriting"
                      onChange={(e) => setComment(e.target.value)}
                      // 'getFieldProps' automatically handles onChange, onBlur, and value for the input.
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Yopish
              </button>
              <button className="btn btn-success" onClick={WriteComment}>
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CommentModal);
