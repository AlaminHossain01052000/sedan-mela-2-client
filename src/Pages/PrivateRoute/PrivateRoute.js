import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   
    const { user, loading } = useAuth();
   

    if (loading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }
    return (

        user.email ? <>{children}</> : <Navigate to="/login" />
    );
   
};

export default PrivateRoute;