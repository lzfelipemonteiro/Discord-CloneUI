import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcons } from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
};

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcons />
      </div>
    </Container>
  );
}

export default ChannelButton;