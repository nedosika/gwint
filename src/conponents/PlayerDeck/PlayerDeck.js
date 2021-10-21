import React from 'react';
import Slider from "../Slider";

const PlayerDeck = ({deck}) => {
    return (
        <Slider>
            {
                deck?.map(
                    (card) => <input type="image" src={card.img} key={card.title}/>)
            }
        </Slider>
    );
};

export default PlayerDeck;