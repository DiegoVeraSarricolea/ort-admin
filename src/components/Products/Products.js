import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
    {id: 1, name: "Delantal Ortopédico", description: "Descripción del delantal", price: '$12000'},
    {id: 2, name: "Bota Ortopédica", description: "Descripción de la Bota", price: '$18000'},
]

const Products = () => {
    return (<main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>)
    
}

export default Products;