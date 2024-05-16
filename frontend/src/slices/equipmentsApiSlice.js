import { EQUIPMENT_URL, UPLOAD_URL } from '../constants';
import { LEADERBOARD_URL } from '../constants'; 
import { apiSlice } from './apiSlice';

// Change the constant name to avoid redeclaration
export const leaderboardApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Your existing endpoints...
    getWeeklyLeaderboard: builder.query({
      query: () => ({
        url: `${LEADERBOARD_URL}/weekly`
      }),
      providesTags: ['Leaderboard']
    }),
  })
});


export const equipmentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getEquipment: builder.query({
      query: ({ limit, skip, search }) => ({
        url: EQUIPMENT_URL,
        params: { limit, skip, search }
      }),
      providesTags: ['Equipment']
    }),
    getTopEquipment: builder.query({
      query: () => ({
        url: `${EQUIPMENT_URL}/top`
      }),
      providesTags: ['Equipment']
    }),
    getEquipmentDetails: builder.query({
      query: equipmentId => ({
        url: `${EQUIPMENT_URL}/${equipmentId}`
      }),
      providesTags: ['Equipment']
    }),
    createEquipment: builder.mutation({
      query: equipmentData => ({
        url: EQUIPMENT_URL,
        method: 'POST',
        body: equipmentData
      }),
      invalidatesTags: ['Equipment']
    }),
    updateEquipment: builder.mutation({
      query: ({ equipmentId, ...equipmentData }) => ({
        url: `${EQUIPMENT_URL}/${equipmentId}`,
        method: 'PUT',
        body: { ...equipmentData }
      }),
      invalidatesTags: ['Equipment']
    }),
    deleteEquipment: builder.mutation({
      query: equipmentId => ({
        url: `${EQUIPMENT_URL}/${equipmentId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Equipment']
    }),
    uploadEquipmentImage: builder.mutation({
      query: data => ({
        url: UPLOAD_URL,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Equipment']
    }),
    createEquipmentReview: builder.mutation({
      query: ({ equipmentId, ...reviewData }) => ({
        url: `${EQUIPMENT_URL}/reviews/${equipmentId}`,
        method: 'POST',
        body: { ...reviewData }
      }),
      invalidatesTags: ['Equipment']
    }),
    getProducts: builder.query({
      query: ({ limit, skip, search }) => ({
        url: EQUIPMENT_URL,
        params: { limit, skip, search }
      }),
      providesTags: ['Products']
    }),
    getTopEquipments: builder.query({ // Corrected name to getTopEquipments
      query: () => ({
        url: `${EQUIPMENT_URL}/top`
      }),
      providesTags: ['TopEquipments'] // Changed tag name to TopEquipments
    }),
    getEquipments: builder.query({ // Corrected name to getEquipments
      query: ({ limit, skip, search }) => ({
        url: EQUIPMENT_URL,
        params: { limit, skip, search }
      }),
      providesTags: ['Equipments'] // Changed tag name to Equipments
    }),
  })
});

export const {
  useGetEquipmentQuery,
  useGetEquipmentDetailsQuery,
  useCreateEquipmentMutation,
  useDeleteEquipmentMutation,
  useUploadEquipmentImageMutation,
  useUpdateEquipmentMutation,
  useCreateEquipmentReviewMutation,
  useGetTopEquipmentQuery,
  useGetProductsQuery,
  useGetTopEquipmentsQuery, // Exported useGetTopEquipmentsQuery
  useGetEquipmentsQuery,
  useGetWeeklyLeaderboardQuery,
  // Exported useGetEquipmentsQuery
} = equipmentApiSlice;
