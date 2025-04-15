import { Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import "./ViewOrder.css";

//stripe.js
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';
const stripePromise = loadStripe('pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt');


const ViewOrder = ({ order }) => {


    const { img, name, engine, fuelType, gear, gearType, price, } = order.productInfo;
    const orderId = order._id;
    const [orderDetails,setOrderDetails]=useState({});

    //modal handler
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setOrderDetails(order);
  }
  const handleClose = () => setOpen(false);

//   modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    
    const handleDeletingOrder = () => {
        const confirmDeleting = window.confirm("Are You Sure Want To Delete ?");
        if (confirmDeleting) {
            fetch(`https://sedan-mela-2-server.onrender.com/purchasedSedan/All/${orderId}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount === 1) {
                        alert("Order Deleted Successfully");
                        window.location.reload()
                    }
                })
        }

    }
    return (
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{width:"70%",margin: 'auto',}}>
            <Card sx={{ maxWidth: 345,height:650, padding: "15px" }}>
                <Box id="sedan-img-container">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        id="sedan-img"
                        image={img}
                    />
                    <Box id="sedan-price">
                        <Typography sx={{ color: "white", fontWeight: 500 }}>
                            &#2547; {price} Lakh
                        </Typography>
                    </Box>
                </Box>
                <CardContent sx={{ textAlign: "left" }}>
                    <Typography sx={{ textAlign: "center", fontWeight: 600, color: "#130f40" }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography className="sedan-description">
                        Engine:{engine}
                    </Typography>
                    <Typography className="sedan-description">
                        Tranmission(Gear):{gear}/{gearType}
                    </Typography>
                    <Typography className="sedan-description">
                        Fuel Type:{fuelType}
                    </Typography>

                    <Typography className="sedan-description">
                        Fuel Type:{fuelType}
                    </Typography>
                    <Typography className="sedan-description">
                        Status:{order.status}
                    </Typography>
                </CardContent>
                {
                    order?.paymentStatus==='pending'&&
                    <button className="btn-soft-red" onClick={handleDeletingOrder} style={{marginBottom:"10px"}}>Delete</button>
                }
               
                <CardActions>
                    {
                        (order?.paymentStatus==='pending'||order.paymentStatus==='undefined')?
                        <Button  variant="contained" style={{marginTop:"20px",margin:"auto"}} onClick={handleOpen}>Pay</Button>
                        
                        :
                        <Button variant="contained" style={{margin:"auto"}} disabled>Paid</Button>
                    }
                    

                </CardActions>
                <CardActions>
                    
                    

                </CardActions>
            </Card>
            </div>
            

            {/* ======modal start====== */}
            <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={modalStyle}>
            <Elements stripe={stripePromise}>
                <PaymentForm amount={order.productInfo.price} handleClose={handleClose} order={order}/>
            </Elements>
        </Box>
        
      </Modal>
            </div>
        {/* ======Modal End====== */}
        </Grid>
    );
};

export default ViewOrder;