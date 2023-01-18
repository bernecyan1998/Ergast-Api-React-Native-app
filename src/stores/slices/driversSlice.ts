import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authFetch from '../../utils/authFetch';
import {concat} from 'lodash';

type params = {
  offset?: number;
  limit?: number;
};

export const fetchDrivers = createAsyncThunk(
  'fetchDrivers',
  async (params: params) => {
    try {
      const {data} = await authFetch.get('/f1/drivers.json', {params});
      return data;
    } catch (e: any) {
      throw new Error(e);
    }
  },
);

export const fetchOneDriver = createAsyncThunk(
  'fetchOneDriver',
  async (driverId: string) => {
    try {
      const {data} = await authFetch.get(`/f1/drivers/${driverId}.json`);
      return data;
    } catch (e: any) {
      throw new Error(e);
    }
  },
);

export const fetchDriverStandings = createAsyncThunk(
  'fetchDriverStandings',
  async ({driverId, params}: any) => {
    try {
      const {data} = await authFetch.get(
        `/f1/drivers/${driverId}/driverStandings.json`,
        {params},
      );
      return data;
    } catch (e: any) {
      throw new Error(e);
    }
  },
);

export const driversSlice = createSlice({
  name: 'driversSlice',
  initialState: {
    fetchDrivers: {
      data: [],
      loading: false,
      error: null,
      total: null,
    },
    fetchOneDriver: {
      data: [],
      loading: false,
      error: null,
    },
    fetchDriverStandings: {
      data: [],
      loading: false,
      error: null,
      total: null,
    },
  } as any,
  reducers: {
    resetData: state => {
      state.fetchDrivers.data = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDrivers.pending, state => {
      state.fetchDrivers.loading = true;
      state.fetchDrivers.error = null;
    });
    builder.addCase(fetchDrivers.fulfilled, (state, {payload}) => {
      state.fetchDrivers.loading = false;
      state.fetchDrivers.data = payload?.MRData.DriverTable.Drivers;
      state.fetchDrivers.total = payload?.MRData.total;
      state.fetchDrivers.error = null;
    });
    builder.addCase(fetchDrivers.rejected, (state, action) => {
      state.fetchDrivers.loading = false;
      state.fetchDrivers.data = null;
      state.fetchDrivers.error = action.payload;
    });
    builder.addCase(fetchOneDriver.pending, state => {
      state.fetchOneDriver.loading = true;
      state.fetchOneDriver.error = null;
    });
    builder.addCase(fetchOneDriver.fulfilled, (state, {payload}) => {
      state.fetchOneDriver.loading = false;
      state.fetchOneDriver.data = payload?.MRData.DriverTable.Drivers[0];
      state.fetchOneDriver.error = null;
    });
    builder.addCase(fetchOneDriver.rejected, (state, action) => {
      state.fetchOneDriver.loading = false;
      state.fetchOneDriver.data = null;
      state.fetchOneDriver.error = action.payload;
    });
    builder.addCase(fetchDriverStandings.pending, state => {
      state.fetchDriverStandings.loading = true;
      state.fetchDriverStandings.error = null;
    });
    builder.addCase(fetchDriverStandings.fulfilled, (state, {payload}) => {
      state.fetchDriverStandings.loading = false;
      state.fetchDriverStandings.data =
        payload?.MRData.StandingsTable.StandingsLists;
      state.fetchDriverStandings.error = null;
    });
    builder.addCase(fetchDriverStandings.rejected, (state, action) => {
      state.fetchDriverStandings.loading = false;
      state.fetchDriverStandings.data = null;
      state.fetchDriverStandings.error = action.payload;
    });
  },
});

export default driversSlice.reducer;
