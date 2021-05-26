import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Mateus Winter"
            date="21/05/2021"
            content="Ilustração de uma mensagem"
            isMe
          />
        ))}

        <ChannelMessage
          author="Bot de Reuniões"
          date="21/05/2021"
          content={
            <>
              <Mention>@Mateus Winter</Mention>, você tem uma reunião marcada para às 18h00!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
      
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;