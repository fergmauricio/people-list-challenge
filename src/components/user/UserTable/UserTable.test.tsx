import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserTable } from "./UserTable";
import { mockUsers } from "@/test/mockData";

describe("UserTable", () => {
  it("deve renderizar a tabela com usuários", () => {
    render(<UserTable users={mockUsers} onViewProfile={jest.fn()} />);

    expect(screen.getByText("Maurício")).toBeInTheDocument();
    expect(screen.getByText("Silva")).toBeInTheDocument();
    expect(screen.getByText("32")).toBeInTheDocument();
    expect(screen.getAllByText("Ver perfil")).toHaveLength(5);
  });

  it("deve chamar onViewProfile quando clicar em Ver perfil", async () => {
    const user = userEvent.setup();
    const handleViewProfile = jest.fn();

    render(
      <UserTable users={[mockUsers[0]]} onViewProfile={handleViewProfile} />
    );

    await user.click(screen.getByText("Ver perfil"));
    expect(handleViewProfile).toHaveBeenCalledWith(mockUsers[0]);
  });

  it("deve mostrar estado de carregamento", () => {
    render(<UserTable users={[]} onViewProfile={jest.fn()} isLoading={true} />);

    expect(screen.getByText("Carregando usuários...")).toBeInTheDocument();
  });

  it("deve mostrar estado vazio", () => {
    render(
      <UserTable users={[]} onViewProfile={jest.fn()} isLoading={false} />
    );

    expect(screen.getByText("Nenhum usuário encontrado")).toBeInTheDocument();
  });
});
