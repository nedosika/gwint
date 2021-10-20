import React from 'react'

import { Error } from '../../conponents'

import { Container, Input, Label } from './styles'

const Field = ({ errMessage, id, label, onChange, ...rest }) => {
    function handleChange(event) {
        onChange(event.target.value)
    }

    return (
        <Container>
            <Label error={errMessage} htmlFor={id}>
                {label}:
            </Label>
            <Input error={errMessage} id={id} onChange={handleChange} {...rest} />
            {errMessage && <Error>{errMessage}</Error>}
        </Container>
    )
};

export default Field