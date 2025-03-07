// Navbar.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaHome } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background: rgb(255, 255, 255);
  color: black;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: #A27B5C;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const HeartIcon = styled(FaHeart)`
  color: #E63946;
  font-size: 1.5rem;
`;

const HomeIcon = styled(FaHome)`
  color: black;
  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Rayandja</Logo>
      <NavLinks>
        <StyledLink to="/shop">shop &#9662;</StyledLink>
        <StyledLink to="/education">education</StyledLink>
        <StyledLink to="/challenges">challenges</StyledLink>
      </NavLinks>
      <IconWrapper>
        <StyledLink to="/wishlist"><HeartIcon /></StyledLink>
        <StyledLink to="/"><HomeIcon /></StyledLink>
      </IconWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
