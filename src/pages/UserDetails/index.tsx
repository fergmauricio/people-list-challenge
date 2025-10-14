import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/userService";
import { UserTabs } from "@/components/user/UserTabs/UserTabs";
import { Button } from "@/components/ui/Button/Button";
import { SkeletonLoader } from "@/components/ui/Loading/SkeletonLoader";
import "./UserDetails.scss";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => {
      return userService
        .fetchUsers({ page: 1 })
        .then((users) => users.find((u) => u.login.uuid === id));
    },
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="user-details">
        <div className="user-details__header">
          <Button variant="ghost" onClick={handleBack}>
            ← Back
          </Button>
        </div>
        <div className="user-details__content">
          <SkeletonLoader type="card" count={1} />
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="user-details">
        <div className="user-details__header">
          <Button variant="ghost" onClick={handleBack}>
            ← Back
          </Button>
        </div>
        <div className="user-details__error">
          <h2>Usuário não encontrado</h2>
          <p>O usuário solicitado não existe ou não pôde ser carregado.</p>
          <Button onClick={handleBack}>Voltar para lista</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-details">
      <div className="user-details__header">
        <Button variant="ghost" onClick={handleBack}>
          ← Back
        </Button>
      </div>

      <div className="user-details__profile">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="user-details__avatar"
        />
        <div className="user-details__info">
          <h1 className="user-details__name">
            {user.name.first} {user.name.last}
          </h1>
          <span className="user-details__title">{user.name.title}</span>
        </div>
      </div>

      <div className="user-details__tabs">
        <UserTabs user={user} />
      </div>
    </div>
  );
};

export default UserDetails;
