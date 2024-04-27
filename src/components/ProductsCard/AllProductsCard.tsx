import { shopProductsInterface } from "../../interfaces/shopInterfaces";
import {
  AllProductsWrapper,
  AllProductsCardContainer
} from "./AllProductsStyle";

import MiniAddToCartButton from "../MinimalAddtoCartButton/MiniAddToCartButton";
import MiniAddToWishListButton from "../MinimalAddToWishListButton/MiniAddToWishListButton";
import dummyProducts from "../../assets/products/dummy.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface ProductProps {
  product: shopProductsInterface;
  wishListIds: string[] | undefined;
}

function AllProductsCard({ product, wishListIds }: ProductProps) {
  const [isInWishList, setIsInWishList] = useState<boolean>(false);
  const [isMouseEnter, setIsMouseEnter] = useState<Record<string, boolean>>({});
  const toggleIsInWishList = () => {
    setIsInWishList(!isInWishList);
  };

  useEffect(() => {
    if (wishListIds?.includes(product.productId)) {
      setIsInWishList(true);
    } else {
      setIsInWishList(false);
    }
  }, [product, wishListIds]);

  const navigate = useNavigate();
  const handleProductClick = (productId: string) => {
    navigate(`/dashboard/description/${productId}`);
  };

  // const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

  // const toggleQuantityModal = () => {
  //   setQuantityModalVisibility(!quantityModalVisibility);
  // };

  return (
    <AllProductsCardContainer>
      <AllProductsWrapper
        key={product.productId}
        onClick={() => handleProductClick(product.productId)}
      >
        <div className="each-product-image">
          {product.productImages[0].includes("undefined") ? (
            <img
              src={dummyProducts}
              alt=""
              className="dashboard-product-image"
            />
          ) : (
            <img
              src={product.productImages[0]}
              alt={product.productTitle}
              className="dashboard-product-image"
            />
          )}
        </div>
        <p className="each-product-title">
          {product.productTitle.substring(0, 21)}
          {product.productTitle.length >= 22 ? "..." : ""}
        </p>
        <p className="each-product-description">
          {product.productDescription.substring(0, 25)}
          {product.productDescription.length >= 27 ? "..." : ""}
        </p>

        <span
          className="each-product-price"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          ₦{product.productPrice.toLocaleString()}
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
              height: "100%"
            }}
          >
            <MiniAddToCartButton
              productId={product.productId}
              isMouseEnter={() =>
                setIsMouseEnter((prev) => ({ ...prev, addToCartBtn: true }))
              }
              isMouseLeave={() =>
                setIsMouseEnter((prev) => ({ ...prev, addToCartBtn: false }))
              }
              children={{
                toolTip: isMouseEnter.addToCartBtn && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-2rem",
                      left: "-2rem",
                      backgroundColor: "var(--orange-color)",
                      color: "#ffffff",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontSize: "10px",
                      minWidth: "5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation: "animateToolTip 0.3s ease-in-out"
                    }}
                  >
                    Add to Cart
                  </span>
                )
              }}
            />
            <MiniAddToWishListButton
              productId={product.productId}
              onClickAction={toggleIsInWishList}
              isInWishList={isInWishList}
              isMouseEnter={() =>
                setIsMouseEnter((prev) => ({ ...prev, wishListBtn: true }))
              }
              isMouseLeave={() =>
                setIsMouseEnter((prev) => ({ ...prev, wishListBtn: false }))
              }
              children={{
                toolTip: isMouseEnter.wishListBtn && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-2rem",
                      left: "-2rem",
                      backgroundColor: "var(--orange-color)",
                      color: "#ffffff",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontSize: "8px",
                      minWidth: "5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation: "animateToolTip 0.3s ease-in-out"
                    }}
                  >
                    Add to wishlist
                  </span>
                )
              }}
            />
          </div>
        </span>
      </AllProductsWrapper>
    </AllProductsCardContainer>
  );
}

export default AllProductsCard;
