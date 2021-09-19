import { Divider, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

const Cart = () => {
  return <VStack
    w="full" h="full" p={10} alignItems="flex-start"
  >
    <Heading>Your cart</Heading>
    <Text>If price is too hard on your eyes, try changing the theme</Text>
    <HStack w="full" >
        <Image
        boxSize="100px"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1616933067937-e4284baf566e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Segun Adebayo"
      />
      <Stack w="full" justifyContent="space-between" direction="row">
        <Stack >
        <Heading size="md">Penny board</Heading>
        <Text>PNYCOMPP23545</Text>
        </Stack>
        <Stack justifyContent="center">
        <Text fontWeight="bold" >$119.00</Text>
        </Stack>
      </Stack>
    </HStack>
    <HStack w="full" justifyContent="space-between" >
        <Text>Subtotal</Text>
        <Text fontWeight="bold">$19.00</Text>
    </HStack>
    <HStack w="full" justifyContent="space-between" >
        <Text>Shipping</Text>
        <Text fontWeight="bold">$119.00</Text>
    </HStack>
    <HStack w="full" justifyContent="space-between" >
        <Text>Taxes (estimated)</Text>
        <Text fontWeight="bold">$23.00</Text>
    </HStack>
    <Divider />
    <HStack w="full" justifyContent="space-between" >
        <Text>Total</Text>
        <Text fontSize="2xl" fontWeight="bold">$162.79</Text>
    </HStack>
  </VStack>
}

export default Cart;