import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { useGetEquipmentsQuery } from '../slices/equipmentsApiSlice';
import { useSelector } from 'react-redux';

import Equipment from '../components/Equipment';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import EquipmentCarousel from '../components/EquipmentCarousel';
import ServerError from '../components/ServerError';
import Meta from '../components/Meta';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const [skip, setSkip] = useState(0);
  const { search } = useSelector(state => state.search);

  const { data, isLoading, error } = useGetEquipmentsQuery({
    limit,
    skip,
    search
  });

  const navigate = useNavigate(); // Utilize useNavigate hook

  useEffect(() => {
    if (data) {
      setLimit(4);
      setSkip((currentPage - 1) * limit);
      setTotal(data.total);
      setTotalPage(Math.ceil(total / limit));
    }
  }, [currentPage, data, limit, total, search]);

  const pageHandler = pageNum => {
    if (pageNum >= 1 && pageNum <= totalPage && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  const handleBookNowClick = () => {
    // Handle potential logic or redirects related to user authentication
    navigate('/login'); // Navigate to login page on button click
  };

  return (
    <>
      <div className="text-center mb-8 flex flex-col items-center justify-center h-70vh">
        <div className="text-6xl font-bold mt-20">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Welcome to UOV GYM
          </span>
        </div>
        <h2 className="text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500">
          Stay Fit, Stay Healthy...!
        </h2>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
           {!search && <EquipmentCarousel />}
          <Meta /> 
          <h1>Latest Equipment</h1>

          <Row>
            {data.equipments.map(equipment => (
              <Col key={equipment.id} sm={12} md={6} lg={4} xl={3} className="text-center mb-4">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
                />
                <div>{equipment.name}</div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                  onClick={handleBookNowClick} // Bind handleBookNowClick to button click
                >
                  Book Now
                </button>
              </Col>
            ))}
          </Row>

          {totalPage > 1 && !search && (
            <Paginate
              currentPage={currentPage}
              totalPage={totalPage}
              pageHandler={pageHandler}
            />
          )}
        </>
      )}


    </>
  );
};

export default HomePage;
