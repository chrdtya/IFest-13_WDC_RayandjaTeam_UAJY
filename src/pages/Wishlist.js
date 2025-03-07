// Wishlist.js
import styled from 'styled-components';

const WishlistContainer = styled.div`
  padding: 9rem;
  background: white;
  color: black;
  text-align: center;
`;

const WishlistTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const WishlistDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Wishlist = () => {
  return (
    <WishlistContainer>
      <WishlistTitle>Your Wishlist</WishlistTitle>
      <WishlistDescription>Saved items for later.</WishlistDescription>
    </WishlistContainer>
  );
};

export default Wishlist;
