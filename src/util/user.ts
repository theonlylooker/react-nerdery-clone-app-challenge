import { faker } from "@faker-js/faker";
import fs from "fs";

type typeUser = "user" | "host";

interface user {
  nombre: string;
  foto: string;
  reseñas: number;
  correo: string;
  pais: number;
  tipo: typeUser;
  nacimiento: Date;
  profesion: string;
  estudio: string;
  hobby: string;
  resumen: string;
}

const createRandomUser = (): user => {
  return {
    nombre: faker.person.fullName(),
    foto: faker.image.avatar(),
    reseñas: faker.number.int(),
    correo: faker.internet.email(),
    pais: faker.number.int(),
    tipo: faker.helpers.arrayElement(["user", "host"]),
    nacimiento: faker.date.past(),
    profesion: faker.person.jobTitle(),
    estudio: faker.person.jobType(),
    hobby: faker.lorem.words(),
    resumen: faker.lorem.paragraph(),
  };
};
const createNUsers = (numUsers: number) => {
  return Array.from({ length: numUsers }, createRandomUser);
};
const COUNT = 4;

const users = {
  count: COUNT,
  data: createNUsers(COUNT),
};

fs.writeFileSync("src/API/users.json", JSON.stringify(users, null, "\t"));
