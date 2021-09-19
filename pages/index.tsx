import { Container, Flex, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'


const Home: NextPage = () => (
  <Container maxW="container.xl" p={0} >
    <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" >

        </VStack>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.500"  >

        </VStack>
    </Flex>
  </Container>
)

export default Home
