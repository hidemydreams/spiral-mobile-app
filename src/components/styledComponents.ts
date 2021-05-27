import styled from 'styled-components/native';

export const DarkText = styled.Text`
  color: 'rgb(41,41,41)';
  font-family: 'Sf Pro Rounded';
  font-size: 20px;
`;

export const LightText = styled(DarkText)`
  color: 'rgb(255, 255, 255)';
  font-family: 'Sf Pro Rounded';
  font-size: 20px;
`;

export const GreyText = styled(DarkText)`
  color: 'rgb(183, 188, 193)';
  font-family: 'Sf Pro Rounded';
  font-size: 20px;
`;

export const StyledTextAccent = styled(DarkText)`
  color: '#91CCB2';
`;

export const StyledTextPrimary = styled(DarkText)`
  color: 'rgb(215, 51, 116)';
`;

export const Card = styled.View`
  border-radius: 15px;
  background-color: white;
`;
