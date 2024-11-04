import { Box, Flex, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box bg="white" px={60} py={4}> {/* Mayor padding horizontal y vertical para ensanchar */}
      <Flex h={20} alignItems="center"> {/* Cambié la altura a `h={20}` */}
        <RouterLink to="/" ml={4}>
          <Image
            src="/src/assets/logos_u/logo_usm_horizontal.png" 
            alt="Logo USM" 
            style={{ height: '50px' }} // Aumenté un poco la altura del logo
          />
        </RouterLink>
      </Flex>
    </Box>
  )
}
