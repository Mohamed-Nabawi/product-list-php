import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddProduct from './AddProduct/AddProduct'


const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      
    },
    buttons:{
        textAlign:'right'
    },
   title:{
display:'block',
paddingTop:'0'
   }
    
  }),

)

export default function Header() {
  const classes = useStyles();

  return (
    <>
        <h3 className={classes.title}>product list</h3>
      <div className={classes.buttons}>
        <Button variant="contained" className={classes.margin}  onClick={AddProduct}>
          Add
        </Button>
        <Button variant="contained"  id='delete-product-btn'className={classes.margin}>
          Mass Delete
        </Button>
        
      </div>
        
    </>
  );
}