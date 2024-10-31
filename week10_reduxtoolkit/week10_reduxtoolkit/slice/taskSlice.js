
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const API_URL = 'https://67235765493fac3cf24a8c5b.mockapi.io/Tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Không thể lấy dữ liệu');
  }
  const data = await response.json();
  return data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export const { deleteTask, addTask } = tasksSlice.actions;
export default tasksSlice.reducer;