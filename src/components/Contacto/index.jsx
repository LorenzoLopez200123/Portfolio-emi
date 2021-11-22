import styled from '@emotion/styled';
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FLASHCOOKIELINK } from '../../pages/Home';

export default function Contacto({ theme }) {
  console.log(theme);

  const GridStyled = styled(Grid)`
    && {
      background-color: ${theme.palette.type === 'dark'
        ? theme.palette.primary.main
        : '#fff'};
    }
  `;

  const ButtonMore = styled(Button)`
    border-width: 4px;
    color: ${theme.palette.type === 'dark' ? ' white' : '#121212'};
    font-weight: bold;
    padding: 0.3rem 2em;
    :hover {
      border-width: 4px;
    }
  `;

  const ContainerContact = styled(Container)`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 14em;
    @media (max-width: 768px) {
      & {
        height: 100vh;
        padding-top: 10em;
      }
    }
  `;

  const FormContainer = styled('form')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    position: relative;
    @media (max-width: 768px) {
      & {
        width: 100%;
      }
    }
  `;

  const EmailInput = styled(TextField)`
    width: 90%;
    height: 4em;
  `;

  const TextArea = styled(TextField)`
    width: 90%;
    height: 100%;
    margin-top: 1em;
  `;

  const GraySpace = styled('div')`
    height: 15vh;
    width: 100%;
    background-color: #575757;
  `;

  const ButtonSend = styled(ButtonMore)`
    color: white;
    width: 50%;
    padding: 0.5rem 2em;
    transform: translateY(-1.5em);
  `;

  return (
    <GridStyled id="contacto" container>
      <ContainerContact>
        <ButtonMore
          href={FLASHCOOKIELINK}
          variant="outlined"
          color={'secondary'}
        >
          <IconButton>
            <FontAwesomeIcon icon={faShoppingCart} />
          </IconButton>
          COSITAS LINDAS
        </ButtonMore>
        <FormContainer noValidate autoComplete="off">
          <Typography
            variant={'h4'}
            style={{ margin: '2em 0 1em 0', fontWeight: '600' }}
            color={theme.palette.type !== 'dark' ? 'terceary' : 'secondary'}
          >
            CONTACTO
          </Typography>
          <EmailInput
            type="email"
            label="Ingresa tu email"
            variant={theme.palette.type !== 'dark' ? 'outlined' : 'filled'}
            color={'secondary'}
            InputProps={{
              style: {
                backgroundColor: `${
                  theme.palette.type !== 'dark' ? 'white' : '#121212'
                }`,
              },
            }}
          />
          <TextArea
            rows={16}
            label="Enviame un mensaje..."
            multiline
            variant={theme.palette.type !== 'dark' ? 'outlined' : 'filled'}
            color={'secondary'}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: `${
                  theme.palette.type !== 'dark' ? 'white' : '#121212'
                }`,
              },
            }}
          />
          <ButtonSend
            variant="contained"
            color={theme.palette.type !== 'dark' ? 'primary' : 'secondary'}
          >
            Enviar
          </ButtonSend>
        </FormContainer>
      </ContainerContact>
      <GraySpace />
    </GridStyled>
  );
}
