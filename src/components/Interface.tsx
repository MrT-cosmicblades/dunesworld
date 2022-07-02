export interface HelperData {
    withdraw: {
        oil_withdraw?: string
        gear_withdraw?: string
        gold_withdraw?: string
        spice_withdraw?: string
    }

}

export interface State {
    WaxStorage: HelperData
    setWaxStorage: React.Dispatch<HelperData>
}

export interface USER {
    date: number
    gear_balance: string
    gold_balance: string
    oil_balance: string
    spice: string
    username: string
    wallet: string
}

export interface TOAST {
    title: string
    description: string
    status: "success" | "error" | "warning" | "info"
    duration: number
    isClosable: boolean
}

interface ACTION {
    account: string
    name: string
    authorization: [{ actor: string, permission: string }]
    data: Object
}

interface WAXDATA {
    actions: Array<ACTION>
}

interface BLOCKS {
    blocksBehind: number
    expireSeconds: number
}

interface ACTIVEUSER {
    accountName: string
    chainId: string
    requestPermission: string
    rpc: {}
    signTransaction: ({ actions }: WAXDATA, { blocksBehind, expireSeconds }: BLOCKS) => Promise<any>
}

export interface WAXOBJECT {
    activeAuthenticator: {}
    activeUser: ACTIVEUSER | null
    showModal: () => void
    logout: () => void
}

export interface NEWUSER_DATA {
    wallet: string
    username: string
}

export interface WITHDRAW_DATA {

}

export interface DEPOSIT_DATA {
    from: string
    to: string
    quantity: string
    memo: string
}