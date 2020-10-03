import React, { useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage
          author="Felipe Monteiro"
          date="02/10/2020"
          content="Hojé eu tenho muito trabalho"
        />

        <ChannelMessage 
          author="Erick"
          date="02/10/2020"
          content={
            <>
              <Mention>@Felipe Monteiro</Mention>, Me carregar no Dota de novo, por favor?
            </>
          }
          hasMentions
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;