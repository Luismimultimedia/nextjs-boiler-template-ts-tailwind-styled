import styled from "styled-components";
import tw from "twin.macro"

export const Container = styled.div.attrs({
    className: "Container"
})`
    ${tw`w-full h-screen flex flex-col justify-center items-center bg-blue-500`}
`

export const ExampleTitle = styled.h1.attrs({
    className: "ExampleTitle"
})`
    ${tw`text-white text-center m-0 p-0`}
`
