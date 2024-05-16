import React, { useState } from 'react';
import { Row, Col, ListGroup, Button, Image, Card, Form, ListGroupItem } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetEquipmentDetailsQuery } from '../slices/equipmentsApiSlice';

import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addCurrency } from '../utils/addCurrency';

const EquipmentPage = () => {
  const { id: equipmentId } = useParams();
  const [qty, setQty] = useState(1);

  const { userInfo } = useSelector(state => state.auth);

  const { data: equipment, isLoading, error } = useGetEquipmentDetailsQuery(equipmentId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = () => {
   // dispatch(addToCart({ ...equipment, qty }));
    navigate('/cart');
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      // Your submit logic here
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
    setQty(1);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <Link to='/' className='btn btn-light my-3'>
            Go Back
          </Link>
          <Meta title={equipment.name} description={equipment.description} />
          <Row>
            <Col md={5}>
              <Image src={equipment.image} alt={equipment.name} fluid />
              <Row className='review d-none d-md-block'>
                <Col>{/* Render review content here */}</Col>
              </Row>
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{equipment.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: {addCurrency(equipment.price)}</ListGroup.Item>
                <ListGroup.Item>
                  <strong>About this item:</strong> {equipment.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{addCurrency(equipment.price)}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>{equipment.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                    </Row>
                  </ListGroup.Item>
                  {equipment.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={e => setQty(Number(e.target.value))}
                          >
                            {Array.from({ length: equipment.countInStock }, (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className='w-100'
                      variant='warning'
                      type='button'
                      disabled={equipment.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className='review d-block d-md-none'>{/* Render review content here */}</Row>
        </>
      )}
    </>
  );
};

export default EquipmentPage;
