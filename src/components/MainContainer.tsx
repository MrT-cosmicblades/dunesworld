import { Flex, FlexProps } from '@chakra-ui/react'

export const MainContainer = (props: FlexProps) => {
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            p={[1, 2, 3, 4]}
            {...props}
        />
    )
}
