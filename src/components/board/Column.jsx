import React from 'react';
import styled from '@emotion/styled';
import Task from './Task';
import PropTypes from 'prop-types';

const ColumnContainer = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: column;
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.s};
  margin-bottom: ${props => props.theme.spacing.l};
`;

const ColumnTitle = styled.h2`
  font-size: ${props => props.theme.typography.heading.s};
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.status) {
      case 'TODO':
        return props.theme.colors.status.todo;
      case 'DOING':
        return props.theme.colors.status.doing;
      case 'DONE':
        return props.theme.colors.status.done;
      default:
        return props.theme.colors.text.secondary;
    }
  }};
`;

const TaskCount = styled.span`
  color: ${props => props.theme.colors.text.secondary};
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.m};
`;

const Column = ({ title, tasks }) => {
  return (
    <ColumnContainer>
      <ColumnHeader>
        <StatusDot status={title} />
        <ColumnTitle>{title}</ColumnTitle>
        <TaskCount>({tasks.length})</TaskCount>
      </ColumnHeader>
      
      <TaskList>
        {tasks.map(task => (
          <Task key={task.id} {...task} />
        ))}
      </TaskList>
    </ColumnContainer>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Column;
