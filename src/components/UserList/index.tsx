import React from 'react';

import { Container, Role, User, Avatar, AvatarImg } from './styles';

import ProfileImg from '../../assets/profilePicture.jpeg';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  isMe?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, isMe }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}>

        <AvatarImg className={isMe ? 'me' : 'notMe'}>
          <img src={ProfileImg} alt="Imagem de Perfil" />
        </AvatarImg>

      </Avatar>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Mateus Winter" isMe/>

      <Role>Offline - 18</Role>
      <UserRow nickname="Bot de Reuniões" isBot />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />    
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
      <UserRow nickname="Usuário" />
    </Container>
  );
};

export default UserList;