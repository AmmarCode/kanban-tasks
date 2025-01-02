import { createSlice } from '@reduxjs/toolkit';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: [],
    activeBoard: null
  },
  reducers: {
    // Create a new board
    addBoard: (state, action) => {
      const newBoard = {
        id: Date.now(),
        ...action.payload
      };
      state.boards.push(newBoard);
      state.activeBoard = newBoard.id;
    },
    
    // Update an existing board
    updateBoard: (state, action) => {
      const { id, ...updates } = action.payload;
      const boardIndex = state.boards.findIndex(board => board.id === id);
      if (boardIndex !== -1) {
        state.boards[boardIndex] = { ...state.boards[boardIndex], ...updates };
      }
    },
    
    // Delete a board
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter(board => board.id !== action.payload);
      state.activeBoard = state.boards.length > 0 ? state.boards[0].id : null;
    },
    
    // Set active board
    setActiveBoard: (state, action) => {
      state.activeBoard = action.payload;
    }
  }
});

// Selector to get the active board details
export const selectActiveBoard = (state) => 
  state.boards.boards.find(board => board.id === state.boards.activeBoard);

export const { 
  addBoard, 
  updateBoard, 
  deleteBoard, 
  setActiveBoard 
} = boardsSlice.actions;

export default boardsSlice.reducer;
