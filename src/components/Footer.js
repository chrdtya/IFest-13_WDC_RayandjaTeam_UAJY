// Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgb(0, 0, 0);
  color: white;
  padding: 1.2rem 3rem;
  text-align: center;
  width: 100vw;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Rayandja. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;