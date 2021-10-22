import React from 'react';
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";

import Slider from "../../conponents/Slider";
import useDeck from "../../hooks/useDeck";

const SelectingPage = () => {
    const history = useHistory();
    //const {id} = useParams();
    const id = "99PgumndKIaAviDQUAwu";
    const {isFetching, deck} = useDeck(id);

    return (
        <div>
            {
                isFetching
                    ?
                    <div>Loading...</div>
                    :
                    <Slider>
                        {
                            deck?.deck?.map(
                                (card) => <input type="image" src={card.img} key={card.title}/>)
                        }
                    </Slider>
            }
        </div>
    );
};

export default SelectingPage;