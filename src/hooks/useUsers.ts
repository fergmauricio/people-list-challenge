import { useQuery } from "@tanstack/react-query";
import { fetchUsers, User } from "../utils/api";

export const useUsers = (page: number = 1, search: string = "") => {
  return useQuery<User[]>({
    queryKey: ["users", page, search],
    queryFn: () => fetchUsers(page, search),
  });
};
