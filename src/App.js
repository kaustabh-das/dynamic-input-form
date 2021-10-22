 import React, { useState } from "react";
import "./styles/App.css";
import { Container,
         Paper, 
         Box, 
         Button,
         Grid,
         TextField,
         IconButton
         } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Trash as TrashIcon } from "react-feather"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(1)
  }
}));

function App() {

  const classes = useStyles();

  const userTemplate = {id:Math.random(), name: "", email: "", phone: ""};
  const [users, setUsers] = useState([userTemplate]);

  const addUser = () => {
    setUsers([...users, {id:Math.random(), name: "", email: "", phone: ""}]);
  }

  const onChange = (e, index) => {
    if(e.target.name === "address"){
      users[index].address = e.target.value
    }
    if(users[index].address === "" && users[index].hasOwnProperty('address')) {
      delete users[index].address
      setUsers([...users])
    }
    else {
      
    const updatedUsers = users.map((user, i) => index === i ? 
    Object.assign(user, {[e.target.name]: e.target.value}) : user)

    setUsers(updatedUsers)
    }

    
    // console.log(userTemplate);
    console.log(users[index].address);
    // console.log(users[index].address;
  }

  // console.log(users.name);

  const removeUser = (index) => {
    const filteredUsers = [...users];
    filteredUsers.splice(index, 1);
    setUsers(filteredUsers);
    // console.log(index)
  }

  return (
    <Container className={classes.root}>
      <Paper component={Box} p={4}>
        {
          users.map((user, index)=> (
            <Grid container spacing={3} key={user.id} className={classes.inputGroup}> 
              <Grid item md={3}> 
                <TextField
                label="Name"
                placeholder="Enter Your Name"
                variant="outlined"
                name="name"
                onChange={e => onChange(e, index)}
                value={user.name}
                fullWidth 
                />
              </Grid>
              <Grid item md={3}> 
                <TextField
                label="E-mail"
                placeholder="Enter Your E-mail"
                variant="outlined"
                name="email"
                onChange={e => onChange(e, index)}
                value={user.email}
                fullWidth 
                />
              </Grid>
              <Grid item md={2}> 
                <TextField
                label="Phone"
                placeholder="Enter Your Phone No"
                variant="outlined"
                name="phone"
                onChange={e => onChange(e, index)}
                value={user.phone}
                fullWidth 
                />
              </Grid>
              <Grid item md={3}> 
                <TextField
                label="Address"
                placeholder="Enter Your Address"
                variant="outlined"
                name="address"
                onChange={e => onChange(e, index)}
                value={user.address}
                fullWidth 
                />
              </Grid>
              <Grid item md={1}> 
                <IconButton color="secondary" onClick={() => removeUser(index)}>  
                  <TrashIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))
        }
        <Button variant="contained" color="primary" onClick={addUser}>Add User</Button>
      </Paper>
    </Container>
  );
}

export default App;
