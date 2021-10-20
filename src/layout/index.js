import React from 'react'

import {Card, Content, Title} from './styles'

const Layout = ({children}) => {
    return (
        <Content>
            <Title>Gwint</Title>
            <Card>
                {children}
            </Card>
        </Content>
    )
}

export default Layout