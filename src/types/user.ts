export interface User {
  id: { value: string }; // UUID da API
  name: { first: string; last: string; title: string };
  dob: { date: string; age: number };
  picture: { large: string; medium: string; thumbnail: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
  };
  login: { username: string; email: string; password: string };
}

export interface ApiResponse {
  results: User[];
  info: { seed: string; results: number; page: number; version: string };
}
