
import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { toast } from 'react-toastify';
import { FaRupeeSign, FaTrash, FaEdit } from 'react-icons/fa';
import { useGetEquipmentsQuery } from '../../slices/equipmentsApiSlice';
import { useDeleteEquipmentMutation } from '../../slices/equipmentsApiSlice';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Message from '../../components/Message';
import Meta from '../../components/Meta';
import { addCurrency } from '../../utils/addCurrency';

const EquipmentListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const [skip, setSkip] = useState(0);

  const { data, isLoading, error } = useGetEquipmentsQuery({
    limit,
    skip
  });

  const [deleteEquipment, { isLoading: isDeleteEquipmentLoading }] =
    useDeleteEquipmentMutation();

  useEffect(() => {
    if (data) {
      setLimit(8);
      setSkip((currentPage - 1) * limit);
      setTotal(data.total);
      setTotalPage(Math.ceil(total / limit));
    }
  }, [currentPage, data, limit, total]);

  const deleteHandler = async equipmentId => {
    try {
      const { data } = await deleteEquipment(equipmentId);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const pageHandler = pageNum => {
    if (pageNum >= 1 && pageNum <= totalPage && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <Meta title={'Equipment List'} />
          <h1 className="mt-4 mb-3 text-5xl leading-normal font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">Equipment</h1>
        </Col>
        <Col className='text-end'>
          <LinkContainer to={'/admin/equipment/create'}>
            <Button className=' my-3' variant='warning'>Add Equipment</Button>
          </LinkContainer>
        </Col>
      </Row>
      {isDeleteEquipmentLoading && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped hover bordered responsive size='sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.equipments.map(equipment => (
              <tr key={equipment._id}>
                <td>{equipment._id}</td>
                <td>{equipment.name}</td>
                <td>{addCurrency(equipment.price)}</td>
                <td>{equipment.category}</td>
                <td>{equipment.brand}</td>
                <td>
                  <LinkContainer to={`/admin/equipment/update/${equipment._id}`}>
                    <Button className='btn-sm' variant='light'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>

                  <Button
                    className='btn-sm'
                    variant='light'
                    onClick={() => deleteHandler(equipment._id)}
                  >
                    <FaTrash style={{ color: 'red' }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {totalPage > 1 && (
        <Paginate
          currentPage={currentPage}
          totalPage={totalPage}
          pageHandler={pageHandler}
        />
      )}
    </>
  );
};

export default EquipmentListPage;
