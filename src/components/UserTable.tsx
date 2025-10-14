import type { User } from "../types/user";
import type { formatDate } from "../utils/helpers";

interface Props {
  users: User[];
  onViewProfile: (user: User) => void;
}

const UserTable: React.FC<Props> = ({ users, onViewProfile }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Title</th>
        <th>Date</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, i) => (
        <tr key={user.id.value} style={{ opacity: i % 2 ? 1 : 0.8 }}>
          <td>{user.id.value.slice(0, 8)}...</td>
          <td>{user.name.first}</td>
          <td>{user.name.last}</td>
          <td>{user.name.title}</td>
          <td>{formatDate(user.dob.date)}</td>
          <td>{user.dob.age}</td>
          <td>
            <button
              onClick={() => onViewProfile(user)}
              style={{ color: "var(--primary)" }}
            >
              View profile
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
