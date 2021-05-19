import styled from 'styled-components/native';

export const DarkText = styled.Text`
  color: 'rgb(41,41,41)';
  font-family: 'Sf Pro Rounded';
  font-size: 20px;
`;

export const StyledTextLight = styled(DarkText)`
  color: 'rgba(255, 255, 255)';
`;

export const StyledTextAccent = styled(DarkText)`
  color: '#91CCB2';
`;

export const StyledTextPrimary = styled(DarkText)`
  color: 'rgb(215, 51, 116)';
`;
