import React from 'react'
import {CardContent,Box } from '@material-ui/core'
import useStyle from './Styles'

const Product = ({product}) => {
    const classes =useStyle();
    return (
        
        <Box className={classes.root}  border={1}>
            <CardContent className={classes.CardContent} >
                <div className='boxs'>
                    <Box  variant='h6' >{product.SKU}</Box>
                    <Box variant='h6'>{product.name}</Box>
                    <Box variant='h6'>{product.price}</Box>
                    <Box variant='h6'>{product.discreption}</Box>
                </div>
            </CardContent>
        
        </Box>
    )
}

export default Product

