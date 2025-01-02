import { useDispatch } from 'react-redux';
import { 
  addBoard, 
  updateBoard, 
  deleteBoard, 
  setActiveBoard 
} from '../../store/boardsSlice';

export const useBoardService = () => {
  const dispatch = useDispatch();

  return {
    createBoard: (boardData) => dispatch(addBoard(boardData)),
    updateBoard: (boardId, updates) => dispatch(updateBoard({ id: boardId, ...updates })),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    setActiveBoard: (boardId) => dispatch(setActiveBoard(boardId))
  };
};
