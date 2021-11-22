import styled from '@emotion/styled';
import { Grid, Typography } from '@material-ui/core';
import TwoSectionsPortfolio from './TwoSectionsPortfolio';
export default function Portfolio({ theme }) {
  const Container = styled(Grid)`
    && {
      background-color: ${theme.palette.primary.main};
      height: 100vh;
      width: 100%;
    }
  `;

  const InfoCenter = styled(Grid)`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
  `;

  const ContainerCenter = styled(Grid)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 65px;
    height: 10vh;
  `;

  const TextPerfil = styled('h1')`
    color: white;
    font-size: 5rem;
    font-weight: 600;
    padding: 0.5em;
    &::before {
      content: 'PORTFOLIO';
      color: rgba(255, 255, 255, 0.3);
      position: absolute;
      font-size: 8rem;
      transform: translate(-17%, -50%);
    }
    @media (max-width: 768px) {
      & {
        font-size: 4rem;
        padding: 0;
      }
      &::before {
        font-size: 4rem;
        transform: translate(0%, -50%);
      }
    }
  `;

  const SectionsContainer = styled(TwoSectionsPortfolio)``;

  return (
    <Container id="portfolio">
      <InfoCenter item xs={12}>
        <ContainerCenter>
          <TextPerfil>PORTFOLIO</TextPerfil>
        </ContainerCenter>
        <SectionsContainer />
        <Typography style={{ paddingBottom: '1em' }}>
          PONTE EN CONTACTO CONMIGO.
        </Typography>
      </InfoCenter>
    </Container>
  );
}
