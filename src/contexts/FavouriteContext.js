import React, { useContext } from 'react';

export const FavouriteContext = React.createContext();

export function useFavourites() {
    return useContext(FavouriteContext);
}
