import { Container, Flex, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Cart from "../src/sections/Cart";
import Details from '../src/sections/Details';


const Home: NextPage = () => (
  <Container maxW="container.xl" p={0} >
    <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" >
          <Details />

        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start"  >
          <Cart />
        </VStack>
    </Flex>
  </Container>
)

export default Home
