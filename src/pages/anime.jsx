import React from 'react';
import Anime from 'react-anime';

let root = (props, state) => (
    <Anime 
    scale={[.1, .9]}>
        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
</Anime>
);

export default root;