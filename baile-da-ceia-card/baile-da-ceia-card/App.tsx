import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="xl" overflow="hidden" borderColor="yellow.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 70,
      borderWidth: 30
    }} _light={{
      backgroundColor: "orange.100"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://f.i.uol.com.br/fotografia/2021/12/15/163960857461ba70fe33e59_1639608574_3x2_xl.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="red.600" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" px="3" py="1">
            AUDIO CLUB
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="xl" ml="-1">
              Baile da Ceia
            </Heading>
            <Text fontSize="xs" _light={{
            color: "red.500"
          }} _dark={{
            color: "red.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Festival de rap comemorou os cinco anos da gravadora independente.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Com apresentações de Djonga, Don Cesão, Febem, Igão, Tasha & Tracie, Kyan, entre outros nomes.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="500">
                04/12/2021
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    