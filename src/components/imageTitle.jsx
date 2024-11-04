import { Box, Image, Text } from "@chakra-ui/react";

export default function ImageWithTitle({ imageSrc, title }) {
  return (
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
        h="520px"
        objectFit="cover"
        objectPosition="50% 100%"
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
      {/* Título sobre la imagen */}
      <Text
        position="absolute"
        top="10%"
        left="13.7%"
        fontSize="4xl"
        fontWeight="bold"
        color="white"
        zIndex={2}
      >
        {title}
      </Text>
    </Box>
  );
}
