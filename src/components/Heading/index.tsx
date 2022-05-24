import React from 'react';
import { TextProps } from 'react-native';
import * as S from './styles';

type HeadingProps = TextProps & HeadingExclusiveProps;

type HeadingExclusiveProps = {
  color?: string;
};

const Heading: React.FC<HeadingProps> = ({ color, children, ...rest }) => (
  <S.StyledHeading color={color} {...rest}>
    {children}
  </S.StyledHeading>
);

export default Heading;
