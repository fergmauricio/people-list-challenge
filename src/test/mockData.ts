export const mockUsers = [
  {
    id: { value: "1" },
    name: { first: "Maurício", last: "Silva", title: "Sr" },
    dob: { age: 32, date: "1991-05-15" },
    login: { uuid: "1", username: "mauricio.silva" },
    location: {
      street: { number: 123, name: "Rua das Flores" },
      city: "São Paulo",
      state: "SP",
      country: "Brasil",
      postcode: "01234-567",
    },
    email: "mauricio.silva@gmail.com",
    phone: "(11) 98765-4321",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "2" },
    name: { first: "Priscila", last: "Oliveira", title: "Sra" },
    dob: { age: 28, date: "1995-08-22" },
    login: { uuid: "2", username: "priscila.oliveira" },
    location: {
      street: { number: 456, name: "Avenida Brasil" },
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil",
      postcode: "22345-678",
    },
    email: "priscila.oliveira@hotmail.com",
    phone: "(21) 97654-3210",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "3" },
    name: { first: "Laís", last: "Costa", title: "Srta" },
    dob: { age: 25, date: "1998-12-10" },
    login: { uuid: "3", username: "lais.costa" },
    location: {
      street: { number: 789, name: "Rua das Palmeiras" },
      city: "Belo Horizonte",
      state: "MG",
      country: "Brasil",
      postcode: "30123-456",
    },
    email: "lais.costa@yahoo.com",
    phone: "(31) 96543-2109",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "4" },
    name: { first: "Ricardo", last: "Santos", title: "Sr" },
    dob: { age: 35, date: "1988-03-18" },
    login: { uuid: "4", username: "ricardo.santos" },
    location: {
      street: { number: 321, name: "Rua do Comércio" },
      city: "Porto Alegre",
      state: "RS",
      country: "Brasil",
      postcode: "90123-456",
    },
    email: "ricardo.santos@outlook.com",
    phone: "(51) 95432-1098",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "5" },
    name: { first: "Fernanda", last: "Lima", title: "Sra" },
    dob: { age: 29, date: "1994-07-05" },
    login: { uuid: "5", username: "fernanda.lima" },
    location: {
      street: { number: 654, name: "Avenida Paulista" },
      city: "São Paulo",
      state: "SP",
      country: "Brasil",
      postcode: "01311-000",
    },
    email: "fernanda.lima@gmail.com",
    phone: "(11) 94321-0987",
    picture: { large: "", medium: "", thumbnail: "" },
  },
];

// Funções utilitárias para manipular os mocks
export const getUsersByFirstName = (name: string) =>
  mockUsers.filter((user) =>
    user.name.first.toLowerCase().includes(name.toLowerCase())
  );

export const getUsersByLastName = (lastName: string) =>
  mockUsers.filter((user) =>
    user.name.last.toLowerCase().includes(lastName.toLowerCase())
  );

export const getUsersByAge = (age: number) =>
  mockUsers.filter((user) => user.dob.age === age);

export const getUsersByCity = (city: string) =>
  mockUsers.filter((user) =>
    user.location.city.toLowerCase().includes(city.toLowerCase())
  );
