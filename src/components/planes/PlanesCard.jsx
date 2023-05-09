/* eslint-disable react/prop-types */

const PlanesCard = ({ product }) => { 
  
  return (
      <div  className="productCard">
      <div className="imgC">
       <img src={product.image} alt={product.title} />
      </div>
      <div className="contentBx">  
      <h3>{product.title}</h3>
      <p className="priceP">{product.description}</p>
      <button className="buyP">Consultar</button>
      </div> 
      </div>
  );
};

export default PlanesCard;