import { User } from "@/types/user.types";
import "./UserCard.scss";

interface UserCardProps {
  user: User;
  onClick?: (user: User) => void;
}

export const UserCard = ({ user, onClick }: UserCardProps) => {
  const handleClick = () => {
    onClick?.(user);
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <div className="user-card__header">
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
          className="user-card__avatar"
        />
        <div className="user-card__info">
          <h3 className="user-card__name">
            {user.name.first} {user.name.last}
          </h3>
          <span className="user-card__title">{user.name.title}</span>
        </div>
      </div>

      <div className="user-card__details">
        <div className="user-card__detail">
          <span className="user-card__label">ID:</span>
          <span className="user-card__value">{user.id.value}</span>
        </div>
        <div className="user-card__detail">
          <span className="user-card__label">Idade:</span>
          <span className="user-card__value">{user.dob.age} anos</span>
        </div>
        <div className="user-card__detail">
          <span className="user-card__label">Data:</span>
          <span className="user-card__value">
            {new Date(user.dob.date).toLocaleDateString("pt-BR")}
          </span>
        </div>
      </div>
    </div>
  );
};
