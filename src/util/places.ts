import { faker } from "@faker-js/faker";
import fs from "fs";
type Place = "cabañas" | "departamento" | "cuevas" | "mini" | "domo" | "farm";

interface place {
  userId: string;
  iconUser: string;
  tipo: Place;
  lugar: string;
  descripcion: string;
  precioDia: number;
  wished: boolean;
}

const createRandomPlace = (): place => {
  return {
    userId: faker.string.uuid(),
    iconUser: faker.image.url(),
    tipo: faker.helpers.arrayElement([
      "cabañas",
      "departamento",
      "cuevas",
      "mini",
      "domo",
      "farm",
    ]),
    lugar: faker.location.country(),
    descripcion: faker.lorem.sentences(),
    precioDia: faker.number.int(),
    wished: faker.datatype.boolean(),
  };
};

const createNPlaces = (numPlaces: number) => {
  return Array.from({ length: numPlaces }, createRandomPlace);
};

const places = {
  places: createNPlaces(10),
};

fs.writeFileSync("src/API/places.json", JSON.stringify(places, null, "\t"));
