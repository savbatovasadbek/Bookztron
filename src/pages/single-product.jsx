import PropTypes from "prop-types";

import { instance } from "@/utils/use-request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../components/style/singleProduct.scss";

function SingleProduct({ wishList, handleLikeBtnClick, products }) {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    (async () => {
      const data = await instance.get("/home/newarrivals");
      let card = await data.data?.newArrivalList?.filter(
        (el) => el._id === productID
      );
      if (card.length === 0) {
        card = await products?.filter((el) => el._id === productID);
      }
      setProduct(card);
    })();
  }, [productID]);

  return (
    <div className="handle_single_product">
      {/* <h1>Single Product</h1> */}
      {product ? (
        <div className="product-page-container">
          <div className="product-page-item">
            <img
              className="bookcover-image"
              src={product[0].imgSrc}
              alt={product[0].imgAlt}
            ></img>
            <div className="item-details">
              <h2>{product[0].bookName}</h2>
              <hr></hr>
              <p>
                <b>Author : </b> &nbsp;&nbsp; <span>{product[0].author}</span>{" "}
              </p>
              <p className="item-description">
                <b>Description : </b> &nbsp;&nbsp;{" "}
                <span>{product[0].description}</span>{" "}
              </p>
              <p className="item-rating">
                <b>Rating : </b> &nbsp;&nbsp; <span>{product[0].rating}</span>{" "}
              </p>
              <h3 className="item-price-details">
                Rs. {product[0].discountedPrice} &nbsp;&nbsp;
                <del>Rs. {product[0].originalPrice}</del> &nbsp;&nbsp;
                <span className="discount-on-item">
                  ({product[0].discountPercent}% off)
                </span>
              </h3>
              <div className="item-buttons">
                <button
                  // onClick={(event) => {
                  //   event.preventDefault();
                  //   addItemToWishlist();
                  // }}
                  className="solid-primary-btn"
                >
                  Add to wishlist
                </button>
                <button
                  // onClick={() => {
                  //   addItemToCart();
                  // }}
                  className="solid-warning-btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

SingleProduct.propTypes = {
  wishList: PropTypes.array,
  handleLikeBtnClick: PropTypes.func,
  products: PropTypes.array,
};

export default SingleProduct;
