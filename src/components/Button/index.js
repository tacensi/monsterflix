import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 25px;
  background: rgba(255,255,255,.07);
  font: 900 18px Lato, Helvetica, sans-serif;
  text-transform: uppercase;
  color: rgba(255,255,255,.5);
  border: rgba(255,255,255,.5) 2px solid;
  border-radius: 4px;
  transition: all 300ms ease;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  &:hover,
  &:focus {
    border-color: var(--white);
    text-shadow: 0 0 10px rgba(255,255,255,.75);
    color: var(--white);
    box-shadow: 0 0 20px rgba(255,255,255,.75);
  }
  `;

export default Button;
