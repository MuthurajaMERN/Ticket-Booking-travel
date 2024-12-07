import React from 'react';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.div`
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

// Component
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Bus Booking App</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
