import React from 'react';
import './ProductCard.css';
class ProductCard extends React.Component{
  render(){
    const {product_name, product_price,isAvailable} = this.props;
    return(
      <div className="Product-card">
        <h4 className="Product-Name">Product Name:{product_name}</h4>
        <p className="Product-Price">Price: {product_price}</p>
        <p className="Isavailable">Availablity: {isAvailable?"YES":"NO"}</p>
      </div>
    )
}
}
export default ProductCard;