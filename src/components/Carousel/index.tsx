import { Box, Flex, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';

export function Carousel() {
  return (
    <Box my="14"> 
      <Swiper navigation pagination slideNextClass="arrow-slide-next">
        <SwiperSlide>
          <Box bgImage="/static/img/continents/europa.png" h={450} borderRadius="8">
            <Flex direction="column" align="center" justify="center" h="100%">
              <Text color="gray.50" fontWeight="bold" fontSize="5xl">Europa</Text>
              <Text color="gray.50" fontWeight="medium" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box bgImage="/static/img/continents/europa.png" h={450} borderRadius="8">
            <Flex direction="column" align="center" justify="center" h="100%">
              <Text color="gray.50" fontWeight="bold" fontSize="5xl">Europa</Text>
              <Text color="gray.50" fontWeight="medium" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide> 
          <Box bgImage="/static/img/continents/europa.png" h={450} borderRadius="8">
            <Flex direction="column" align="center" justify="center" h="100%">
              <Text color="gray.50" fontWeight="bold" fontSize="5xl">Europa</Text>
              <Text color="gray.50" fontWeight="medium" fontSize="2xl">O continente mais antigo.</Text>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}