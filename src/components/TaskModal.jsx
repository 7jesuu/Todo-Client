import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const TaskModal = ({ task, onClose, onSave }) => {
  const [taskTitle, setTaskTitle] = useState(task?.title || '');
  const [taskDescription, setTaskDescription] = useState(task?.description || '');
  const [taskDueDate, setTaskDueDate] = useState(task?.dueDate || '');
  const [taskPriority, setTaskPriority] = useState(task?.priority || 'low');
  const [taskAssignee, setTaskAssignee] = useState(task?.assignee || '');

  const handleSave = () => {
    const updatedTask = {
      ...task,
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      priority: taskPriority,
      assignee: taskAssignee,
    };

    onSave(updatedTask);
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Task Details</DialogTitle>
      <DialogContent>
        <TextField
          label="Task Title"
          fullWidth
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TextField
          label="Task Description"
          multiline
          fullWidth
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Assignee"
          fullWidth
          value={taskAssignee}
          onChange={(e) => setTaskAssignee(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
