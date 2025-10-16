import { renderHook, waitFor, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUsers } from "./useUsers";
import { userService } from "@/services/userService";
import { mockUsers } from "@/test/mockData";

jest.mock("./useDebounce", () => ({
  useDebounce: (value: any) => value,
}));

jest.mock("@/services/userService");

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useUsers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);
  });

  it("deve buscar usuários com sucesso e paginar", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(10);
    expect(result.current.allUsers).toHaveLength(12);
    expect(result.current.hasUsers).toBe(true);
    expect(result.current.totalUsers).toBe(12);
    expect(result.current.totalPages).toBe(2);
    expect(result.current.currentPage).toBe(1);
  });

  it("deve filtrar usuários pelo primeiro nome", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      result.current.setSearchTerm("Maurício");
    });

    await waitFor(() => {
      expect(result.current.users).toHaveLength(1);
      expect(result.current.users[0].name.first).toBe("Maurício");
      expect(result.current.isSearching).toBe(true);
    });
  });

  it("deve filtrar usuários pelo último nome Oliveira", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      result.current.setSearchTerm("Oliveira");
    });

    await waitFor(() => {
      expect(result.current.users).toHaveLength(2);
      expect(result.current.users[0].name.last).toBe("Oliveira");
      expect(result.current.users[1].name.last).toBe("Oliveira");
    });
  });

  it("deve filtrar usuários pela idade 29 anos", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      result.current.setSearchTerm("29");
    });

    await waitFor(() => {
      expect(result.current.users).toHaveLength(2);
      expect(result.current.users[0].dob.age).toBe(29);
      expect(result.current.users[1].dob.age).toBe(29);
    });
  });

  it("deve navegar entre páginas corretamente", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.users).toHaveLength(10);

    await act(async () => {
      result.current.setCurrentPage(2);
    });

    await waitFor(() => {
      expect(result.current.currentPage).toBe(2);
      expect(result.current.users).toHaveLength(2);
      expect(result.current.totalPages).toBe(2);
    });
  });

  it("deve resetar para página 1 ao fazer busca", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      result.current.setCurrentPage(2);
    });
    await waitFor(() => expect(result.current.currentPage).toBe(2));

    await act(async () => {
      result.current.setSearchTerm("São Paulo");
    });

    await waitFor(() => {
      expect(result.current.currentPage).toBe(1);
      expect(result.current.isSearching).toBe(true);
    });
  });

  it("deve retornar vazio quando nenhum usuário corresponder à busca", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      result.current.setSearchTerm("Xavier");
    });

    await waitFor(() => {
      expect(result.current.users).toHaveLength(0);
      expect(result.current.hasUsers).toBe(false);
      expect(result.current.isSearching).toBe(true);
    });
  });

  it("deve retornar usuários que contenham parte do nome", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    await act(async () => {
      result.current.setSearchTerm("anda");
    });

    await waitFor(() => {
      expect(result.current.users).toHaveLength(2);
      const userNames = result.current.users.map((user) => user.name.first);
      expect(userNames).toContain("Amanda");
      expect(userNames).toContain("Fernanda");
    });
  });

  it("deve lidar com erro na requisição", async () => {
    (userService.fetchUsers as jest.Mock).mockRejectedValue(
      new Error("Erro de rede")
    );

    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe("Erro de rede");
    expect(result.current.users).toHaveLength(0);
    expect(result.current.hasUsers).toBe(false);
  });
});
