import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import { theme } from "../styles/theme";

import '../styles/customSwiper.css';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
