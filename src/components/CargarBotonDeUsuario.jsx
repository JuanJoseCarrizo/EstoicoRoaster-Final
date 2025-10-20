import { useContext} from 'react';
import { Card, Spinner,Button} from 'react-bootstrap';
import { UserContext } from "../Context/UserContext";

const CargarBotonDeUsuario =()=>{
    const{fetchRandomUser}=useContext(UserContext);

    return(
        <div className="d-flex justify-content-center my-3">
            <Button variant='primary' onClick={fetchRandomUser}>
                Cargar Nuevo Usuario
            </Button>
        </div>

    )
}

export default CargarBotonDeUsuario;