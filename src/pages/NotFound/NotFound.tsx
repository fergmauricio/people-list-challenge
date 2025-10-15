import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button/Button";
import { useTheme } from "@/hooks/useTheme";

import "./NotFound.scss";

const NotFound = () => {
  const { theme } = useTheme();

  //console.log("🎯 NotFound - Tema atual:", theme); // ← DEBUG

  return (
    <div className="not-found">
      <div className="not-found__content">
        <div className="not-found__illustration">404</div>
        <h1 className="not-found__title">Página não encontrada</h1>
        <p className="not-found__description">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button variant="primary" size="large">
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
