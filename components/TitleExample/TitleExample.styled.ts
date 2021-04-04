import styled from "styled-components";
import tw from "twin.macro"

export const Container = styled.div.attrs({
    className: "Container"
})`
    ${tw`w-full h-screen flex flex-col justify-center items-center bg-blue-500`}
`

export const ExampleTitle = styled.h2.attrs({
    className: "ExampleTitle"
})`
    ${tw`text-white text-center m-0 p-0`}
`

export const TextSm = styled.p.attrs({
    className: "TextSm"
})`
    ${tw`text-sm text-white`}
`

export const TextBase = styled.p.attrs({
    className: "TextBase"
})`
    ${tw`text-base text-white`}
`

export const TextLg = styled.p.attrs({
    className: "TextLg"
})`
    ${tw`text-lg text-white`}
`

export const TextXl = styled.p.attrs({
    className: "TextBase"
})`
    ${tw`text-xl text-white`}
`

export const Text2Xl = styled.p.attrs({
    className: "Text2Xl"
})`
    ${tw`text-2xl text-white`}
`
