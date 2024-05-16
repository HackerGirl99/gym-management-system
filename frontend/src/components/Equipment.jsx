import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';


const Equipment = ({ equipment }) => { // Changed component name to "Equipment" and props name to "equipment"
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const addToCartHandler = () => {
  //   // dispatch(addToCart({ ...equipment, qty })); 
  //   navigate('/cart');
  // };
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link
        to={`/equipment/${equipment._id}`} // Modified route path to "/equipment"
        style={{ textDecoration: 'none' }}
        className='text-dark'
      >
        <Card.Img
          variant='top'
          src={equipment.image}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title as='div' className='equipment-title'> 
            <strong>{equipment.name}</strong>
          </Card.Title>

          <Card.Text as='div' className='mb-3'>
          
          </Card.Text>
          <Card.Text as='h3'>{addCurrency(equipment.price)}</Card.Text>
        </Card.Body>
      </Link>
      <Button
        variant='warning'
        type='button'
        disabled={equipment.countInStock === 0} // Modified variable name to "equipment"
        //onClick={addToCartHandler}
      >
        Add To Cart
      </Button>
    </Card>
  );
};

export default Equipment;
