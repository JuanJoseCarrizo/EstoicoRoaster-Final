import { useContext } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { UserContext } from "../Context/UserContext";

const UserCard = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div>
                <Spinner animation='border' role='status'>
                    <span>Cargando....</span>
                </Spinner>
            </div>
        )
    }

    return (
        <div>
            <Card>
                <Card.Img variant='top' src='user.picture.large'/>
                <Card.Body>
                    <Card.Title>
                        {user.name.first}{user.name.last}
                    </Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {user.email}<br/>
                        <strong>Ciudad:</strong> {user.location.city}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div> 

    )
}

export default UserCard;