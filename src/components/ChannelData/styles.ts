import styled from 'styled-components';
import { AddCircle } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7.5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--primary);
  }


  @media (max-width: 850px) {
    max-height: calc(100vh - 66px - 40px);
  }
  

`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;

  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;

    padding-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 57px;
  border-radius: 9px;
  color: var(--white);
  background-color: var(--chat-input);
  position: relative;
  font-size: 15px;

  &::placeholder {
    color: var(--gray);
    font-size: 15px;
    opacity: .7;
  }
  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }

  @media (max-width: 850px) {
    

    ~ svg {
      left: 25px;
      position: relative;
    }
  }
`;

export const InputIcon = styled(AddCircle)` 
  width: 23.5px;
  height: 23.5px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    color: var(--white);
    opacity: .9;
  }

  @media (max-width: 850px) {
    width: 30px;
    height: 30px;
    
  }
`;