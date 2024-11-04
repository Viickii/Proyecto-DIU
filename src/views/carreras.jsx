import { Box, Flex, Heading, Text, Select, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useState } from 'react';
import carrerasData from '/src/assets/carreras2.json'
import ImageWithTitle from '../components/imageTitle';

export default function Carreras() {
  const [selectedCarrera, setSelectedCarrera] = useState("Ing. Civil Informática");

  // Encontrar la carrera seleccionada en el JSON
  const carrera = carrerasData.find((c) => c.nombre === selectedCarrera);

  const handleSelectChange = (e) => {
    setSelectedCarrera(e.target.value);
  };

  return (
    <Box position="relative">
      <ImageWithTitle
        imageSrc="/src/assets/banner-web-usm-admision.webp"
        title="Carreras de Pregrado"
      />

      {/* Contenedor para el Breadcrumb con barra decorativa */}
      <Flex 
        position="absolute"
        top="58%"
        left="13%" 
        justify="start" 
        align="center" 
        mt={4} mb={8}>
        {/* Barra decorativa azul */}
        <Box width="4px" height="16px" bg="#0367A6" mr={2} />

        {/* Breadcrumb de navegación */}
        <Breadcrumb
          fontSize="sm"
          separator="»"
          color="gray.500"
          textAlign="center"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Admisión</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Carreras</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Box height="20px" />
      <Flex direction="column" align="center" gap={6} p={8}>
        {/* Seleccionador de carreras */}
        <Select
          placeholder="Selecciona una carrera"
          value={selectedCarrera}
          onChange={handleSelectChange}
          maxW="400px"
        >
          {carrerasData.map((carrera, index) => (
            <option key={index} value={carrera.nombre}>
              {carrera.nombre}
            </option>
          ))}
        </Select>

        {/* Detalles de la carrera */}
        {carrera && (
          <Box textAlign="center" w="100%" maxW="800px" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" size="xl" mb={4}>
              {carrera.nombre}
            </Heading>
            <Image src={carrera.imagen} alt={carrera.nombre} maxH="300px" objectFit="cover" mb={4} />
            <Text fontSize="lg" mb={4}>
              {carrera.descripcion}
            </Text>
            <Text fontWeight="bold">Malla Curricular:</Text>
            <Image src={carrera.malla} alt={`Malla de ${carrera.nombre}`} maxH="500px" objectFit="cover" />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
