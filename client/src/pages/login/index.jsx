import React from 'react';
import LoginFormComponent from '../../components/form/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (credentials) => {
        console.log('Login credentials:', credentials);

        fetch('http://localhost:3080/api/v2/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                if (data.success) {
                    console.log('Login successful:', data);
                    alert('Login successful');
                    navigate('/dashboard', { replace: true });
                } else {
                    console.error('Login failed:', data.error);
                    alert('Login failed: ' + data.error);
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
                alert('Error during login: ' + error.message);
            });
    };

    return (
        <div className="flex w-full h-[100vh] bg-[#2c2c2c] justify-center items-center">
            <LoginFormComponent onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
