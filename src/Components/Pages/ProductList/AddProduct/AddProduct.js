import React from 'react'
import{Form} from 'react-hook-form'

const AddProduct = () => {
  return (
    
   
       <form>
       <div class="form-group">
                <label for="sku">SKU</label>
                <input type="text" class="form-control" name="sku" required placeholder='#sku' />
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" required placeholder='#name'/>
            </div>
            <div class="form-group">
                <label for="price">Price($)</label>
                <input type="number"  class="form-control" name="price" required placeholder='#price'/>
            </div>
            <div>
              <label>type switcher</label>
              <select>
                <option id='#DVD' >DVD  </option>
                <option id='#Furniture'>Furniture</option>
                <option id='#Book'>Book</option>
              </select>
            </div>
       </form>
    
  )
}

export default AddProduct

