import { Container, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Cart from "../src/sections/Cart";
import Details from '../src/sections/Details';


const Home: NextPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex h={{ base: 'auto', md: '100vh'}} py={[0,10,20]}
    direction={{ base: 'column-reverse', md: 'row'}}
    >
          <Details />
          <Cart />
    </Flex>
  </Container>
)

export default Home
