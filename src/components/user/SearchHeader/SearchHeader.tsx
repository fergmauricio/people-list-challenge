import { useEffect, useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import "./SearchHeader.scss";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";

interface SearchHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultsCount?: number;
  isLoading?: boolean;
  isSearching?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export const SearchHeader = ({
  searchTerm,
  onSearchChange,
  resultsCount = 0,
  isLoading = false,
  isSearching = false,
  currentPage = 1,
  totalPages = 1,
}: SearchHeaderProps) => {
  const [localSearch, setLocalSearch] = useState(searchTerm);

  useEffect(() => {
    setLocalSearch(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    onSearchChange(value);
  };

  const getResultsText = () => {
    if (isLoading) return "Carregando usuários...";
    if (isSearching && resultsCount === 0) return "Nenhum resultado encontrado";
    if (isSearching && resultsCount > 0)
      return `${resultsCount} resultado(s) encontrado(s)`;
    if (!isSearching)
      return `Mostrando 10 de ${resultsCount} usuários - Página ${currentPage} de ${totalPages}`;
    return "";
  };

  return (
    <div className="search-header">
      <div className="search-header__top">
        <div className="search-header__left">
          <h1 className="search-header__title">Find People</h1>
          <ThemeToggle />
        </div>

        <span className="search-header__count">{resultsCount} usuários</span>
      </div>

      <div className="search-header__search">
        <Input
          variant="search"
          placeholder="Buscar por (nome, sobrenome ou idade)..."
          value={localSearch}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </div>

      {getResultsText() && (
        <div className="search-header__results">{getResultsText()}</div>
      )}
    </div>
  );
};
