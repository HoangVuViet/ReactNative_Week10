import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice/taskSlice'; // Đảm bảo đường dẫn đúng đến file taskSlice.js

const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Kết hợp tasksReducer vào store
  },
});

export default store;