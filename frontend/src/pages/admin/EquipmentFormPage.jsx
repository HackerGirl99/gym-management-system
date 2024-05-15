import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  useCreateEquipmentMutation,
  useGetEquipmentDetailsQuery,
  useUpdateEquipmentMutation,
  useUploadEquipmentImageMutation
} from '../../slices/equipmentsApiSlice';
import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Meta from '../../components/Meta';

const EquipmentFormPage = () => {
  const { id: equipmentId } = useParams();

  const isUpdateMode = !!equipmentId;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);

  const getEquipmentQueryResult = useGetEquipmentDetailsQuery(equipmentId);

  const {
    data: equipment,
    isLoading,
    error
  } = isUpdateMode
    ? getEquipmentQueryResult
    : { data: null, isLoading: false, error: null };

  const [createEquipment, { isLoading: isCreateEquipmentLoading }] =
    useCreateEquipmentMutation();
  const [updateEquipment, { isLoading: isUpdateEquipmentLoading }] =
    useUpdateEquipmentMutation();
  const [uploadEquipmentImage, { isLoading: isUploadImageLoading }] =
    useUploadEquipmentImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isUpdateMode && equipment) {
      setName(equipment.name);
      setImage(equipment.image);
      setDescription(equipment.description);
      setBrand(equipment.brand);
      setCategory(equipment.category);
      setPrice(equipment.price);
      setCountInStock(equipment.countInStock);
    }
  }, [isUpdateMode, equipment]);

  const uploadFileHandler = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadEquipmentImage(formData).unwrap();
      setImage(res.imageUrl);
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const equipmentData = {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock
      };
      if (isUpdateMode) {
        const { data } = await updateEquipment({
          equipmentId,
          ...equipmentData
        });
        toast.success(data.message);
      } else {
        const { data } = await createEquipment(equipmentData);

        toast.success(data.message);
      }
      navigate('/admin/equipment-list');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
    <Meta title={'Equipment Form'} />
      <Link to='/admin/equipment-list' className='btn btn-light my-3'>
        Go Back
      </Link>
      {(isUpdateEquipmentLoading ||
        isCreateEquipmentLoading ||
        isUploadImageLoading) && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <FormContainer>
          <Meta title={'Equipment Form'} />
          <h1 className=" text-5xl leading-normal font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">{isUpdateMode ? 'Update Equipment' : 'Create Equipment'}</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={e => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='file'
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={e => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={e => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={e => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type='submit'
              variant='primary' className="mt-4 mb-3"
              style={{ marginTop: '1rem' }}
            >
              {isUpdateMode ? 'Update Equipment' : 'Create Equipment'}
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default EquipmentFormPage;
