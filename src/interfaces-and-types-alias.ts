interface User {
  id: number;
  nombre: string;
  apellido: string;
  email?: string;
  readonly creado: Date;
}

const victor: User = {
  id: 1234,
  nombre: "Victor",
  apellido: "Olave",
  email: "victorolave@gmail.com",
  creado: new Date(),
};

interface Admin extends User {
  permissions: string[];
}

const tomas: Admin = {
  id: 2345,
  nombre: "Tomas",
  apellido: "Castaño",
  email: "tomas@mail.com",
  creado: new Date(),
  permissions: ["todos"],
};

type UserType = {
  id: number;
  nombre: string;
  email?: string;
  readonly creado: Date;
};

const user: UserType = {
  id: 1234,
  nombre: "Victor",
  email: "victorolave@gmail.com",
  creado: new Date(),
};

type AdminType = UserType & { permissions: string[] };

const admin: AdminType = {
  id: 2345,
  nombre: "Tomas",
  email: "tomas@mail.com",
  creado: new Date(),
  permissions: ["todos"],
};
