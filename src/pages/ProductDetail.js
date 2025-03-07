import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
`;

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <ProductContainer>
      <img src={`https://via.placeholder.com/400`} alt="Product" />
      <div>
        <h1>Product {id}</h1>
        <p>Description of the product.</p>
        <p>Price: $200</p>
        <button>Add to Cart</button>
      </div>
    </ProductContainer>
  );
};

export default ProductDetail;