import { useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import "./SearchHeader.scss";

interface SearchHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultsCount?: number;
  isLoading?: boolean;
}

export const SearchHeader = ({
  searchTerm,
  onSearchChange,
  resultsCount = 0,
  isLoading = false,
}: SearchHeaderProps) => {
  const [localSearch, setLocalSearch] = useState(searchTerm);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    onSearchChange(value);
  };

  const getResultsText = () => {
    if (isLoading) return "Buscando...";
    if (searchTerm && resultsCount === 0) return "Nenhum resultado encontrado";
    if (searchTerm && resultsCount > 0)
      return `${resultsCount} resultado(s) encontrado(s)`;
    return "";
  };

  return (
    <div className="search-header">
      <div className="search-header__top">
        <h1 className="search-header__title">Encontrar pessoas</h1>
        {!isLoading && resultsCount > 0 && (
          <span className="search-header__count">
            {resultsCount} usuário(s)
          </span>
        )}
      </div>

      <div className="search-header__search">
        <Input
          variant="search"
          placeholder="Encontrar pessoas..."
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
