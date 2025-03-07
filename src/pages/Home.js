import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  padding: 4rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
`;

const ImageContainer = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const QuoteContainer = styled.div`
  flex: 1;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  line-height: 1.8;
  font-family: 'Playfair Display', serif;
  max-width: 500px;
`;

const QuoteText = styled.p`
  font-style: italic;
  quotes: "\201C" "\201D" "\2018" "\2019";
  position: relative;
  padding-left: 20px;
  display: flex;
  flex-direction: column;

  &::before {
    content: open-quote;
    font-size: 3rem;
    position: absolute;
    left: -15px;
    top: -15px;
    color: black;
  }

  &::after {
    content: close-quote;
    align-self: flex-end;
    font-size: 3rem;
  }
`;

const Author = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 1.5rem;
  text-align: left;
  font-family: 'Playfair Display', serif;
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentWrapper>
        <ImageContainer>
          <Image src="/path-to-your-image.jpg" alt="Fashion Model" />
        </ImageContainer>
        <QuoteContainer>
          <QuoteText>
            Don't be into <br/>
            trends. Don't <br/>
            make fashion  <br/>
            own you, but you <br/>
            decided what you <br/>
            express by the <br/>
            way you dress <br/>
            and the way you <br/>
            live.,,
          </QuoteText>
          <Author>Gianni Versace</Author>
        </QuoteContainer>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;