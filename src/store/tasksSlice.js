import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: []
  },
  reducers: {
    // Create a new task within a specific column
    addTask: (state, action) => {
      const { columnId, ...taskData } = action.payload;
      const newTask = {
        id: Date.now(),
        columnId,
        subtasks: [],
        ...taskData
      };
      state.tasks.push(newTask);
    },
    
    // Update an existing task
    updateTask: (state, action) => {
      const { id, ...updates } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updates };
      }
    },
    
    // Delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    
    // Move a task to another column
    moveTaskToColumn: (state, action) => {
      const { taskId, newColumnId } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].columnId = newColumnId;
      }
    },
    
    // Add a subtask to a task
    addSubtask: (state, action) => {
      const { taskId, ...subtaskData } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const newSubtask = {
          id: Date.now(),
          isCompleted: false,
          ...subtaskData
        };
        state.tasks[taskIndex].subtasks.push(newSubtask);
      }
    },
    
    // Update a subtask
    updateSubtask: (state, action) => {
      const { taskId, subtaskId, ...updates } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const subtaskIndex = state.tasks[taskIndex].subtasks.findIndex(
          subtask => subtask.id === subtaskId
        );
        if (subtaskIndex !== -1) {
          state.tasks[taskIndex].subtasks[subtaskIndex] = {
            ...state.tasks[taskIndex].subtasks[subtaskIndex],
            ...updates
          };
        }
      }
    },
    
    // Delete a subtask
    deleteSubtask: (state, action) => {
      const { taskId, subtaskId } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].subtasks = state.tasks[taskIndex].subtasks.filter(
          subtask => subtask.id !== subtaskId
        );
      }
    }
  }
});

export const { 
  addTask, 
  updateTask, 
  deleteTask, 
  moveTaskToColumn,
  addSubtask,
  updateSubtask,
  deleteSubtask
} = tasksSlice.actions;

export default tasksSlice.reducer;
