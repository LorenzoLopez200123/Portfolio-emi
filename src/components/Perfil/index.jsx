import styled from '@emotion/styled';
import { Grid, Avatar, Typography } from '@material-ui/core';
import ImgPerfil from './../../assets/DSCN6436.png';

const PerfilLeft = styled(Grid)`
  height: 100%;
`;

const PerfilRight = styled(Grid)`
  background-color: #c9d8d6;
  height: 100%;
`;

const InfoCenter = styled(Grid)`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10%;
`;

const ContainerCenter = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const TextPerfil = styled('h1')`
  color: white;
  font-size: 5rem;
  font-weight: 600;
  &::before {
    content: 'PERFIL';
    color: rgba(255, 255, 255, 0.3);
    position: absolute;
    font-size: 8rem;
    transform: translate(-15%, -50%);
  }
  @media (max-width: 768px) {
    &::before {
      font-size: 6rem;
      transform: translate(-8%, -30%);
    }
  }
`;

const VerticalText = styled(Typography)`
  position: relative;
  left: 35%;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  @media (max-width: 768px) {
    left: -1em;
    font-size: 0.8em;
    justify-self: flex-end;
  }
  @media (max-width: 576px) {
  }
  @media (max-width: 320px) {
    top: -3em;
    font-size: 0.5em;
  }
`;

export default function Perfil({ theme }) {
  const Perfile = styled(Grid)`
    && {
      background-color: ${theme.palette.primary.main};
      height: 100vh;
      width: 100%;
      transition: background-color ease 1s;
    }
  `;

  const PerfilIMG = styled(Avatar)`
    width: 256px;
    height: 256px;
    @media (max-width: 768px) {
      width: 200px !important;
      height: 200px !important;
    }
  `;

  return (
    <Perfile id="perfil" container>
      <InfoCenter item xs={12}>
        <ContainerCenter>
          <TextPerfil>PERFIL</TextPerfil>
          <PerfilIMG src={ImgPerfil} />
          <VerticalText>scrool para ver mis trabajos</VerticalText>
        </ContainerCenter>
      </InfoCenter>
      <PerfilLeft item xs={6}></PerfilLeft>
      <PerfilRight item xs={6}></PerfilRight>
    </Perfile>
  );
}
