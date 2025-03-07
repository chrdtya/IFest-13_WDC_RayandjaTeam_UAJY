// Education.js
import styled from 'styled-components';

const EducationContainer = styled.div`
  padding: 2rem 3rem;
  background: white;
  color: black;
  text-align: center;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 500px;
  background: url('https://via.placeholder.com/1500x500') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4.5rem;
  font-weight: bold;
  position: relative;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
  letter-spacing: 2px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroText = styled.h1`
  position: relative;
  z-index: 2;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-top: 4rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  margin-top: 4rem;
`;

const ArticleCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 90%;
  max-width: 1200px;
  border-radius: 15px;
  overflow: hidden;
  border: 3px solid black;
  padding: 2.5rem;
  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 8px 8px 30px rgba(0, 0, 0, 0.4);
  }
`;

const ArticleImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
`;

const ArticleContent = styled.div`
  width: 50%;
  padding: 2.5rem;
  text-align: left;
  font-size: 1.3rem;
`;

const ArticleNumber = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
`;

const ArticleTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0.7rem 0;
  color: #222;
`;

const ArticleText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #444;
  text-align: justify;
`;

const Education = () => {
  return (
    <EducationContainer>
      <HeroSection>
        <HeroOverlay />
        <HeroText>Fabric Waste</HeroText>
      </HeroSection>
      <SectionTitle>Take Action Against Textile Waste</SectionTitle>
      <ArticleContainer>
        {[1, 2, 3].map((num) => (
          <ArticleCard key={num}>
            {num % 2 !== 0 ? (
              <>
                <ArticleImage src="https://via.placeholder.com/500x400" alt="Recycle" />
                <ArticleContent>
                  <ArticleNumber>0{num}</ArticleNumber>
                  <ArticleTitle>Recycle & Reuse</ArticleTitle>
                  <ArticleText>
                    The textile recycling rate remains one of the lowest among materials. Yet, worn-out clothing and fabric
                    scraps can be transformed into new garments, insulation materials, and more. Brands like H&M,
                    Madewell, and The North Face make recycling easy with <a href="#">in-store</a> drop-off programs.
                  </ArticleText>
                </ArticleContent>
              </>
            ) : (
              <>
                <ArticleContent>
                  <ArticleNumber>0{num}</ArticleNumber>
                  <ArticleTitle>Upcycling Fashion</ArticleTitle>
                  <ArticleText>
                    Upcycling turns discarded fabrics into trendy fashion pieces. Independent designers and major brands
                    alike are embracing the circular economy by repurposing textiles. Support sustainable initiatives and
                    contribute to a waste-free industry.
                  </ArticleText>
                </ArticleContent>
                <ArticleImage src="https://via.placeholder.com/500x400" alt="Upcycling" />
              </>
            )}
          </ArticleCard>
        ))}
      </ArticleContainer>
    </EducationContainer>
  );
};

export default Education;
