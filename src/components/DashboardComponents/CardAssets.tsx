import { Stack, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, ComponentWithAs, ButtonProps, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { waxContext } from '../WaxProvider'
import { HelperData } from '../Interface'

export const CardAssets = ({ asset, value }: { asset: string, value: string }) => {
    const { WaxStorage, setWaxStorage } = useContext(waxContext)

    const update_withdraw = (data: Object): HelperData => {
        return { ...WaxStorage, withdraw: data }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target: number = parseFloat(event.target.value)
        const asset_final = target.toFixed(4) + ` ${asset.toUpperCase()}`
        switch (asset) {
            case "oil":
                setWaxStorage(update_withdraw({ ...WaxStorage.withdraw, oil_withdraw: asset_final }))
                break
            case "gear":
                setWaxStorage(update_withdraw({ ...WaxStorage.withdraw, gear_withdraw: asset_final }))
                break
            case "gold":
                setWaxStorage(update_withdraw({ ...WaxStorage.withdraw, gold_withdraw: asset_final }))
                break
            case "spice":
                setWaxStorage(update_withdraw({ ...WaxStorage.withdraw, spice_withdraw: asset_final }))
                break
        }
    }

    return (
        <>
            <Text color={useColorModeValue("black", "whiteAlpha.900")} textAlign="center" fontWeight="bold">{asset.toLocaleUpperCase()}</Text>
            <Text color={useColorModeValue("black", "whiteAlpha.900")} fontSize={"sm"} fontWeight="bold" textAlign="center">{`${value}`}</Text>
            <NumberInput precision={4} min={0} max={parseFloat(value)}>
                <NumberInputField onChange={(e) => onChange(e)} size={1} color="black" bgColor={useColorModeValue("gray", "white")} />
            </NumberInput>
        </>
    )
}
