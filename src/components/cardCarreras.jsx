import { Box, Image, Text } from '@chakra-ui/react'

export default function CardCarrera({ carrera }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
      p={2} // Reduce el padding general de la card
    >
      <Image
        src={carrera.imagen}
        alt={carrera.nombre}
        h="200px"
        w="100%"
        objectFit="cover"
      />
      <Box p={4}>
        <Text fontWeight="bold" fontSize="lg">{carrera.nombre}</Text>
        <Text>Arancel Anual: {carrera.arancel}</Text>
        <Text>Puntaje Último Matriculado: {carrera.puntaje}</Text>
      </Box>
    </Box>
  )
}
