import { Box, Image, Text, Stack, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
  return (
    <Box>
      {/* Imagen principal con título */}
      <Box position="relative">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-r, rgba(0,0,0,0.2), rgba(0,0,0,0.1))" // Sombra gradiente desde el borde izquierdo
          zIndex={1}
        />
        <Image
          src="/src/assets/jornada-articulacion.webp"
          alt="Postulaciones Abiertas"
          w="100%"
          h="340px"
          objectFit="cover"
          objectPosition="50% 20%"
          filter="brightness(0.8)"
        />
        <Box 
          position="absolute"
          top="11%"
          left="13%" 
          width="4px" 
          height="45px" 
          bg="#F2B950" 
          mr={2} 
          />
        <Text
          position="absolute"
          top="10%"
          left="13.7%"
          fontSize="4xl"
          fontWeight="bold"
          color="white"
          zIndex={2}
        >
          Postulaciones Abiertas Admisión 2025
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0} p={6}>
        <Box textAlign="center">
          <Heading size="md" mb={4} textAlign="center">
            Conoce Nuestra Oferta
          </Heading>
          <Link as={RouterLink} to="/carreras">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
              mx="auto" // Centra el contenido
            >
              <Image
                src="/src/assets/Ing.webp"
                alt="Carreras de Pregrado"
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg" textAlign="center">
                  Carreras de Pregrado
                </Text>
              </Box>
            </Box>
          </Link>
        </Box>

        <Box textAlign="center">
          <Heading size="md" mb={4} textAlign="center">
            Becas y Beneficios
          </Heading>
          <Link as={RouterLink} to="/becas-beneficios">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
              mx="auto"
            >
              <Image
                src="/src/assets/cafebecabienestar-4.webp"
                alt="Becas y Beneficios"
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg" textAlign="center">
                  Becas y Beneficios
                </Text>
              </Box>
            </Box>
          </Link>
        </Box>

        <Box textAlign="center">
          <Heading size="md" mb={4} textAlign="center">
            Aranceles
          </Heading>
          <Link as={RouterLink} to="/aranceles">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
              mx="auto"
            >
              <Image
                src="/src/assets/estudios-de-factibilidad-graficas-1200x800.jpg"
                alt="Aranceles"
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg" textAlign="center">
                  Aranceles
                </Text>
              </Box>
            </Box>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
