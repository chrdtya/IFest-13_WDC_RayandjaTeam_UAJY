import styled from 'styled-components';

const ChallengesContainer = styled.div`
  padding: 9rem;
  background: white;
  color: black;
  text-align: center;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 450px;
  background: url('https://via.placeholder.com/1500x450') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4rem;
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
  font-size: 2.8rem;
  margin-top: 3rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const ChallengesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 3rem;
`;

const ChallengeCard = styled.div`
  width: 85%;
  max-width: 900px;
  padding: 2rem;
  background: #f8f8f8;
  border: 3px solid black;
  border-radius: 12px;
  text-align: left;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ChallengeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 0.5rem;
`;

const ChallengeDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;
`;

const ParticipateButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #444;
  }
`;

const Challenges = () => {
  const challenges = [
    {
      title: "Upcycling Challenge",
      description: "Buat pakaian baru dari pakaian bekas dan tunjukkan kreativitasmu!",
    },
    {
      title: "Minimalist Wardrobe",
      description: "Hanya gunakan 7 item pakaian selama seminggu. Bisa gak?",
    },
    {
      title: "Swap Challenge",
      description: "Tukar pakaian dengan teman atau komunitas untuk mengurangi limbah fashion.",
    }
  ];

  return (
    <ChallengesContainer>
      <HeroSection>
        <HeroOverlay />
        <HeroText>Join the Fashion Challenges</HeroText>
      </HeroSection>
      <SectionTitle>Weekly Fashion Challenges</SectionTitle>
      <ChallengesList>
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index}>
            <ChallengeTitle>{challenge.title}</ChallengeTitle>
            <ChallengeDescription>{challenge.description}</ChallengeDescription>
            <ParticipateButton>Join Challenge</ParticipateButton>
          </ChallengeCard>
        ))}
      </ChallengesList>
    </ChallengesContainer>
  );
};

export default Challenges;
