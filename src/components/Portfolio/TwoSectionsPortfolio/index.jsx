import { Container, Typography } from '@material-ui/core';
import styled from '@emotion/styled';
import ImageSection1 from './../../../assets/section1.png';
import ImageSection2 from './../../../assets/section2.png';

export default function TwoSectionsPortfolio() {
  const Section1 = styled('div')`
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
  `;

  const Section2 = styled('div')`
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
  `;

  const SectionImg = styled('div')`
    margin: 0 auto;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  `;

  const ContainerStyled = styled('div')`
    display: flex;
    flex-wrap: no-wrap;
    width: 100vw;
    height: 65vh;
  `;

  const VerticalText = styled(Typography)`
    position: absolute;
    left: 16px;
    margin-top: 25%;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.3em;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    z-index: 1;
  `;

  return (
    <ContainerStyled>
      <Section1>
        <VerticalText>scrool para ver mis trabajos</VerticalText>
        <SectionImg src={ImageSection1}></SectionImg>
      </Section1>
      <Section2>
        <VerticalText>scrool para ver mis trabajos</VerticalText>
        <SectionImg src={ImageSection2}></SectionImg>
      </Section2>
    </ContainerStyled>
  );
}
