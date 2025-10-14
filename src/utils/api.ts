import { ApiResponse, User } from "../types/user.types";

const BASE_URL = "https://randomuser.me/api";
const SEED = "fixedseed";

export const fetchUsers = async (
  page: number = 1,
  search?: string
): Promise<User[]> => {
  const params = new URLSearchParams({
    results: "10",
    page: page.toString(),
    seed: SEED,
    inc: "name,dob,picture,location,login,id",
  });
  if (search) params.append("name", search);

  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error("Falha no fetch");
  const data: ApiResponse = await res.json();
  return data.results;
};

export const fetchUser = async (uuid: string): Promise<User> => {
  const params = new URLSearchParams({
    results: "1",
    seed: uuid,
    inc: "name,dob,picture,location,login,id",
  });
  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error("Falha no fetch");
  const data: ApiResponse = await res.json();
  return data.results[0];
};
