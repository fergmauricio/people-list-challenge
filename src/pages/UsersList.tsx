import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUsers } from "../hooks/useUsers";
import UserTable from "../components/UserTable";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";
import NoResults from "../components/NoResults";
import type { User } from "../types/user";
import { formatDate } from "../utils/helpers";

const UsersList: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data: users, isLoading, error } = useUsers(page, search);
  const navigate = useNavigate();
  const totalPages = 5;

  if (isLoading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">Erro: {error.message}</div>;

  const filteredUsers =
    users?.filter(
      (u) =>
        u.name.first.toLowerCase().includes(search.toLowerCase()) ||
        u.name.last.toLowerCase().includes(search.toLowerCase()) ||
        u.dob.age.toString().includes(search.toLowerCase())
    ) || [];

  const handleViewProfile = (user: User) => navigate(`/user/${user.id.value}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="users-list"
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Find People
      </h1>
      <SearchInput value={search} onChange={setSearch} />
      {filteredUsers.length === 0 ? (
        <NoResults />
      ) : (
        <>
          <UserTable users={filteredUsers} onViewProfile={handleViewProfile} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </motion.div>
  );
};

export default UsersList;
