import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUsers } from "./useUsers";
import { userService } from "@/services/userService";
import { mockUsers } from "@/test/mockData";

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
  });

  it("deve buscar usuários com sucesso", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, ""), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.hasUsers).toBe(true);
    expect(result.current.totalUsers).toBe(5);
  });

  it("deve filtrar usuários pelo primeiro nome", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "Maurício"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(1);
    expect(result.current.users[0].name.first).toBe("Maurício");
    expect(result.current.users[0].email).toBe("mauricio.silva@gmail.com");
  });

  it("deve filtrar usuários pelo último nome", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "Oliveira"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(1);
    expect(result.current.users[0].name.last).toBe("Oliveira");
    expect(result.current.users[0].name.first).toBe("Priscila");
  });

  it("deve filtrar usuários pela idade", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "32"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(1);
    expect(result.current.users[0].dob.age).toBe(32);
    expect(result.current.users[0].name.first).toBe("Maurício");
  });

  it("deve filtrar usuários pela cidade", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "São Paulo"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(2);
    expect(result.current.users[0].location.city).toBe("São Paulo");
    expect(result.current.users[1].location.city).toBe("São Paulo");
  });

  it("deve filtrar usuários pelo estado", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "sp"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(2);
    expect(result.current.users[0].location.state).toBe("SP");
    expect(result.current.users[1].location.state).toBe("SP");
  });

  it("deve fazer busca case insensitive na cidade", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "sÃO paULO"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(2);
    expect(result.current.users[0].location.city).toBe("São Paulo");
    expect(result.current.users[1].location.city).toBe("São Paulo");
  });

  it("deve fazer busca case insensitive no primeiro nome", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "mAUrÍcio"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(1);
    expect(result.current.users[0].name.first).toBe("Maurício");
  });

  it("deve retornar vazio quando nenhum usuário corresponder à busca", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "Carlos"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(0);
    expect(result.current.hasUsers).toBe(false);
  });

  it("deve retornar usuários que contenham parte do nome", async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUsers(1, "anda"), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.users).toHaveLength(1);
    expect(result.current.users[0].name.first).toBe("Fernanda");
  });

  it("deve lidar com erro na requisição", async () => {
    (userService.fetchUsers as jest.Mock).mockRejectedValue(
      new Error("Erro de rede")
    );

    const { result } = renderHook(() => useUsers(1, ""), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe("Erro de rede");
    expect(result.current.users).toHaveLength(0);
    expect(result.current.hasUsers).toBe(false);
  });
});
