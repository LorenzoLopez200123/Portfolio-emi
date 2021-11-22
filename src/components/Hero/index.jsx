import './Hero.css';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardHeader,
} from '@material-ui/core';
import styled from '@emotion/styled';
import { useSpring, useTrail, animated } from 'react-spring';
// import ImgBackground from '../../assets/26276887_316345242187249_1809595980958400512_n.jpg';
import ImgBackground from '../../assets/backgroundHero.jpg';
import { useState } from 'react';

const TitleProyeccion = styled(animated.div)`
  h1:nth-of-type(1) {
    opacity: 0.1;
    position: absolute;
    font-size: 7em;
    top: -0.025em;
    left: -0.03em;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3.5em;
    }
    h1:nth-of-type(1) {
      position: absolute;
      font-size: 3.5em;
      left: 0.4em;
    }
  }
`;

const ButtonMore = styled(Button)`
  border-width: 3px;
  color: white;
  padding: 0.5rem 3em;
  :hover {
    border-width: 3px;
  }
`;

const TextVerticalRightSmall = styled(Typography)`
  position: relative;
  right: 0.5rem;
  color: white;
  font-weight: 600;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  margin-top: 5em;
  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default function Hero({ theme }) {
  const [grayHover, setGrayHover] = useState(false);
  const [grayHover2, setGrayHover2] = useState(true);

  const HeroContainer = styled(Grid)`
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${ImgBackground});
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      z-index: -1;
      filter: grayscale(0%);
      transition: filter 2s ease;
    }
    ::after {
      ${grayHover ? 'filter: grayscale(100%)' : 'initial'};
    }
  `;

  const HeroContainLeft = styled(Grid)`
    && {
      height: 100vh;
      max-width: 50%;
      width: 50%;
      background-color: ${theme.palette.primary.main + '30'};
      display: flex;
      align-items: center;
      justify-content: right;
      font-size: 16px;
    }
    @media (max-width: 475px) {
      && {
        max-width: 100%;
        width: 100%;
        justify-content: center;
      }
    }
  `;

  const CardHero = styled(Card)`
    position: relative;
    padding: 2em;
    overflow: visible;
    left: 4em;
    justify-content: space-between;
    height: 26em;
    flex-direction: column;
    display: flex;
    box-shadow: none;
    background-color: transparent;
    align-items: center;
    @media (max-width: 475px) {
      && {
        left: 0;
        padding: 1em;
        font-size: 0.9em;
      }
    }
  `;

  const CardText = styled(Container)`
    position: relative;
    background-color: #393d3f;
    width: 41.25em;
    padding: 1em;
    text-align: right;
    @media (max-width: 475px) {
      && {
        max-width: 100%;
        width: 100%;
      }
    }
  `;

  const TextVerticalRightLarge = styled(Typography)`
    color: rgba(0, 0, 0, 0.1);
    font-weight: 600;
    font-size: 7em;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    position: absolute;
    top: 100px;
    right: 50px;
    transition: ease 0.2s all;

    &&:hover {
      color: ${theme.palette.type !== 'dark'
        ? 'rgba(255, 51, 119, 1);'
        : '#b8ff33;'};
      transform: translateX(-5px) rotate(180deg);
      transition: ease 0.2s all;
    }

    @media (max-width: 768px) {
      && {
        display: none;
      }
    }

    @media (max-width: 600px) {
      top: 50px;
      font-size: 6em;
    }
  `;

  const LineRightVertical = styled(Container)`
    align-content: 'center';
    background-color: rgba(12, 12, 12, 0.2);
    position: absolute;
    height: 100vh;
    top: 0;
    right: 0;
    width: 3em;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    @media (max-width: 768px) {
      && {
        display: none;
      }
    }
  `;

  // Animation

  const PropsAnimatedCard = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    config: {
      duration: 1000,
      delay: 1000,
      config: {
        mass: 1,
        tension: 200,
        friction: 20,
      },
    },
  });
  const AnimatedHero = animated(CardHero);

  const PropsAnimatedText = useSpring({
    from: { scale: 0.9 },
    to: { scale: 1 },
    config: {
      duration: 3000,
      delay: 1000,
    },
  });

  const items = ['Design', 'Ilustracion', ' Rendering', '3D'];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    opacity: grayHover2 ? 1 : 0,
    x: grayHover2 ? 0 : 20,
    height: grayHover2 ? 20 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 1000,
  });

  return (
    <HeroContainer hoverSt={grayHover} item xs={12}>
      <HeroContainLeft className={'container-section-left-hero'}>
        <AnimatedHero style={PropsAnimatedCard}>
          <div style={{ textAlign: 'center' }}>
            <TitleProyeccion>
              <Typography
                variant="h1"
                style={{ color: 'white', fontWeight: '700' }}
              >
                PROYECCIÓN
              </Typography>
              <Typography
                variant="h1"
                style={{ color: 'white', fontWeight: '700' }}
              >
                PROYECCIÓN
              </Typography>
            </TitleProyeccion>
            <Typography
              variant="h4"
              style={{ color: 'white', fontWeight: '600' }}
            >
              MENOS ES MAS
            </Typography>
          </div>
          <ul
            style={{
              display: 'flex',
              gap: '0 1em',
              listStyle: 'none',
              color: 'white',
              fontSize: '500',
            }}
          >
            {trail.map((styles, index) => (
              <animated.li key={index} style={styles}>
                {items[index]}
              </animated.li>
            ))}
          </ul>
          <CardText>
            <Typography variant="body2" style={{ color: 'white' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              cum . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Alias cum magnam velit laborum quibusdam aperiam quidem error
              ducimus quos sequi.
            </Typography>
          </CardText>
          <ButtonMore
            onMouseEnter={() => setGrayHover(true)}
            onMouseLeave={() => setGrayHover(false)}
            href="#perfil"
            variant="outlined"
            color={'secondary'}
          >
            LEER MAS
          </ButtonMore>
        </AnimatedHero>
      </HeroContainLeft>
      <LineRightVertical>
        <TextVerticalRightLarge
          onMouseEnter={() => setGrayHover(true)}
          onMouseLeave={() => setGrayHover(false)}
          variant="h2"
        >
          IMAGEN
        </TextVerticalRightLarge>
        <TextVerticalRightSmall>EMILIA CANTARO</TextVerticalRightSmall>
      </LineRightVertical>
    </HeroContainer>
  );
}
