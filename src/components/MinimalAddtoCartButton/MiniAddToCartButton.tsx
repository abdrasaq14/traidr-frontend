import { BsBagPlus } from "react-icons/bs";
import { MiniAddToCartContainer } from "./MiniAddToCartButton.Styled";
import AddQuantityModal from "../AddQuantityModal/AddQuantityModal";

import { useState } from 'react'



interface ButtonProps{
  productId: string | undefined | null;
  isMouseEnter: () => void;
  isMouseLeave: () => void;
  children?: {
    toolTip: React.ReactNode;
  }
    //   toggleVisibility: () => void;
  }

const MiniAddToCartButton = ({productId, isMouseEnter, isMouseLeave, children}: ButtonProps) => {
const {toolTip} = children as { toolTip: React.ReactNode };
const [quantityModalVisibility, setQuantityModalVisibility] = useState(false);

const toggleQuantityModal = () => {
  setQuantityModalVisibility(!quantityModalVisibility);
}


  return (
    <MiniAddToCartContainer onMouseEnter={isMouseEnter} onMouseLeave={isMouseLeave}>
    {!quantityModalVisibility && (
        <BsBagPlus size={20} onClick={toggleQuantityModal} className="add-to-cart-icon"/>
    ) }
{toolTip}
    <div className="quantity-modal">{quantityModalVisibility && <AddQuantityModal productId={productId} toggleVisibility={toggleQuantityModal}/>}</div>
    </MiniAddToCartContainer>
  )
}

export default MiniAddToCartButton