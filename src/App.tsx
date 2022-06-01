import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import theme from "./theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import PrivacyPolicy from "./privacy-policy";
import Footer from "./footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Grid p={3}>
        <ColorModeSwitcher mr={4} justifySelf="flex-end" />
        <VStack justifySelf="center" mt={2}>
          <Heading
            fontSize="22px"
            fontWeight="700"
            textAlign={"center"}
            noOfLines={1}
          >
            POLÍTICA DE PRIVACIDAD
          </Heading>
          <Text as={"em"} fontSize="md">
            @PlantEnd
          </Text>
        </VStack>
        <VStack spacing={8}>
          <PrivacyPolicy />
        </VStack>
      </Grid>
    </Box>
    <Footer />
  </ChakraProvider>
);
