import { LEADERBOARD_URL } from '../constants'; // Assuming LEADERBOARD_URL is defined in constants.js
import { apiSlice } from './apiSlice';

export const leaderboardApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getWeeklyLeaderboard: builder.query({
      query: () => ({
        url: `${LEADERBOARD_URL}/weekly`
      }),
      providesTags: ['Leaderboard']
    }),
    getMonthlyLeaderboard: builder.query({
      query: () => ({
        url: `${LEADERBOARD_URL}/monthly`
      }),
      providesTags: ['Leaderboard']
    }),
    // Add more endpoints as needed
  })
});

export const {
  useGetWeeklyLeaderboardQuery,
  useGetMonthlyLeaderboardQuery,
  // Add more hooks for other endpoints
} = leaderboardApiSlice;
