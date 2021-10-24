import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import useDeck from "../../hooks/useDeck";
import Slider from "../../conponents/Slider";

const ProfilePage = () => {
    //const {id} = useParams();

    const history = useHistory();
    //const {id} = useParams();
    const id = "99PgumndKIaAviDQUAwu";
    const {isFetching, deck} = useDeck(id);

    return (
        <div>
            <h1>Selecting Deck</h1>
            <div style={{
                position: "absolute",
                bottom: 170
            }}>
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
        </div>
    );
};

export default ProfilePage;