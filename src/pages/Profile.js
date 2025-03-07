// Profile.js
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 2rem;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <h1>User Profile</h1>
      <p>Manage your personal information.</p>
    </ProfileContainer>
  );
};

export default Profile;