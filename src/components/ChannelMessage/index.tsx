import React from 'react';

import { Container, Avatar, Message, Header, Content, AvatarImg } from './styles';
import ProfileImg from '../../assets/profilePicture.jpeg';
export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  isMe?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  isMe
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}>

      <AvatarImg className={isMe ? 'me' : 'notMe'}>
          <img src={ProfileImg} alt="Imagem de Perfil" />
        </AvatarImg>

      </Avatar>

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;