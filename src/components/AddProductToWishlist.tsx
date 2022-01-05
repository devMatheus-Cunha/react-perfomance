import React from "react";

// interface
interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequesClose: () => void;
}

const AddProductToWishlist = ({
  onAddToWishlist,
  onRequesClose,
}: AddProductToWishlistProps) => {
  return (
    <span>Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequesClose}>Não</button>
    </span>
  );
};

export default AddProductToWishlist;
