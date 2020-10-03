import styled from "styled-components";

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: ${props => props.isHome ? '30%' : '50%'};

  margin-bottom: 8px;

  background-color: ${props => 
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  
  position: relative;
  cursor: pointer;

  transition: border-radius .2s, background-color .2s;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    /* top: calc(50% - 4.5px); */

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 2px solid var(--tertiary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    display: ${props => props.mentions && props.mentions > 0 ? 'block' : 'none'};

    content: '${ props => props.mentions && props.mentions }';
  }

  &.active,
  &:hover {
    border-radius: 30%;
    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;