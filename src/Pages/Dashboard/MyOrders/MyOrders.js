import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import ViewOrder from '../ViewOrder/ViewOrder';



const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`https://sedan-mela-2-server.onrender.com/purchasedSedan?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    return (
        <div>
            <h1>My Orders</h1>
            <Grid container spacing={2}>
                {
                    orders.map(order => <ViewOrder
                        key={order._id}
                        order={order}
                    >
                    </ViewOrder>)
                }
            </Grid>
            {/* <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements> */}
        </div>
    );
};

export default MyOrders;