import { useEffect, useState } from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { api } from '../../services/api';
import { useRouter } from 'next/dist/client/router';

interface Continent {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
}

export function Continents() {
  const router = useRouter();

  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get('/continents').then(response => {
      setContinents(response.data);
    });
  }, []); 

  function handleNavigate(slug: string) {
    router.push(`/continents/${slug}`);
  }

  return (
    <Box my="14"> 
      <Swiper navigation pagination className="swiper-container">
        {continents.map(continent => (
          <SwiperSlide key={continent.id} onClick={() => handleNavigate(continent.slug)}>
            <Box position="relative" h={450}>
              <Image 
                w="100%"
                borderRadius={8}
                src={continent.thumbnail} 
                alt={continent.title} 
                position="absolute" 
                zIndex="-1"
                filter="brightness(0.6)"
              />

              <Flex direction="column" align="center" justify="center" h="100%">
                <Text color="gray.50" fontWeight="bold" fontSize="5xl">{continent.title}</Text>
                <Text color="gray.50" fontWeight="medium" fontSize="2xl">{continent.description}</Text>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}