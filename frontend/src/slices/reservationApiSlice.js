import { RESERVATION_URL } from '../constants'; // Assuming RESERVATION_URL is defined in constants.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationApiSlice = createApi({
  reducerPath: 'reservationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    createReservation: builder.mutation({
      query: (reservationData) => ({
        url: '/reservations',
        method: 'POST',
        body: reservationData,
      }),
      invalidatesTags: ['Reservation']
    }),
    getAllReservations: builder.query({
      query: () => ({
        url: RESERVATION_URL
      }),
      providesTags: ['Reservation']
    }),
    getReservationById: builder.query({
      query: (reservationId) => ({
        url: `${RESERVATION_URL}/${reservationId}`
      }),
      providesTags: ['Reservation']
    }),
    updateReservation: builder.mutation({
      query: ({ reservationId, ...reservationData }) => ({
        url: `${RESERVATION_URL}/${reservationId}`,
        method: 'PUT',
        body: { ...reservationData }
      }),
      invalidatesTags: ['Reservation']
    }),
    deleteReservation: builder.mutation({
      query: (reservationId) => ({
        url: `${RESERVATION_URL}/${reservationId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Reservation']
    }),
    // Add more endpoints as needed
  }),
});

export const {
  useCreateReservationMutation,
  useGetAllReservationsQuery,
  useGetReservationByIdQuery,
  useUpdateReservationMutation,
  useDeleteReservationMutation,
  useGetReservationDetailsQuery,
  usePayReservationMutation,
  useUpdateDeliverMutation,
  // Add more hooks for other endpoints
} = reservationApiSlice;
