import { useDispatch } from 'react-redux';
import { 
  addTask, 
  updateTask, 
  deleteTask, 
  moveTaskToColumn,
  addSubtask,
  updateSubtask,
  deleteSubtask
} from '../../store/tasksSlice';

export const useTaskService = () => {
  const dispatch = useDispatch();

  return {
    createTask: (taskData) => dispatch(addTask(taskData)),
    updateTask: (taskId, updates) => dispatch(updateTask({ id: taskId, ...updates })),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    moveTask: (taskId, newColumnId) => dispatch(moveTaskToColumn({ taskId, newColumnId })),
    
    createSubtask: (taskId, subtaskData) => dispatch(addSubtask({ taskId, ...subtaskData })),
    updateSubtask: (taskId, subtaskId, updates) => dispatch(updateSubtask({ taskId, subtaskId, ...updates })),
    deleteSubtask: (taskId, subtaskId) => dispatch(deleteSubtask({ taskId, subtaskId }))
  };
};
