import { Heading, Text, VStack } from "@chakra-ui/react";

const Cart = () => {
  return <VStack
    w="full" h="full" p={10} alignItems="flex-start"
  >
    <Heading>Your cart</Heading>
    <Text>If price is too hard on your eyes, try changing the theme</Text>
  </VStack>
}

export default Cart;