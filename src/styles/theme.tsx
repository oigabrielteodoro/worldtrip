import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: {
      "400": "#000000"
    },
    yellow: {
      "400": "#FFBA08",
      "300": "#FFBA0850",
    },
    gray: {
      "800": "#47585B",
      "400": "#999999",
      "300": "#99999950",
      "100": "#DADADA",
      "50": "#F5F8FA",
    }, 
    white: {
      "400": '#FFFFFF'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        background: 'gray.50',
        color: 'gray.800',
      }
    }
  }
})