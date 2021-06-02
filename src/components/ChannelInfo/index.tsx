import React from 'react';

import { Container, MenuIcon, HashtagIcon, Title, Separator, Description, UserListIcon } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <MenuIcon/>
      <HashtagIcon/>  

      <Title>chat-livre</Title>

      <Separator/>

      <Description>Canal aberto para conversas</Description>
      <UserListIcon/>
    </Container>
  );
};

export default ChannelInfo;