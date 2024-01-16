// EditableCell.js
import React from 'react';
import { Input } from '@chakra-ui/react';

const EditableCell = ({ value, onSave, isEditing, setIsEditing }) => {
  return isEditing ? (
    <Input
      autoFocus
      defaultValue={value}
      onBlur={(e) => onSave(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') onSave(e.target.value);
      }}
    />
  ) : (
    <span onClick={() => setIsEditing(true)}>{value}</span>
  );
};

export default EditableCell;
