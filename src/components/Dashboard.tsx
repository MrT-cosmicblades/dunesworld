import { Button, Text, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, VStack, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import Registration from './Registration';
import { JsonRpc, RpcError } from 'eosjs'
import useSWR from 'swr';
import { rpc } from './AccountValidator';
import InGameAssets from './DashboardComponents/InGameAssets';

export default function Dashboard({ user }: { user: string }) {

    const fetch = async () => {
        const data = await rpc.get_table_rows({
            json: true, code: "dunesworldio",
            scope: "dunesworldio", lower_bound: user, upper_bound: user, table: "users"
        })
        return data.rows
    }
    const { data } = useSWR("/registered", fetch, {
        revalidateOnFocus: false,
        refreshInterval: 3000,
    })

    if (data && data.length == 1) {
        return (
            <Flex
                width={"90%"}
                marginTop={10}
                align={'center'}
                justify={'center'}
                direction="column"
                bg={useColorModeValue('white', 'gray.800')}>
                <Text>{data[0].username}</Text>
                <InGameAssets data={data} />
            </Flex>
        )
    }

    return (
        <>
            <Registration user={user} />
        </>)

}
