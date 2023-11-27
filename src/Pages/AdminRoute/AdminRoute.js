import React from 'react';
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';

import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';




const AdminRoute = ({children}) => {
    // const { children,loading,user,admin}=props;

    const { loading, user, admin } = useAuth();
    
    if (loading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }
    
    else if(!loading){
        return (

            user?.email&&admin? <>{children}</>: <Navigate to="/login" />
        );
    }
    
};

export default AdminRoute;