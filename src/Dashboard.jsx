// Dashboard.js
import { useAuth } from './paginas/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // limpia token y localStorage
    navigate('/login'); // redirige a login
  };

  return (
    <div className="container mt-5">
      <h2>Bienvenido!!</h2>
      <p>Usted ha ingresado como administrador, por lo que vera las opciones de un admin.</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;