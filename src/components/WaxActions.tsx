import { AnchorUser } from 'ual-anchor';
import { WaxUser } from '@eosdacio/ual-wax';
import { RpcError } from "eosjs";
import { WAXOBJECT, TOAST, NEWUSER_DATA, DEPOSIT_DATA } from './Interface';

const transact = async (wax: WAXOBJECT, data: any, name: string, contract: string) => {
    const { accountName, requestPermission } = wax.activeUser;
    try {
        const result = await wax.activeUser.signTransaction(
            {
                actions: [
                    {
                        account: contract,
                        name,
                        authorization: [
                            {
                                actor: accountName,
                                permission: requestPermission,
                            },
                        ],
                        data,
                    },
                ],
            },
            {
                blocksBehind: 3,
                expireSeconds: 1200
            }
        )
        return { success: true, result }
    } catch (e) {
        if (e instanceof RpcError) {
            return { success: false, result: e.toString() }
        } else {
            console.log({
                actions: [
                    {
                        account: contract,
                        name,
                        authorization: [
                            {
                                actor: accountName,
                                permission: requestPermission,
                            },
                        ],
                        data,
                    },
                ],
            },
                {
                    blocksBehind: 3,
                    expireSeconds: 1200
                })
            return { success: false, result: e.toString() }
        }
    }
}

export const newuser = async (wax: WAXOBJECT, toast: ({ }: TOAST) => void, data: NEWUSER_DATA) => {

    const { success, result }: { success: boolean, result: any } = await transact(wax, data, "newuser", "dunesworldio")

    if (success) {
        toast({
            title: "Success Registration",
            description: `Successfuly registered ${data.wallet}`,
            duration: 3000,
            isClosable: true,
            status: 'success'
        })
    } else {
        toast({
            title: "Failed Registration",
            description: result,
            duration: 1000,
            isClosable: true,
            status: 'error'
        })
    }
}

export const withdraw = async (wax: WAXOBJECT, toast: ({ }: TOAST) => void, data: NEWUSER_DATA) => {

    const { success, result }: { success: boolean, result: any } = await transact(wax, data, "newuser", "dunesworldio")

    if (success) {
        toast({
            title: "Success Registration",
            description: `Successfuly registered ${data.wallet}`,
            duration: 3000,
            isClosable: true,
            status: 'success'
        })
    } else {
        toast({
            title: "Failed Registration",
            description: result,
            duration: 1000,
            isClosable: true,
            status: 'error'
        })
    }
}

export const deposit = async (wax: WAXOBJECT, toast: ({ }: TOAST) => void, data: DEPOSIT_DATA) => {

    const { success, result }: { success: boolean, result: any } = await transact(wax, data, "transfer", "dunestokensc")

    if (success) {
        toast({
            title: "Success Deposit",
            description: `Successfuly deposit ${data.quantity}`,
            duration: 3000,
            isClosable: true,
            status: 'success'
        })
    } else {
        toast({
            title: "Failed Registration",
            description: result,
            duration: 1000,
            isClosable: true,
            status: 'error'
        })
    }
}