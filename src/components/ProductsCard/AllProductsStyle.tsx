import styled from "styled-components";

export const AllProductsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  .dashboard-add-to-cart-button{
    margin-top: -2vh;
    margin-left: 4rem;
    /* visibility: hidden; */
  }
`

export const AllProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin: 1rem 0;
  cursor: pointer;
  max-width: 300px;
  position: relative;
  
  

  .each-product-image{
    min-height: 250px;
    max-height: 250px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f28c;
    border-radius: 5px;
    overflow: hidden;

  }
  .each-product-image img{
    object-fit: contain;

  }

  .dashboard-product-image{
    width: 100vw;
    height: 25vh
  }

  .each-product-title {
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 0.5vh;
  }
  .each-product-description {
    font-size: 1rem;
    color: var(--normal-text-color);
  }
  .each-product-price {
    color: var(--price-green-color);
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const CartWishlistBtns = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;


`


