import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "@/hooks/useUsers";
import { usePagination } from "@/hooks/usePagination";
import { SearchHeader } from "@/components/user/SearchHeader/SearchHeader";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { UserTable } from "@/components/user/UserTable/UserTable";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { SkeletonLoader } from "@/components/ui/Loading/SkeletonLoader";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { users, isLoading, error, hasUsers } = useUsers(
    currentPage,
    searchTerm
  );
  const pagination = usePagination({
    totalItems: users.length,
    itemsPerPage: 10,
    initialPage: currentPage,
  });

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleViewProfile = (user: any) => {
    navigate(`/user/${user.login.uuid}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) {
    return (
      <div className="home-error">
        <h2>Erro ao carregar usuários</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="home">
      <SearchHeader
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        resultsCount={users.length}
        isLoading={isLoading}
      />

      <div className="home__content">
        <div className="home__mobile">
          {isLoading ? (
            <SkeletonLoader type="card" count={3} />
          ) : hasUsers ? (
            users.map((user) => (
              <UserCard
                key={user.login.uuid}
                user={user}
                onClick={handleViewProfile}
              />
            ))
          ) : (
            <div className="home__empty">
              {searchTerm
                ? "Nenhum usuário encontrado"
                : "Nenhum usuário disponível"}
            </div>
          )}
        </div>

        <div className="home__desktop">
          {isLoading ? (
            <SkeletonLoader type="table" count={5} />
          ) : hasUsers ? (
            <UserTable users={users} onViewProfile={handleViewProfile} />
          ) : (
            <div className="home__empty">
              {searchTerm
                ? "Nenhum usuário encontrado"
                : "Nenhum usuário disponível"}
            </div>
          )}
        </div>

        {hasUsers && !isLoading && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(users.length / 10)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
