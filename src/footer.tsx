import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Avatar
          size="lg"
          name="Dan Abrahmov"
          src="https://media.istockphoto.com/vectors/abstract-green-leaf-logo-icon-vector-design-ecology-icon-set-eco-icon-vector-id1045368942?k=20&m=1045368942&s=612x612&w=0&h=yTrfMD72kUqNNMAZOdYAL5aEWw7AlGHGGqpIVgwDmSk="
        >
          <AvatarBadge boxSize="1.2em" bg="green.500" />
        </Avatar>
        <Text fontSize={"xs"}>@PlantEnd</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize={"sm"}>
            © 2022 PlantEnd. Todos los derechos reservados
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
