import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';


export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  display: none;
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  display: none;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;
  margin-bottom: 2px;
  > div {
    display: flex;
    align-items: center;
  }
  > div span {
    margin-left: 5px;
    color: var(--senary);
  }
  &:hover,
  &.active {
    background-color: var(--quinary);

    ${InviteIcon}{
      display: block;
    }
    ${SettingsIcon}{
      display: block;
    }
    > div span {
      color: var(--white);
    }      
  }
  
`;

/*&.notActive {
    background-color: transparent;

    ${InviteIcon}{
      display: none;
    }
    ${SettingsIcon}{
      display: none;
    }
  }
  */