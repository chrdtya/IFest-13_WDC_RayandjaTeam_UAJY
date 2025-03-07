import styled from "styled-components";

const PageContainer = styled.div`
  padding: 2rem;
  background: #f4f4f4;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #b12704;
`;

const Marketplace = () => {
  return (
    <PageContainer>
      <Title>Explore Our Collection</Title>
      <ProductGrid>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/150" alt="Fashion Item" />
          <ProductTitle>Luxury Jacket</ProductTitle>
          <ProductPrice>$200</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="https://via.placeholder.com/150" alt="Fashion Item" />
          <ProductTitle>Premium Sneakers</ProductTitle>
          <ProductPrice>$150</ProductPrice>
        </ProductCard>
      </ProductGrid>
    </PageContainer>
  );
};

export default Marketplace;
