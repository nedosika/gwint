import React from 'react';

import {Card, Container} from "./styles";

const Slider = ({children}) => {
    return (
        <Container>
            {children.map((Child) =>
                <Card>
                    {Child}
                </Card>
            )}
        </Container>
    );
};

export default Slider;