import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";



const Details = () => {

  const colSpan = useBreakpointValue({ base: 2, md: 1 })

  return (
    <VStack
    w="full"
    h="full"
    p={10}
    spacing={10}
    alignItems="flex-start"
    >
      <Heading size="2xl">Your details</Heading>
      <Text>If you already have an account, click here to log in.</Text>
      <SimpleGrid w="full" columns={2} columnGap={3} rowGap={1}>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Yaounde Mendong" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="usa">United States of America</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Place Order
          </Button>
        </GridItem>

      </SimpleGrid>
    </VStack>
  )
}


export default Details;