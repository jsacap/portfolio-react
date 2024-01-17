import React, { useState, useEffect } from 'react';
import { Editable, EditableInput, EditablePreview, Select } from '@chakra-ui/react';

const EditableCell = ({ value, onUpdate, isMultiSelect, options }) => {
  const [editValue, setEditValue] = useState(value);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  const handleChange = (e) => {
    if (isMultiSelect) {
      const values = Array.from(e.target.selectedOptions, option => option.value);
      setEditValue(values);
    } else {
      setEditValue(e.target.value);
    }
  };

  const handleBlur = () => {
    onUpdate(editValue);
  };

  if (isMultiSelect) {
    return (
      <Select multiple value={editValue} onBlur={handleBlur} onChange={handleChange}>
        {options.map(option => (
          <option key={option.id} value={option.name}>{option.name}</option>
        ))}
      </Select>
    );
  }

  return (
    <Editable defaultValue={value} isPreviewFocusable={false}>
      <EditablePreview />
      <EditableInput onBlur={handleBlur} />
    </Editable>
  );
};

export default EditableCell;
