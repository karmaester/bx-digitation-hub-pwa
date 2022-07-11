import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOsDetails = createAsyncThunk('app/fetchOsDetails', async ({oscode}: any) => {
  const response = await fetch(`http://localhost:3000/api/service-orders/${oscode}`);
  const osDetails = await response.json();
  console.log({osDetails})
  return osDetails;
});

export const fetchSaveData = createAsyncThunk('app/fetchSaveData', async ({data}: any) => {
  const response = await fetch('http://localhost:3000/api/service-orders', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  console.log(await response.json());
});
