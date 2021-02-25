import React, { useContext } from 'react';

export const ChannelContext = React.createContext();

export function useChannels() {
    return useContext(ChannelContext);
}
