import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CardItem from './CartItem/CartItem'

import useStyles from './styles'

const Cart = ({ cart }) => {

    const classes = useStyles();


    const EmptyCart = () => (
        <Typography variant="subtitle1"> No tienes productos en tu carro de compras, 
            <Link to="/" className={classes.link}>empieza a añadir algo!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CardItem item={item}/>
                            
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Vaciar Carro</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Ir a Pagar</Button>
                </div>

            </div>
        </>
    );
    
    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Tu Carro de Compras
            </Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
