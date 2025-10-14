import { UsersResponse, User } from "@/types/user.types";

const API_BASE_URL = "https://randomuser.me/api/";

export interface FetchUsersParams {
  page: number;
  results?: number;
}

export const userService = {
  async fetchUsers({ page, results = 10 }: FetchUsersParams): Promise<User[]> {
    try {
      const response = await fetch(
        `${API_BASE_URL}?page=${page}&results=${results}&seed=findpeople`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: UsersResponse = await response.json();
      return data.results;
    } catch (error) {
      throw new Error(
        `Failed to fetch users: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  },

  async fetchUserById(id: string, users: User[]): Promise<User | undefined> {
    // client-side porque a API não tem busca por id
    return users.find((user) => user.login.uuid === id);
  },
};
