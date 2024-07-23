import "/Users/srinidhi/pokedex/src/App.css";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import "../App.css";
export default function CardComp({ data }) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (!data) {
    return (
      <Card maxW="sm">
        <CardBody>
          <Text>No Pokémon data available.</Text>
        </CardBody>
      </Card>
    );
  }
  const {
    name = "Unknown",
    sprites: {
      other: { dream_world: { front_default: img = "" } = {} } = {},
    } = {},
    types = [],
  } = data;

  const typeName = types.length > 0 ? types[0].type.name : "Unknown Type";

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={img} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>
            This is {name}.It is {typeName} type pokemon. It is the most famous
            pokemon
          </Text>
        </Stack>
        <CardFooter>
          <Button size="sm" colorScheme="pink">
            More Details
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}
