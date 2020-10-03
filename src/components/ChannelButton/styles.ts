import styled from 'styled-components';
import { Hashtag } from '@styled-icons/heroicons-outline';
import { PersonAdd, Settings } from '@styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    font-size: 15px;
    margin-left: 5px;
    color: var(--senary);
  }

  > div:nth-child(2) {
    display:none;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }

    > div:nth-child(2) {
      display: block;
    }
  }

`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  margin-right: 4px;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcons = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

