import { faker } from "@faker-js/faker";
import fs from "fs";
import { place } from "../card/type";

const createRandomPlace = (): place => {
  return {
    ownerId: faker.string.uuid(),
    placeId: faker.string.uuid(),
    image: faker.image.url(),
    iconUser: faker.image.url(),
    type: faker.helpers.arrayElement([
      "cabins",
      "department",
      "caves",
      "mini",
      "dome",
      "farm",
    ]),
    country: faker.location.country(),
    city: faker.location.city(),
    rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
    description: faker.lorem.sentence(),
    priceDay: faker.number.int({ min: 30, max: 100 }),
    wished: faker.datatype.boolean(),
  };
};

const createNPlaces = (numPlaces: number) => {
  return Array.from({ length: numPlaces }, createRandomPlace);
};

const COUNT = 100;

const places = createNPlaces(COUNT);
// const places = {
//   count: COUNT,
//   results: createNPlaces(COUNT),
// };
fs.writeFileSync("src/API/places.json", JSON.stringify(places, null, "\t"));
