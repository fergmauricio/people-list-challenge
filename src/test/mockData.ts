// src/test/mockData.ts
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
  // NOVOS USUÁRIOS BRASILEIROS
  {
    id: { value: "6" },
    name: { first: "Carlos", last: "Oliveira", title: "Sr" },
    dob: { age: 40, date: "1983-09-12" },
    login: { uuid: "6", username: "carlos.oliveira" },
    location: {
      street: { number: 111, name: "Rua das Acácias" },
      city: "Curitiba",
      state: "PR",
      country: "Brasil",
      postcode: "80000-000",
    },
    email: "carlos.oliveira@gmail.com",
    phone: "(41) 91234-5678",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "7" },
    name: { first: "Amanda", last: "Souza", title: "Sra" },
    dob: { age: 27, date: "1996-11-30" },
    login: { uuid: "7", username: "amanda.souza" },
    location: {
      street: { number: 222, name: "Avenida Central" },
      city: "Salvador",
      state: "BA",
      country: "Brasil",
      postcode: "40000-000",
    },
    email: "amanda.souza@hotmail.com",
    phone: "(71) 92345-6789",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "8" },
    name: { first: "Rafael", last: "Pereira", title: "Sr" },
    dob: { age: 33, date: "1990-02-14" },
    login: { uuid: "8", username: "rafael.pereira" },
    location: {
      street: { number: 333, name: "Rua dos Ipês" },
      city: "Brasília",
      state: "DF",
      country: "Brasil",
      postcode: "70000-000",
    },
    email: "rafael.pereira@gmail.com",
    phone: "(61) 93456-7890",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "9" },
    name: { first: "Juliana", last: "Rodrigues", title: "Sra" },
    dob: { age: 31, date: "1992-06-25" },
    login: { uuid: "9", username: "juliana.rodrigues" },
    location: {
      street: { number: 444, name: "Alameda Santos" },
      city: "Campinas",
      state: "SP",
      country: "Brasil",
      postcode: "13000-000",
    },
    email: "juliana.rodrigues@yahoo.com",
    phone: "(19) 94567-8901",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "10" },
    name: { first: "Bruno", last: "Almeida", title: "Sr" },
    dob: { age: 26, date: "1997-04-08" },
    login: { uuid: "10", username: "bruno.almeida" },
    location: {
      street: { number: 555, name: "Rua das Orquídeas" },
      city: "Fortaleza",
      state: "CE",
      country: "Brasil",
      postcode: "60000-000",
    },
    email: "bruno.almeida@gmail.com",
    phone: "(85) 95678-9012",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "11" },
    name: { first: "Patrícia", last: "Martins", title: "Sra" },
    dob: { age: 38, date: "1985-10-17" },
    login: { uuid: "11", username: "patricia.martins" },
    location: {
      street: { number: 666, name: "Avenida Rio Branco" },
      city: "Recife",
      state: "PE",
      country: "Brasil",
      postcode: "50000-000",
    },
    email: "patricia.martins@outlook.com",
    phone: "(81) 96789-0123",
    picture: { large: "", medium: "", thumbnail: "" },
  },
  {
    id: { value: "12" },
    name: { first: "Diego", last: "Barbosa", title: "Sr" },
    dob: { age: 29, date: "1994-12-03" },
    login: { uuid: "12", username: "diego.barbosa" },
    location: {
      street: { number: 777, name: "Rua dos Coqueiros" },
      city: "Manaus",
      state: "AM",
      country: "Brasil",
      postcode: "69000-000",
    },
    email: "diego.barbosa@gmail.com",
    phone: "(92) 97890-1234",
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
