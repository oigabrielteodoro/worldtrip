import { Image, List, ListItem, Text } from "@chakra-ui/react";

import { categories } from "../content/categories";

export function Categories() {
  return ( 
    <List 
      display="flex" 
      alignItems="center" 
      justifyContent="space-between" 
      px="10" 
      mt="28"
    >
      {categories.map(category => (
        <ListItem 
          key={category.name}
          display="flex"
          flexDirection="column"
          align="center"
          justify="center"
          transition="0.2s"
          cursor="pointer"
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image src={category.img} alt={category.name} h={85} />
          <Text mt="6" fontWeight="semibold" fontSize="1xl">
            {category.name}
          </Text>
        </ListItem>
      ))}
    </List>
  )
}