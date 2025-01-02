import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../store/boardsSlice';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${props => props.theme.colors.neutral.darkGrey};
  border-radius: ${props => props.theme.borderRadius.l};
  padding: ${props => props.theme.spacing.xxl};
  width: 480px;
  max-width: 90%;
`;

const ModalTitle = styled.h2`
  ${props => props.theme.typography.heading.l};
  color: ${props => props.theme.colors.text.light};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.l};
`;

const Label = styled.label`
  ${props => props.theme.typography.body.m};
  color: ${props => props.theme.colors.text.medium};
  display: block;
  margin-bottom: ${props => props.theme.spacing.s};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.m};
  border: 1px solid ${props => props.theme.colors.neutral.mediumGrey};
  border-radius: ${props => props.theme.borderRadius.s};
  background: ${props => props.theme.colors.neutral.darkGrey};
  color: ${props => props.theme.colors.text.light};
`;

const ColumnInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.s};
`;

const DeleteColumnButton = styled.button`
  margin-left: ${props => props.theme.spacing.m};
  color: ${props => props.theme.colors.text.medium};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.m};
  margin-top: ${props => props.theme.spacing.xl};
`;

const CreateButton = styled.button`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.m};
  background: ${props => props.theme.colors.primary.purple};
  color: ${props => props.theme.colors.neutral.white};
  border-radius: ${props => props.theme.borderRadius.s};
`;

const CancelButton = styled.button`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.m};
  background: ${props => props.theme.colors.neutral.veryDarkGrey};
  color: ${props => props.theme.colors.primary.purple};
  border-radius: ${props => props.theme.borderRadius.s};
`;

const BoardModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState('');
  const [columns, setColumns] = useState([
    { name: 'Todo' },
    { name: 'Doing' },
    { name: 'Done' }
  ]);

  const handleAddColumn = () => {
    setColumns([...columns, { name: '' }]);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index].name = value;
    setColumns(newColumns);
  };

  const handleDeleteColumn = (index) => {
    const newColumns = columns.filter((_, i) => i !== index);
    setColumns(newColumns);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Filter out empty column names
    const validColumns = columns.filter(column => column.name.trim() !== '');

    const newBoard = {
      name: boardName,
      columns: validColumns.map(column => ({
        name: column.name,
        tasks: []
      }))
    };

    dispatch(addBoard(newBoard));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Add New Board</ModalTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Board Name</Label>
            <Input 
              type="text" 
              placeholder="e.g. Web Design"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Board Columns</Label>
            {columns.map((column, index) => (
              <ColumnInput key={index}>
                <Input 
                  type="text" 
                  placeholder="Column Name"
                  value={column.name}
                  onChange={(e) => handleColumnChange(index, e.target.value)}
                />
                {columns.length > 1 && (
                  <DeleteColumnButton 
                    type="button"
                    onClick={() => handleDeleteColumn(index)}
                  >
                    ✕
                  </DeleteColumnButton>
                )}
              </ColumnInput>
            ))}
            <CreateButton 
              type="button" 
              onClick={handleAddColumn}
            >
              + Add New Column
            </CreateButton>
          </FormGroup>

          <ButtonGroup>
            <CreateButton type="submit">Create Board</CreateButton>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BoardModal;
