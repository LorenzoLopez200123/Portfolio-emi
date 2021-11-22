import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Typography } from '@material-ui/core';

export default function index({ theme }) {
  const FooterContainer = styled('div')`
    background-color: #575757;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4em;
    color: white;
    @media (max-width: 768px) {
      padding: 0 1em;
    }
  `;

  const SocialMediaContainer = styled('ul')`
    list-style: none;
    display: flex;
    width: 10em;
    justify-content: space-between;
    & li {
    }
  `;

  return (
    <FooterContainer>
      <Typography>
        This Page is Powered and develop by{' '}
        <Typography
          variant={'span'}
          component={'span'}
          color={theme.palette.type !== 'dark' ? 'primary' : 'secondary'}
          style={{ fontWeight: 'bold' }}
        >
          LIL{' '}
        </Typography>{' '}
        © 2021
      </Typography>
      <SocialMediaContainer>
        <li>
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color={'white'}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              color={'white'}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color={'white'}
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              color={'white'}
            ></FontAwesomeIcon>
          </a>
        </li>
      </SocialMediaContainer>
    </FooterContainer>
  );
}
