import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { userService } from "@/services/userService";
import { User } from "@/types/user.types";

export const useUsers = (page: number, searchTerm: string) => {
  const debouncedSearch = useDebounce(searchTerm, 300);

  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page],
    queryFn: () => userService.fetchUsers({ page, results: 10 }),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  // Filtro client-side
  const filteredUsers =
    data?.filter((user) => {
      if (!debouncedSearch) return true;

      const term = debouncedSearch.toLowerCase();
      return (
        user.name.first.toLowerCase().includes(term) ||
        user.name.last.toLowerCase().includes(term) ||
        user.dob.age.toString().includes(term)
      );
    }) || [];

  return {
    users: filteredUsers,
    isLoading,
    error,
    hasUsers: filteredUsers.length > 0,
  };
};
