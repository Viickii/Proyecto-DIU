import { Box, Flex, Heading, Text, Select, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useState } from 'react';
import carrerasData from '/src/assets/carreras2.json'
import ImageWithTitle from '../components/imageTitle';

export default function Carreras() {
  const [selectedCarrera, setSelectedCarrera] = useState("Selecciona una carrera");

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
        breadcrumbName="Carreras"
      />

      <Box height="50px" />
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
          <Box textAlign="center" w="100%" maxW="2000px" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" size="xl" mb={4}>
              {carrera.nombre}
            </Heading>
            <Text fontWeight="bold">Título Profesional:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.titulo}
            </Text>
            <Text fontWeight="bold">Descripción:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.descripcion}
            </Text>
            <Text fontWeight="bold">Lugar:</Text>
            <Text fontSize="lg" mb={4}>
              {carrera.lugar}
            </Text>
            <Text fontWeight="bold">Malla Curricular:</Text>
            <Image src={carrera.malla} alt={`Malla de ${carrera.nombre}`} maxH="500px" mx="auto" objectFit="cover" />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
