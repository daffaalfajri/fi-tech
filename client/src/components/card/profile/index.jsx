import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from '@material-tailwind/react';

const ProfileCard = ({ role }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3080/api/v2/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src="https://via.placeholder.com/150" // Placeholder image as avatar is not in response
                    alt={`${user.name}'s profile`}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">

                    {user.role}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {user.name}
                </Typography>
                <Typography variant="body2" color="gray" className="mb-2">
                    {user.contact}
                </Typography>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;
