import React from 'react'
import { Container } from '@chakra-ui/react'
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import { GrHome, GrLogout } from 'react-icons/gr'
import { MdExplore } from 'react-icons/md'
import { useRouter } from 'next/router'

interface ITEM {
    id: number
    title: string
    icon: []
    activeIcon: any
}

export const Menu: React.FC<{ logout: () => void, wallet: string }> = ({ logout, wallet }) => {
    const router = useRouter()

    const bottomNavItems = [
        {
            title: 'Home',
            icon: <GrHome style={{ fontSize: '10px' }} size={"20px"} />,
            activeIcon: <GrHome style={{ fontSize: '12px', color: '#fff' }} />
        },
        {
            title: 'Assets',
            icon: <GrLogout style={{ fontSize: '10px' }} size={"20px"} />,
            activeIcon: <GrLogout style={{ fontSize: '12px', color: '#fff' }} />
        },
        {
            title: 'Explore',
            icon: <MdExplore style={{ fontSize: '10px' }} size={"20px"} />,
            activeIcon: <MdExplore style={{ fontSize: '12px', color: '#fff' }} />
        },
        {
            title: 'Shop',
            icon: <GrLogout style={{ fontSize: '10px' }} size={"20px"} />,
            activeIcon: <GrLogout style={{ fontSize: '12px', color: '#fff' }} />
        },
        {
            title: 'Exchange',
            icon: <GrLogout style={{ fontSize: '10px' }} size={"20px"} />,
            activeIcon: <GrLogout style={{ fontSize: '12px', color: '#fff' }} />
        },
        {
            title: 'Log Out',
            icon: <GrLogout style={{ fontSize: '10px' }} size={"20px"} />,
            activeIcon: <GrLogout style={{ fontSize: '12px', color: '#fff' }} />
        }
    ]

    const handleClick = (id: number) => {
        switch (id) {
            case 1:
                router.push('/machine')
            case 5:
                logout()
            default:
                console.log(id)
        }
    }

    return (
        <Container
            flexDirection="row"
            position="fixed"
            bottom={0}
            width="full"
            maxWidth="3xl"
            py={3}
        >
            <BottomNavigation
                items={bottomNavItems}
                defaultSelected={0}
                onItemClick={(item: ITEM) => handleClick(item.id)}
            />
        </Container>
    )
}
