import React from 'react'


import { Container, ExampleTitle, Text2Xl, TextBase, TextLg, TextSm, TextXl } from './TitleExample.styled'

const TitleExample = () => {
    return (
        <Container>
            <ExampleTitle>Hello, This is a BoilerTemplate</ExampleTitle>
            <TextSm>Next.js Typescript Tailwind StyledComponents</TextSm>
            <TextBase>Next.js Typescript Tailwind StyledComponents</TextBase>
            <TextLg>Next.js Typescript Tailwind StyledComponents</TextLg>
            <TextXl>Next.js Typescript Tailwind StyledComponents</TextXl>
            <Text2Xl>Next.js Typescript Tailwind StyledComponents</Text2Xl>
        </Container>
    )
}

export default TitleExample
