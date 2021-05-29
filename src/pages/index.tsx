import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Categories } from "../components/Categories";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Box 
        bgImage="/static/img/background.png" 
        bgPosition="right"
        height="335px"
        py="20"
        px="36"
      >
        <Flex position="relative" direction="column" align="flex-start">
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
        </Flex>

        <Image 
          position="absolute" 
          top="176px" 
          right="140px" 
          src="/static/img/airplane.svg" 
          alt="Airplane" 
        />
      </Box>

      <Box maxW={1240} w="100%" mx="auto">
        <Categories />
      </Box>
    </>
  )
}
