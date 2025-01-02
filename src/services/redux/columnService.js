import { useDispatch } from 'react-redux';
import { 
  addColumn, 
  updateColumn, 
  deleteColumn 
} from '../../store/columnsSlice';

export const useColumnService = () => {
  const dispatch = useDispatch();

  return {
    createColumn: (columnData) => dispatch(addColumn(columnData)),
    updateColumn: (columnId, updates) => dispatch(updateColumn({ id: columnId, ...updates })),
    deleteColumn: (columnId) => dispatch(deleteColumn(columnId))
  };
};
