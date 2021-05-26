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
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
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
`;

export const InputIcon = styled(AddCircle)` 
  width: 23.5px;
  height: 23.5px;
  color: var(--white);
  cursor: pointer;
  opacity: .7;

  &:hover {
    color: var(--white);
    opacity: .9;
  }

  @media (max-width: 799px) {
    width: 30px;
    height: 30px;
  }
`;