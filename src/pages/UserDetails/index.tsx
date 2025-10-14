import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <p>ID: {id}</p>
      <p>Página UserDetails - Em construção</p>
    </div>
  );
};

export default UserDetails;
