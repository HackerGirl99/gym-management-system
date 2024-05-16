import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { FaStore, FaUsers, FaShoppingBag} from 'react-icons/fa';

import { useGetProductsQuery } from '../../slices/equipmentsApiSlice';
import { useGetUsersQuery } from '../../slices/usersApiSlice';


import Loader from '../../components/Loader';
import Meta from '../../components/Meta';

import DashboardCard from '../../components/Admin/DashboardCard';

const Dashboard = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery({});
  //const { data: orders, isLoading: isOrdersLoading } = useGetOrdersQuery({});

  return (
    <>
      {isLoading || isUsersLoading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Meta title={'Admin Dashboard'} />
            <Col md={6} lg={3} className='position-relative'>
              <DashboardCard
                title={'Equipments'}
                icon={<FaStore size={40} />}
                value={data?.total}
                bgColor={'bg-info'}
              />
            </Col>
            <Col md={6} lg={3} className='position-relative'>
              <DashboardCard
                title={'Users'}
                icon={<FaUsers size={40} />}
                value={users?.length}
                bgColor={'bg-danger'}
              />
            </Col>
            {/* <Col md={6} lg={3} className='position-relative'>
              <DashboardCard
                title={'Bookings'}
                icon={<FaShoppingBag size={40} />}
                value={orders?.length}
                bgColor={'bg-warning'}
              />
            </Col> */}
 {/* <Col md={6} lg={3} className='position-relative'>
              <DashboardCard
                title={'Revenue'}
                icon={<FaWallet size={40} />}
                value={addCurrency(
                  orders?.reduce((acc, item) => acc + item.totalPrice, 0)
                )}
                bgColor={'bg-success'}
              />
            </Col> */}
          </Row>

        </>
      )}
    </>
  );
};

export default Dashboard;
