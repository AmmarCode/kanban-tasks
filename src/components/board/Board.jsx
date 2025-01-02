import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { selectActiveBoard } from '../../store/boardsSlice';

const BoardContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  height: 100%;
  padding: ${props => props.theme.spacing.xl} 0;
`;

const Column = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.m};
  color: ${props => props.theme.colors.text.medium};
  text-transform: uppercase;
  ${props => props.theme.typography.body.m};
  letter-spacing: 2.4px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

const TaskCard = styled.div`
  background: ${props => props.theme.colors.neutral.darkGrey};
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.l};
  border-radius: ${props => props.theme.borderRadius.l};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const TaskTitle = styled.h3`
  color: ${props => props.theme.colors.text.dark};
  ${props => props.theme.typography.heading.m};
  margin-bottom: ${props => props.theme.spacing.s};
`;

const TaskSubtasks = styled.p`
  color: ${props => props.theme.colors.text.medium};
  ${props => props.theme.typography.body.m};
`;

const AddColumnButton = styled.button`
  min-width: 280px;
  margin-top: 39px;
  background: ${props => props.theme.colors.gradients.newColumn};
  border-radius: ${props => props.theme.borderRadius.m};
  color: ${props => props.theme.colors.text.medium};
  ${props => props.theme.typography.heading.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary.purple};
  }
`;

const Board = () => {
  const activeBoard = useSelector(selectActiveBoard);

  if (!activeBoard) {
    return <div>No board selected</div>;
  }

  return (
    <BoardContainer>
      {activeBoard.columns.map((column, index) => (
        <Column key={index}>
          <ColumnHeader color={column.color}>
            {column.name} ({column.tasks.length})
          </ColumnHeader>
          {column.tasks.map((task, taskIndex) => (
            <TaskCard key={taskIndex}>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskSubtasks>
                {task.subtasks.completed} of {task.subtasks.total} subtasks
              </TaskSubtasks>
            </TaskCard>
          ))}
        </Column>
      ))}
      <AddColumnButton>+ New Column</AddColumnButton>
    </BoardContainer>
  );
};

export default Board;
