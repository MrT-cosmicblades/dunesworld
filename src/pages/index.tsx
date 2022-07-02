import {
  Flex,
} from '@chakra-ui/react'
import { Container } from '../components/Container'
import Image, { ImageLoader } from 'next/image'
import logo from '../public/dunesworldlogo.png'
import { useContext } from 'react'
import { UALContext } from "ual-reactjs-renderer";
import { validator } from '../components/AccountValidator'
import Dashboard from '../components/Dashboard'
import { WAXOBJECT } from '../components/Interface'


const Index = () => {

  const wax: WAXOBJECT = useContext(UALContext)

  const { user, logged } = validator(wax)

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return src
  }

  if (!logged) {
    return (
      <Container width={"100%"} backgroundPosition="center"
        backgroundRepeat="no-repeat" height="100vh">
        <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <Image
            loader={myLoader}
            src={logo}
            alt="Comsic Blades"
            width={500} //automatically provided
            height={250} //automatically provided
          // blurDataURL="data:..." automatically provided
          //placeholder="blur" // Optional blur-up while loading
          />

        </Flex>

      </Container>)
  }

  return (
    <Container width={"100%"} backgroundPosition="center"
      backgroundRepeat="no-repeat" height="100vh">
      <Dashboard user={user} />
    </Container>)
}


export default Index
