import styled, { keyframes } from 'styled-components';

function flicker() {
  const randInt = (min, max) => {
      return (
        Math.floor(Math.random() * (max - min + 1)) + min
      );
  }

  let percentages = [];
  let titleopacity = [];
  let animation = '';

  while (percentages.length < 15) {
    percentages.push(randInt(0,100));
    titleopacity.push((randInt(0,100)/100).toFixed(2));
  }

  percentages.sort((a, b) => { return a - b });


  for (let i=0; i <= 15; i++) {
    animation += `
    ${percentages[i]}% {
      opacity: ${titleopacity[i]};
    }
    `;
  }

  return animation;

}

const flickerAnimation = keyframes`
  ${flicker()}
`;


export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  line-height: 1;
  position: relative;
  text-shadow: 0 0 13px rgba(255,255,255,1);
  animation-name: ${flickerAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;

  &::after{
    content: "";
    background: var(--white);
    width: 90%;
    position: absolute;
    top: calc(50% - 5px);
    left: 50%;
    height: 10px;
    -webkit-filter: blur(10px);
    filter: blur(20px);
    opacity: .3;
    transform: translateX(-50%);
    border-radius: 50px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
