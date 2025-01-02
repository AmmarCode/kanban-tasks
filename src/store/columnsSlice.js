import { createSlice } from '@reduxjs/toolkit';

const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    columns: []
  },
  reducers: {
    // Create a new column for a specific board
    addColumn: (state, action) => {
      const { boardId, ...columnData } = action.payload;
      const newColumn = {
        id: Date.now(),
        boardId,
        ...columnData
      };
      state.columns.push(newColumn);
    },
    
    // Update an existing column
    updateColumn: (state, action) => {
      const { id, ...updates } = action.payload;
      const columnIndex = state.columns.findIndex(column => column.id === id);
      if (columnIndex !== -1) {
        state.columns[columnIndex] = { ...state.columns[columnIndex], ...updates };
      }
    },
    
    // Delete a column
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter(column => column.id !== action.payload);
    },
  }
});

export const { 
  addColumn, 
  updateColumn, 
  deleteColumn,
  moveColumnToBoard
} = columnsSlice.actions;

export default columnsSlice.reducer;
