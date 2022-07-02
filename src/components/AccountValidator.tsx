import React from 'react'
import { JsonRpc, RpcError } from 'eosjs'
import useSWR from 'swr'
import { WAXOBJECT } from './Interface';

const endpoint = `https://testnet-wax.3dkrender.com:`;
export const rpc = new JsonRpc(endpoint);


export const validator = (wax: WAXOBJECT) => {
    const fetchname = () => {
        return wax.activeUser.accountName
    }

    const { data } = useSWR(wax?.activeUser ? "/account" : null, fetchname, {
        revalidateOnFocus: false,
        refreshInterval: 1000,
    })

    return {
        user: data ? wax.activeUser.accountName : null,
        logged: data
    }
}

