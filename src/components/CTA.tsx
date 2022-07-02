import { Link as ChakraLink, Button, useColorModeValue } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { UALContext } from "ual-reactjs-renderer";
import { validator } from './AccountValidator';
import { Container } from './Container'
import { Menu } from './Menu';
import { WAXOBJECT } from './Interface';

export const CTA = () => {

  const wax: WAXOBJECT = useContext(UALContext)

  const login = async () => {
    wax.logout();
    wax.showModal();
  }

  const { user, logged } = validator(wax)

  if (!logged) {
    return (
      <Container
        flexDirection="row"
        position="fixed"
        bottom={0}
        width="full"
        maxWidth="3xl"
        py={3}
      >
        <Button
          onClick={() => login()}
          variant="outline"
          colorScheme="green"
          rounded="button"
          flexGrow={1}
          mx={2}
          width="full"
        >
          Log In
        </Button>
        <Button
          as={ChakraLink}
          isExternal
          href="https://dunesworld.io/"
          variant="solid"
          colorScheme="green"
          rounded="button"
          flexGrow={3}
          mx={2}
          width="full"
        >
          Return to Home Page
        </Button>
      </Container>
    )
  }

  if (logged) {
    return (
      <Container
        flexDirection="row"
        position="fixed"
        bottom={0}
        width="full"
        maxWidth="3xl"
        py={3}
      >
        <Menu logout={wax.logout} wallet={user} />
      </Container>
    )
  }
}