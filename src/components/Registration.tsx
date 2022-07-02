import { Flex, useColorModeValue, Stack, Heading, FormControl, Input, Button, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { newuser, } from './WaxActions'
import { WaxUser } from '@eosdacio/ual-wax';
import { UALContext } from "ual-reactjs-renderer";
import { WAXOBJECT } from './Interface';

export default function Registration({ user }: { user: string }) {
    const [username, setusername] = useState<string>(null)

    const wax: WAXOBJECT = useContext(UALContext)

    const toast = useToast()

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('white', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading color={useColorModeValue("black", "white")} lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Register your Wax Wallet
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    You need to register "{user}".
                </Text>
                <FormControl>
                    <Input
                        placeholder="username"
                        _placeholder={{ color: 'gray.500' }}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setusername(event.target.value)
                        }}
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        onClick={() => newuser(wax, toast, { wallet: user, username: username })}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Register {user}
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}
