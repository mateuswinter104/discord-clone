import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected/>
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="discussões" />
      <ChannelButton channelName="projetos" />
      <ChannelButton channelName="games" />
    </Container>
  );
};

export default ChannelList;