import React from 'react';

import ProfileImg from '../../assets/profilePicture.jpeg';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={ProfileImg} alt="Imagem de Perfil"/>
        </Avatar>
        <UserData>
          <strong>Mateus Winter</strong>
          <span>#3832</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;