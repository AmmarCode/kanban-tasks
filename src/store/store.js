import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import boardsReducer from './boardsSlice';
import columnsReducer from './columnsSlice';
import tasksReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    boards: boardsReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
  },
});
