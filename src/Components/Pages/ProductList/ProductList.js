import React from 'react';
import {Box,Grid} from '@material-ui/core';
import Product from './Product/Product'
import useStyle from './Styles'
const products=[{id:1,SKU:'JVC200123',name:'Acme Disc',price:'1.00$',discreption:'Size:700MB'},
                {id:2,SKU:'JVC200123',name:'Acme Disc',price:'1.00$',discreption:'Size:700MB'},
                {id:3,SKU:'JVC200123',name:'Acme Disc',price:'1.00$',discreption:'Size:700MB'},
                {id:4,SKU:'JVC200123',name:'Acme Disc',price:'1.00$',discreption:'Size:700MB'},
                {id:5,SKU:'GGWP0007',name:'War and Peace',price:'20.00$',discreption:'Weight:2KG'},
                {id:6,SKU:'GGWP0007',name:'War and Peace',price:'20.00$',discreption:'Weight:2KG'},
                {id:7,SKU:'GGWP0007',name:'War and Peace',price:'20.00$',discreption:'Weight:2KG'},
                {id:8,SKU:'GGWP0007',name:'War and Peace',price:'20.00$',discreption:'Weight:2KG'},
                {id:9,SKU:'TR120555',name:'Chair',price:'40.00$',discreption:'Dimension:24*45*15'},
                {id:10,SKU:'TR120555',name:'Chair',price:'40.00$',discreption:'Dimension:24*45*15'},
                {id:11,SKU:'TR120555',name:'Chair',price:'40.00$',discreption:'Dimension:24*45*15'},
                {id:12,SKU:'TR120555',name:'Chair',price:'40.00$',discreption:'Dimension:24*45*15'}
               ]
const ProductList = () => {
    const classes=useStyle()
    return (
        <main className={classes.container}>
            <Grid margin ='50' container justify='center'spacing={4}>
                {products.map((product)=>(<Box  item key={product.id}>
                    <Product product={product}/>
                </Box>))}

            </Grid>
            
        </main>
    )
}

export default ProductList
