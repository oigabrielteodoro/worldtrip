import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";

import { Continents } from "../components/Continents";
 
import { Categories } from "../components/Categories";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
 
      <Box position="relative" height="335px">
        <Image src="/static/img/background.png" alt="Background" position="absolute" zIndex="-1" width="100%" />

        <Flex 
          maxW={1240}
          w="100%" 
          mx="auto" 
          position="relative" 
          direction="column" 
          align="flex-start"
          py="20"
        >
          <Text 
            fontSize="4xl" 
            color="gray.50" 
            fontWeight="medium"
          >
            5 Continentes, <br /> 
            infinitas possibilidades.
          </Text>
          <Text
            fontSize="2xl"
            color="gray.300"
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou. 
          </Text>

          <Image 
            position="absolute"  
            right="0" 
            src="/static/img/airplane.svg" 
            alt="Airplane" 
          />
        </Flex>
      </Box>

      <Box maxW={1240} w="100%" mx="auto">
        <Categories />

        <Divider 
          borderColor="gray.800" 
          borderTopWidth={1} 
          mt="20" 
          mb="14"
          mx="auto" 
          w={90} 
        />

        <Text 
          fontSize="3xl" 
          textAlign="center"
          color="gray.800"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Continents />
      </Box>
    </>
  )
}
