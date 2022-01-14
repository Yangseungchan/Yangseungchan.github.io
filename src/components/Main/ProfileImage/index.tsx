import React from 'react';
import { ProifleImageWrapper } from '@components/Main/ProfileImage/styles';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface ProfileImageProps {
  profileImage: IGatsbyImageData;
}

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <ProifleImageWrapper image={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
