import React from 'react';
import Store from './components/Store';
import Cart from './components/Cart';
import useAlan from './hooks/useAlan';
import storeItems from './items.json';

export default function App(){
    useAlan();
    return(
        <>
            <Store items={storeItems} />
            <Cart />
        </>
    )
}