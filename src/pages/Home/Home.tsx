import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUsers } from "@/hooks/useUsers";
import { SearchHeader } from "@/components/user/SearchHeader/SearchHeader";
import { UserCard } from "@/components/user/UserCard/UserCard";
import { UserTable } from "@/components/user/UserTable/UserTable";
import { Pagination } from "@/components/ui/Pagination/Pagination";
import { SkeletonLoader } from "@/components/ui/Loading/SkeletonLoader";
import { EmptyState } from "@/components/ui/EmptyState/EmptyState";
import { User } from "@/types/user.types";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const {
    users,
    isLoading,
    error,
    hasUsers,
    isSearching,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredUsers,
    totalUsers,
  } = useUsers();

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchTerm(value);
      setCurrentPage(1);
    },
    [setSearchTerm, setCurrentPage]
  );

  const handleViewProfile = useCallback(
    (user: User) => {
      navigate(`/user/${user.login.uuid}`);
    },
    [navigate]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setCurrentPage]
  );

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="home"
      >
        <div className="home-error">
          <h2>Erro ao carregar usuários</h2>
          <p>{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Tentar novamente
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <SearchHeader
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        resultsCount={isSearching ? filteredUsers.length : totalUsers}
        isLoading={isLoading}
        isSearching={isSearching}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <div className="home__content">
        <div className="home__mobile">
          {isLoading ? (
            <SkeletonLoader type="card" count={3} />
          ) : hasUsers ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {users.map((user) => (
                <motion.div
                  key={user.login.uuid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <UserCard user={user} onClick={handleViewProfile} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <EmptyState
                title={
                  searchTerm
                    ? "Nenhum resultado encontrado"
                    : "Nenhum usuário disponível"
                }
                description={
                  searchTerm
                    ? "Tente novamente utilizando outro termo"
                    : "Recarregue a página ou tente novamente mais tarde"
                }
                variant="search"
              />
            </motion.div>
          )}
        </div>

        <div className="home__desktop">
          {isLoading ? (
            <SkeletonLoader type="table" count={5} />
          ) : hasUsers ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <UserTable users={users} onViewProfile={handleViewProfile} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <EmptyState
                title={
                  searchTerm
                    ? "Nenhum resultado encontrado"
                    : "Nenhum usuário disponível"
                }
                description={
                  searchTerm
                    ? "Tente novamente utilizando outro termo"
                    : "Recarregue a página ou tente novamente mais tarde"
                }
                variant="search"
              />
            </motion.div>
          )}
        </div>

        {hasUsers && !isLoading && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
