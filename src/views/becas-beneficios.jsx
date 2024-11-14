import { Box, Flex, Heading, Text, Select, Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useState } from 'react';
import becasData from '/src/assets/becas.json';
import ImageWithTitle from '../components/imageTitle';

export default function BecasBeneficios() {
  const [selectedBeca, setSelectedBeca] = useState(becasData[0].nombre);

  const beca = becasData.find((b) => b.nombre === selectedBeca);

  const handleSelectChange = (e) => {
    setSelectedBeca(e.target.value);
  };

  return (
    <Box position="relative">
      <ImageWithTitle
        imageSrc="/src/assets/banner-web-usm-admision.webp"
        title="Becas y Beneficios"
        breadcrumbName="Becas y Beneficios"
      />

      <Flex direction="column" align="center" gap={6} p={8}>
        {/* Texto de instrucción */}
        <Text fontSize="lg" fontWeight="bold">
          Selecciona la Beca o Beneficio que quieras:
        </Text>
        <Select
          placeholder="Selecciona una beca"
          value={selectedBeca}
          onChange={handleSelectChange}
          maxW="400px"
        >
          {becasData.map((beca, index) => (
            <option key={index} value={beca.nombre}>
              {beca.nombre}
            </option>
          ))}
        </Select>

        {beca && (
          <Box w="100%" maxW="1000px" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" size="xl" mb={4}>
              {beca.nombre}
            </Heading>
            <Text fontSize="lg" mb={4}>
              {beca.descripcion}
            </Text>
            <Text fontWeight="bold">Requisitos:</Text>
            <Text mb={4}>{beca.requisitos}</Text>
            <Text fontWeight="bold">Beneficios:</Text>
            <Text mb={4}>{beca.beneficios}</Text>
          </Box>
        )}
      </Flex>
    </Box>
    
  );
}
