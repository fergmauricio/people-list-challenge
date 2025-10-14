import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { userService } from "@/services/userService";
import { User } from "@/types/user.types";

interface UseUsersReturn {
  users: User[];
  isLoading: boolean;
  error: Error | null;
  hasUsers: boolean;
  totalUsers: number;
}

export const useUsers = (page: number, searchTerm: string): UseUsersReturn => {
  const debouncedSearch = useDebounce(searchTerm, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page],
    queryFn: () =>
      userService.fetchUsers({
        page,
        results: 20,
        seed: "findpeople",
      }),
    staleTime: 5 * 60 * 1000,
  });

  // Filtro client-side
  const filteredUsers =
    data?.filter((user) => {
      if (!debouncedSearch) return true;

      const term = debouncedSearch.toLowerCase();
      const firstName = user.name.first.toLowerCase();
      const lastName = user.name.last.toLowerCase();
      const city = user.location.city.toLowerCase();
      const state = user.location.state.toLowerCase();
      const age = user.dob.age.toString();

      return (
        firstName.includes(term) ||
        lastName.includes(term) ||
        age.includes(term) ||
        city.includes(term) ||
        state.includes(term)
      );
    }) || [];

  return {
    users: filteredUsers,
    isLoading,
    error: error as Error | null,
    hasUsers: filteredUsers.length > 0,
    totalUsers: data?.length || 0,
  };
};
