import { User } from "@/types/user.types";
import { Button } from "@/components/ui/Button/Button";
import "./UserTable.scss";

interface UserTableProps {
  users: User[];
  onViewProfile: (user: User) => void;
  isLoading?: boolean;
}

export const UserTable = ({
  users,
  onViewProfile,
  isLoading = false,
}: UserTableProps) => {
  if (isLoading) {
    return (
      <div className="user-table-loading">
        <div>Carregando usuários...</div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="user-table-empty">
        <div>Nenhum usuário encontrado</div>
      </div>
    );
  }

  return (
    <div className="user-table">
      <table className="user-table__table">
        <thead className="user-table__header">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Título</th>
            <th>Data</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="user-table__body">
          {users.map((user) => (
            <tr key={user.login.uuid} className="user-table__row">
              <td className="user-table__cell user-table__cell--id">
                {user.id.value}
              </td>
              <td className="user-table__cell user-table__cell--name">
                {user.name.first}
              </td>
              <td className="user-table__cell user-table__cell--name">
                {user.name.last}
              </td>
              <td className="user-table__cell user-table__cell--title">
                {user.name.title}
              </td>
              <td className="user-table__cell user-table__cell--date">
                {new Date(user.dob.date).toLocaleDateString("pt-BR")}
              </td>
              <td className="user-table__cell user-table__cell--age">
                {user.dob.age}
              </td>
              <td className="user-table__cell user-table__cell--actions">
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => onViewProfile(user)}
                >
                  Ver perfil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
