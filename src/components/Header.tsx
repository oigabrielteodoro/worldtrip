import Link from 'next/link';

import { Flex, Image, Link as ChakraLink, Icon } from "@chakra-ui/react";

import { RiArrowLeftLine } from 'react-icons/ri';

interface HeaderProps {
  shouldExcludeBackButton?: boolean;
}

export function Header({ shouldExcludeBackButton = false }: HeaderProps) {
  if (!shouldExcludeBackButton) {
    return (
      <Flex align="center" justify="space-between" py="7" maxW={1240} mx="auto">
        <Link href="/" passHref>
          <ChakraLink 
            as="a"
            _hover={{
              opacity: 0.8,
            }}
          >
            <Icon as={RiArrowLeftLine} fontSize="26" color="gray.500" />
          </ChakraLink>
        </Link>

        <Image src="/static/img/logo.svg" alt="WorldTrip Logo" />

        <div />
      </Flex>
    )
  }

  return (
    <Flex align="center" justify="center" py="7">
      <Image src="/static/img/logo.svg" alt="WorldTrip Logo" />
    </Flex>
  )
}