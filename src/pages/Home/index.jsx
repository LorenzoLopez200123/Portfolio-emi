import Hero from '../../components/Hero';
import Perfil from '../../components/Perfil';
import Footer from '../../components/Footer';
import Contacto from '../../components/Contacto';

import './Home.css';
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import styled from '@emotion/styled';
import Portfolio from '../../components/Portfolio';

const NavBar = styled(Box)`
  & {
    width: 100%;
  }
  @media (max-width: 768px) {
    a {
      font-size: 0.8em;
    }
    .MuiFormControlLabel-root {
      margin: 0;
    }
    .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorInherit {
      display: none;
    }
  }
`;

const AppBarStyled = styled(Toolbar)`
  display: flex;
  justify-content: right;
  gap: 0em 2em;
  @media (max-width: 768px) {
    gap: 0em;
  }
`;

const GridStyled = styled((Grid) => <Grid container />)`
  .MuiGrid-root {
    overflow: hidden;
  }
`;
export const FLASHCOOKIELINK = 'https://emmi-zion.flashcookie.com';

export default function Home({ setDarkMode, theme }) {
  return (
    <Grid container>
      <Hero theme={theme} />
      <NavBar>
        <AppBar position="static">
          <AppBarStyled>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Button href={'#perfil'} color="inherit">
              PERFIL
            </Button>
            <Button href={'#portfolio'} color="inherit">
              PORTFOLIO
            </Button>
            <Button href={FLASHCOOKIELINK} color="inherit">
              SHOP
            </Button>
            <Button href={'#contacto'} color="inherit">
              CONTACTO
            </Button>
            <FormControlLabel
              control={<Switch defaultChecked={false} />}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </AppBarStyled>
        </AppBar>
      </NavBar>
      <Perfil theme={theme}></Perfil>
      <Portfolio theme={theme}></Portfolio>
      <Contacto theme={theme}></Contacto>
      <Footer theme={theme}></Footer>
    </Grid>
  );
}
