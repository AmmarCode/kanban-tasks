import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TaskCard = styled.div`
  background-color: ${props => props.theme.colors.background.darker};
  padding: ${props => props.theme.spacing.l};
  border-radius: ${props => props.theme.borderRadius.m};
  cursor: pointer;
  transition: transform ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
  }
`;

const TaskTitle = styled.h3`
  font-size: ${props => props.theme.typography.heading.m};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.s};
`;

const SubtaskCount = styled.p`
  font-size: ${props => props.theme.typography.body.m};
  color: ${props => props.theme.colors.text.secondary};
`;

const Task = ({ title, subtasks }) => {
  return (
    <TaskCard>
      <TaskTitle>{title}</TaskTitle>
      <SubtaskCount>
        {subtasks.completed} of {subtasks.total} subtasks
      </SubtaskCount>
    </TaskCard>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  subtasks: PropTypes.shape({
    completed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired
};

export default Task;
