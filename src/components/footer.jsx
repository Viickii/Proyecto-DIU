import { Box, Container, Stack, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="#2D2D2D" color="#D1D1D1">
      <Container
        as={Stack}
        maxW="6xl"
        py={8}
        spacing={4}
        justify="center"
        align="center">
        <Stack direction="row" spacing={14} wrap="wrap" justify="center">
          <Box as="a" href="https://acceso.mineduc.cl/">
            <img 
              src="/src/assets/logos_u/logo_acceso.svg" 
              alt="Institución 1" 
              style={{ height: '60px' }}
            />
          </Box>
          <Box as="a" href="https://www.consejoderectores.cl/">
            <img 
              src="/src/assets/logos_u/logo_consejorectores.svg" 
              alt="Institución 2" 
              style={{ height: '60px' }}
            />
          </Box>
          <Box as="a" href="https://redg9.cl/">
            <img 
              src="/src/assets/logos_u/logo_g9.svg" 
              alt="Institución 3" 
              style={{ height: '60px' }}
            />
          </Box>
          <Box as="a" href="https://www.auregionales.cl/">
            <img 
              src="/src/assets/logos_u/logo_aur.svg" 
              alt="Institución 4" 
              style={{ height: '60px' }}
            />
          </Box>
          <Box as="a" href="https://consejoderectoresvalparaiso.cl/">
            <img 
              src="/src/assets/logos_u/LOGO-CRUV-BLANCO.svg" 
              alt="Institución 5" 
              style={{ height: '60px' }}
            />
          </Box>
          <Box as="a" href="https://www.reuna.cl/">
            <img 
              src="/src/assets/logos_u/logo_reuna.svg" 
              alt="Institución 6" 
              style={{ height: '60px' }}
            />
          </Box>
          <Box as="a" href="https://www.universia.net/cl/home.html">
            <img 
              src="/src/assets/logos_u/logo_universia.svg" 
              alt="Institución 7" 
              style={{ height: '60px' }}
            />
          </Box>
        </Stack>
      </Container>
      <Box borderTopWidth={1} borderStyle="solid" borderColor="#4A4A4A">
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2024 Universidad Técnica Federico Santa María. Todos los derechos reservados</Text>
        </Container>
      </Box>
    </Box>
  )
}
