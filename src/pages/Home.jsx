import { useNavigate } from "react-router-dom";

const Home = () => {
    const history = useNavigate();
    return (
      <div >
        <h1>
          Página Inicial
        </h1>
        <button onClick={() => history('/outra-pagina')}>Ir para outra pagina</button>
      </div>
    )
  }

export default Home;
