import { MainContainer } from "./MainContainer";
import { UALProvider, Chain } from 'ual-reactjs-renderer';
import { Wax } from "@eosdacio/ual-wax";
import { Anchor } from 'ual-anchor';
import React from "react";
import 'regenerator-runtime/runtime'
import { CTA } from "./CTA";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { waxContext } from "./WaxProvider";
import { useState } from "react";
import { HelperData } from "./Interface";


export const Layout = ({ children }) => {
    const [WaxStorage, setWaxStorage] = useState<HelperData>({
        withdraw: {
            oil_withdraw: "",
            gear_withdraw: "",
            gold_withdraw: "",
            spice_withdraw: ""
        }
    })


    const chains: Chain = {
        chainId: "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12",
        rpcEndpoints: [
            {
                protocol: 'https',
                host: 'testnet-wax.3dkrender.com',
                port: "",
            }
        ],
    };

    const appName = "dunesworld"

    const wcw = new Wax([chains]);

    const anchor = new Anchor([chains], { appName: appName });

    return (
        <MainContainer>
            <UALProvider
                appName={appName}
                authenticators={[wcw, anchor]}
                chains={[chains]}
            >
                <waxContext.Provider value={{ WaxStorage, setWaxStorage }}>
                    {children}
                    <CTA />
                    <DarkModeSwitch />
                </waxContext.Provider>

            </UALProvider>
        </MainContainer>
    )
}