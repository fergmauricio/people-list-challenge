import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchHeader } from "./SearchHeader";

describe("SearchHeader", () => {
  it("deve renderizar o título e input de busca", () => {
    render(<SearchHeader searchTerm="" onSearchChange={jest.fn()} />);

    expect(screen.getByText("Find People")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Buscar por (nome, sobrenome ou idade)...")
    ).toBeInTheDocument();
  });

  it("deve chamar onSearchChange quando digitar no input", async () => {
    const user = userEvent.setup();
    const handleSearchChange = jest.fn();

    render(<SearchHeader searchTerm="" onSearchChange={handleSearchChange} />);

    const input = screen.getByPlaceholderText(
      "Buscar por (nome, sobrenome ou idade)..."
    );

    await act(async () => {
      await user.type(input, "Maurício");
    });

    expect(handleSearchChange).toHaveBeenCalledWith("Maurício");
  });

  it("deve mostrar contagem de resultados", () => {
    render(
      <SearchHeader
        searchTerm="Maurício"
        onSearchChange={jest.fn()}
        resultsCount={3}
      />
    );

    expect(screen.getByText("3 usuários")).toBeInTheDocument();
  });

  it("deve mostrar mensagem de nenhum resultado durante busca", () => {
    render(
      <SearchHeader
        searchTerm="xyz"
        onSearchChange={jest.fn()}
        resultsCount={0}
        isSearching={true}
      />
    );

    expect(screen.getByText("Nenhum resultado encontrado")).toBeInTheDocument();
  });

  it("deve mostrar mensagem de busca com resultados", () => {
    render(
      <SearchHeader
        searchTerm="Maurício"
        onSearchChange={jest.fn()}
        resultsCount={2}
        isSearching={true}
      />
    );

    expect(
      screen.getByText("2 resultado(s) encontrado(s)")
    ).toBeInTheDocument();
  });

  it("deve mostrar informações de paginação quando não está buscando", () => {
    render(
      <SearchHeader
        searchTerm=""
        onSearchChange={jest.fn()}
        resultsCount={50}
        currentPage={2}
        totalPages={5}
        isSearching={false}
      />
    );

    expect(
      screen.getByText("Mostrando 10 de 50 usuários - Página 2 de 5")
    ).toBeInTheDocument();
  });

  it("deve mostrar loading state", () => {
    render(
      <SearchHeader
        searchTerm="Maurício"
        onSearchChange={jest.fn()}
        isLoading={true}
      />
    );

    expect(screen.getByText("Carregando usuários...")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Buscar por (nome, sobrenome ou idade)...")
    ).toBeDisabled();
  });

  it("deve renderizar com searchTerm inicial", () => {
    render(
      <SearchHeader searchTerm="Valor Inicial" onSearchChange={jest.fn()} />
    );

    const input = screen.getByPlaceholderText(
      "Buscar por (nome, sobrenome ou idade)..."
    );
    expect(input).toHaveValue("Valor Inicial");
  });
});
