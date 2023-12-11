import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Grid, Button } from '@mui/material';
import AppRouter from './components/AppRouter';
import TaskModal from './components/TaskModal';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleOpenTaskModal = (task) => {
    setSelectedTask(task);
    setTaskModalOpen(true);
  };

  const handleCloseTaskModal = () => {
    setSelectedTask(null);
    setTaskModalOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">TODO App</Typography>
          {isLoggedIn && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px' }}>
        {isLoggedIn ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Welcome, User!
              </Typography>
              <Button variant="contained" color="primary" onClick={() => handleOpenTaskModal(null)}>
                New Task
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <AppRouter />
            </Grid>
          </Grid>
        ) : (
          <AppRouter />
        )}
        {taskModalOpen && (
          <TaskModal
            task={selectedTask}
            onClose={handleCloseTaskModal}
            onSave={(updatedTask) => console.log(updatedTask)}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default App;
