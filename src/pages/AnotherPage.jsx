import { useNavigate } from "react-router-dom";

const AnotherPage = () => {
    const history = useNavigate();
    return (
      <div>
        <h1>Outra Página</h1>
        <button onClick={() => history('/')}>Ir para a principal</button>
      </div>
    )
  }

export default AnotherPage;