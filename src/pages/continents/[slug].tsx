import { GetStaticPaths, GetStaticProps } from "next"

import Head from "next/head"

import { RiInformationLine } from "react-icons/ri"

import { Box, Text, Image, Flex, Stack, Icon, Tooltip, SimpleGrid } from "@chakra-ui/react"

import { Header } from "../../components/Header"

import { api } from "../../services/api"
import { cities } from "../../content/cities"

interface ContinentData {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
}

interface ContinentProps {
  continent?: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
  if (!continent) {
    return <Text fontSize="4xl" fontWeight="bold" textAlign="center">Continente não encontrado!</Text>
  } 

  return (
    <>
      <Head>
        <title>{continent.title} | WorldTrip</title>
      </Head>

      <Header />

      <Box w="100%" h={500} position="relative">
        <Image 
          src={continent.thumbnail} 
          alt={continent.title} 
          position="absolute" 
          zIndex="-1"
          w="100%"
          h={500}
          objectFit="cover"
          filter="brightness(0.6)"
        />
 
        <Flex direction="column" h="100%" maxW={1160} w="100%" mx="auto">
          <Text 
            fontSize="6xl" 
            fontWeight="bold" 
            color="gray.50" 
            mt="auto" 
            mb="14"
          >
            {continent.title}
          </Text>
        </Flex>
      </Box>

      <Flex direction="column" maxW={1160} w="100%" mx="auto" mt="20" flex="1" >
        <Flex flex="1" align="center" justify="space-between">
          <Text maxW={600} align="justify" lineHeight="36px" fontSize="20px">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>

          <Flex align="center">
            <Stack spacing="3"> 
              <Text 
                color="yellow.400" 
                fontSize="4xl" 
                lineHeight="18px" 
                fontWeight="semibold"
                align="center"
              >
                50
              </Text>
              <Text color="gray.800" fontWeight="semibold">países</Text>
            </Stack>
            <Stack spacing="3" ml="20"> 
              <Text 
                color="yellow.400"  
                fontSize="4xl" 
                lineHeight="18px" 
                fontWeight="semibold"
                align="center"
              >
                60
              </Text>
              <Text color="gray.800" fontWeight="semibold">línguas</Text>
            </Stack>
            <Stack spacing="3" ml="20"> 
              <Text 
                color="yellow.400" 
                fontSize="4xl" 
                lineHeight="18px" 
                fontWeight="semibold"
                align="center"
              >
                27
              </Text>
              <Flex align="center">
                <Text color="gray.800" fontWeight="semibold">
                  cidades +100

                </Text>

                <Icon as={RiInformationLine} color="gray.300" ml="5px" />
              </Flex>
            </Stack>
          </Flex>
        </Flex>

        <Text mt="20" fontSize="3xl" fontWeight="semibold">Cidades +100</Text>

        <SimpleGrid mt="10" minChildWidth="226px" gap="12" mb="20">
          {cities.map(city => (
            <Flex key={city.title} direction="column" bgColor="white" borderRadius={5}>
              <Image src={city.thumbnail} alt={city.title} objectFit="cover" />

              <Flex 
                align="center" 
                py="5" 
                px="6" 
                borderWidth={1}
                borderBottomRadius={5} 
                borderColor="yellow.300" 
                borderTopColor="transparent"
              >
                <Stack w="100%">
                  <Text fontSize="20px" fontWeight="medium">{city.title}</Text>
                  <Text fontSize="16px" color="gray.400">{city.country}</Text>
                </Stack>

                <Image src={city.countryFlag} alt={city.country} />
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<ContinentData[]>('/continents');
 
  const paths = response.data.map(({ slug }) => ({
    params: {
      slug,
    }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params || {};

  const response = await api.get(`/continents`, {
    params: {
      slug,
    } 
  });

  return {
    props: {
      continent: response.data[0] || null,
    } 
  }
}