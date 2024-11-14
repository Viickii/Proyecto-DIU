import { Box, Image, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";

export default function ImageWithTitle({ imageSrc, title, breadcrumbName }) {
  const leftOffset = "13%"; // Definimos el margen desde la izquierda para ambos elementos

  return (
    <Box>
      {/* Contenedor de la imagen con el título */}
      <Box position="relative">
        {/* Sombra gradiente desde el borde izquierdo */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-r, rgba(0,0,0,0.2), rgba(0,0,0,0.1))"
          zIndex={1}
        />
        {/* Imagen de fondo */}
        <Image
          src={imageSrc}
          alt={title}
          w="100%"
          h="340px"
          objectFit="cover"
          objectPosition="50% 100%"
          filter="brightness(0.8)"
        />
        {/* Barra decorativa */}
        <Box 
          position="absolute"
          top="11%"
          left={leftOffset} // Aplicamos el mismo offset para alineación
          width="4px" 
          height="45px" 
          bg="#F2B950" 
          mr={2} 
        />
        {/* Título sobre la imagen */}
        <Text
          position="absolute"
          top="10%"
          left={`calc(${leftOffset} + 0.7%)`} // Ajuste fino para alineación
          fontSize="4xl"
          fontWeight="bold"
          color="white"
          zIndex={2}
        >
          {title}
        </Text>
      </Box>

      {/* Contenedor del Breadcrumb */}
      <Flex 
        bg="white" 
        p={4} 
        justify="start" 
        align="center"
        pl={leftOffset} // Usamos el mismo leftOffset para alineación exacta
      >
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
            <BreadcrumbLink href="#">{breadcrumbName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box>
  );
}
