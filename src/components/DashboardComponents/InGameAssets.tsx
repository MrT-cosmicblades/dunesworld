import { Button, SimpleGrid, Stack, Text, Toast, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { CardAssets } from "./CardAssets"
import { USER, TOAST, WAXOBJECT, DEPOSIT_DATA } from "../Interface"
import { waxContext } from '../WaxProvider'
import { deposit } from '../WaxActions'
import { UALContext } from "ual-reactjs-renderer";


export default function InGameAssets({ data }: { data: any }) {
    const wax: WAXOBJECT = useContext(UALContext)

    const message: TOAST = {
        title: "not yet available", description: "coming soon", duration: 2000, isClosable: true, status: "info"
    }
    const toast = useToast();

    const { WaxStorage, setWaxStorage } = useContext(waxContext)

    const { gear_withdraw, gold_withdraw, oil_withdraw, spice_withdraw } = WaxStorage.withdraw

    const user_data: USER[] = data as Array<USER>

    const deposit_data = (quantity: string, token: string): DEPOSIT_DATA => {
        const data: DEPOSIT_DATA = {
            from: wax.activeUser.accountName,
            to: "dunesworldio",
            quantity: quantity,
            memo: `deposit:${token}`
        }
        return data
    }

    return (
        <SimpleGrid pt={20} pb={20} width={"90%"} columns={[1, 2]} spacingX={5} spacingY={5}>
            <Stack bgColor={useColorModeValue("white", "dark")} boxShadow="md" p="6" rounded="md" borderWidth={1} borderColor={useColorModeValue("black", "white")} spacing={2} >
                <CardAssets asset='gold' value={user_data[0].gold_balance} />
                <Button onClick={() => toast(message)} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Convert to token
                </Button>
                <Button onClick={() => deposit(wax, toast, deposit_data(gold_withdraw, 'gold'))} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Deposit
                </Button>
            </Stack>
            <Stack boxShadow="md" p="6" rounded="md" borderWidth={1} borderColor={useColorModeValue("black", "white")} spacing={2} >
                <CardAssets asset='oil' value={user_data[0].oil_balance} />
                <Button onClick={() => toast(message)} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Convert to token
                </Button>
                <Button onClick={() => deposit(wax, toast, deposit_data(oil_withdraw, 'oil'))} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Deposit
                </Button>
            </Stack>
            <Stack boxShadow="md" p="6" rounded="md" borderWidth={1} borderColor={useColorModeValue("black", "white")} spacing={2} >
                <CardAssets asset='gear' value={user_data[0].gear_balance} />
                <Button onClick={() => toast(message)} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Convert to token
                </Button>
                <Button onClick={() => deposit(wax, toast, deposit_data(gear_withdraw, 'gear'))} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Deposit
                </Button>
            </Stack>
            <Stack boxShadow="md" p="6" rounded="md" borderWidth={1} borderColor={useColorModeValue("black", "white")} spacing={2} >
                <CardAssets asset='spice' value={user_data[0].spice} />
                <Button onClick={() => toast(message)} rounded={'full'} variant="solid" size="md" colorScheme="green">
                    Exchange
                </Button>
            </Stack>
        </SimpleGrid>
    )
}
