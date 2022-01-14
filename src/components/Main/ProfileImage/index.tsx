import React from 'react';
import { ProifleImageWrapper } from '@components/Main/ProfileImage/styles';

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/38908080?v=4';

const ProfileImage = () => {
  return <ProifleImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
