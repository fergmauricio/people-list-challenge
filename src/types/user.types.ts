export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export interface UserLogin {
  uuid: string;
  username: string;
}

export interface UserDob {
  date: string;
  age: number;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  id: {
    value: string;
  };
  name: UserName;
  location: UserLocation;
  login: UserLogin;
  dob: UserDob;
  email: string;
  phone: string;
  picture: UserPicture;
}

export interface UsersResponse {
  results: User[];
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
}

export interface UserCardProps {
  user: User;
  variant?: "mobile" | "desktop";
}

export interface UserTableProps {
  users: User[];
  isLoading?: boolean;
}
