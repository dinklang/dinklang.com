import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

let theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#ffffff',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#fff',
    },
    text: {
      primary: '#FCFEFF',
      secondary: '#CACFD1',
      disabled: '#FCFEFF',
    },
    divider: '#FCFEFF',
  },
});

export default function ValidationTextFields() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  // const handleNameField = () => {
  //   setName(name)
  // }
  

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField 
          sx={{
            maxWidth: '25ch',
          }}
          id="nameField" label="Name" variant="filled" 
          value={name}
          onChange={(event) => {setName(event.target.value)}}/>
        </div>
        <div>
          <TextField sx={{
            maxWidth: '25ch',
          }}
          id="emailField" label="Email" variant="filled" 
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}/>
        </div>
        <div>
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="filled"
            value={message}
            onChange={(event) => {setMessage(event.target.value)}}
          />
          {/* <div><p>{name}</p></div>
          <div><p>{email}</p></div>
          <div><p>{message}</p></div> */}
        </div>
        <div><Button sx={{
            color: '#00BBEF',
            fontWeight: 'bold'
          }}
          onClick={() => {setMessage("sexo");}}
          >SUBMIT</Button></div>
      </Box>
    </ThemeProvider>
  );
}