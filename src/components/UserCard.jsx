import { useContext } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { UserContext } from "../Context/UserContext";

const UserCard = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div>
                <Spinner animation='border' role='status'>
                    <span className="visually-hidden">Cargando....</span>
                </Spinner>
            </div>
        )
    }

    return (
        <div>
            <Card>
                <Card.Img
                    className="mx-auto d-block my-2" 
                    style={{ width: '30%', height: 'auto', objectFit: 'cover' }}
                    variant="top"
                    src={user.picture.large}
                />
                <Card.Body>
                    <Card.Title className='text-center'>
                        {user.name.first} {user.name.last}
                    </Card.Title>
                    <Card.Text className='text-center'>
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Ciudad:</strong> {user.location.city}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default UserCard;