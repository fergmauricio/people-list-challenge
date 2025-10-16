import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";
import { userService } from "@/services/userService";
import { User } from "@/types/user.types";
import { useMemo, useState } from "react";

interface UseUsersReturn {
  users: User[];
  allUsers: User[];
  filteredUsers: User[];
  isLoading: boolean;
  error: Error | null;
  hasUsers: boolean;
  totalUsers: number;
  isSearching: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export const useUsers = (): UseUsersReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(searchTerm, 400);

  const {
    data: allUsers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => userService.fetchUsers({ results: 100 }),
    staleTime: 5 * 60 * 1000,
  });

  const filteredUsers = useMemo(() => {
    if (!debouncedSearch) return allUsers;

    const term = debouncedSearch.toLowerCase();

    return allUsers.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(term) ||
        user.name.last.toLowerCase().includes(term) ||
        user.dob.age.toString().includes(term)
      );
    });
  }, [allUsers, debouncedSearch]);

  const paginatedUsers = useMemo(() => {
    const usersToPaginate =
      debouncedSearch.length >= 1 ? filteredUsers : allUsers;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    return usersToPaginate.slice(startIndex, endIndex);
  }, [allUsers, filteredUsers, currentPage, debouncedSearch]);

  const isSearching = debouncedSearch.length >= 1;
  const totalPages = Math.ceil(
    (isSearching ? filteredUsers.length : allUsers.length) / 10
  );

  return {
    users: paginatedUsers,
    allUsers,
    filteredUsers,
    isLoading,
    error: error as Error | null,
    hasUsers: paginatedUsers.length > 0,
    totalUsers: allUsers.length,
    isSearching,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};
