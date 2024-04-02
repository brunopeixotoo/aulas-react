import Home from "../Home";
import Sobre from "../Sobre";
import Contato from "../Contato/contato";
import { Link } from "react-router-dom";

function Erro(params) {
    return(
        <div>
            <h2>ERRO 404 NOT FOUND</h2>
            <Link to='/'>Home</Link><br/>
            <Link to='/sobre'>Sobre</Link><br/>
            <Link to='/contato'>Contato</Link>
        </div>
    );
}

export default Erro;