import React, { useState } from "react";
import "./styles/App.css";
import { Container,
         Paper, 
         Box, 
         Button,
         Typography,
         Grid,
         TextField,
         IconButton
         } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Trash as TrashIcon } from "react-feather"
// import { width } from "@mui/system";
// import { CountertopsOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(1),
    // borderTop: "1px solid"
  },
  centerItem: {
    display:"flex",
    alignItems:"center", 
    justifyContent:"center"
  },
  header: {
    marginBottom: "1rem"
  },
  noonField: {
    display:"flex",
    alignItems:"center", 
    justifyContent:"center",
    width:"5rem",
    // backgroundColor: "red"
  },
}));

function App() {

  const classes = useStyles();

  const userTemplate = {
                        id:Math.random(), 
                        dname: "", 
                        strengthVal: "", 
                        strengthUnit: "", 
                        durationVal: "",
                        durationUnit: "",
                        // morningVal: "",
                        // noonVal: "",
                        // nightVal: ""
                      };

  const [users, setUsers] = useState([userTemplate]);

  const addUser = () => {
    setUsers([...users, {
      id:Math.random(), 
      dname: "", 
      strengthVal: "", 
      strengthUnit: "", 
      durationVal: "",
      durationUnit: "",
      // morningVal: "",
      // noonVal: "",
      // nightVal: ""
    }]);
  }

  // const onChange = (e, index) => {
  //   // console.log(users);
  //   const updatedUsers = users.map((user, i) => index === i ? 
  //     Object.assign(user, {[e.target.name]: e.target.value}) : user)

  //   setUsers(updatedUsers)
  //   // console.log(index)
  // }

  const onChange = (e, index) => {
    if(e.target.name === "morningVal" || e.target.name === "noonVal" || e.target.name === "nightVal"){
      //  users[index].morningVal = e.target.value
       switch (e.target.name) {
        case "morningVal":
          users[index].morningVal = e.target.value
          break;
        case "noonVal":
          users[index].noonVal = e.target.value
          break;
        case "nightVal":
          users[index].nightVal = e.target.value
          break;
        // default:
        //   text = "Looking forward to the Weekend";
      }
     }
     if(users[index].morningVal === "" && users[index].hasOwnProperty('morningVal')) {
       delete users[index].morningVal
       setUsers([...users])
     }
     else if(users[index].noonVal === "" && users[index].hasOwnProperty('noonVal')) {
      delete users[index].noonVal
      setUsers([...users])
    }
    else if(users[index].nightVal === "" && users[index].hasOwnProperty('nightVal')) {
      delete users[index].nightVal
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

  const removeUser = (index) => {
    const filteredUsers = [...users];
    filteredUsers.splice(index, 1);
    setUsers(filteredUsers);
    // console.log(index)
  }

  return (
    <Container className={classes.root}>
      <Paper component={Box} p={4}>
        <Box className={classes.header}>
          <Grid container spacing={3}>
            <Grid item md={4}><Box><Typography >Drug Name</Typography></Box></Grid>
            <Grid item md={2}><Box className={classes.centerItem}><Typography>Strength</Typography></Box></Grid>
            <Grid item md={2}><Box className={classes.centerItem}><Typography>Duration</Typography></Box></Grid>
            <Grid item md={1}><Box className={classes.centerItem}><Typography>Morning</Typography></Box></Grid>
            <Grid item md={1}><Box className={classes.centerItem}><Typography>Noon</Typography></Box></Grid>
            <Grid item md={1}><Box className={classes.centerItem}><Typography>Night</Typography></Box></Grid>
            <Grid item md={1}><Box className={classes.centerItem}><Typography></Typography></Box></Grid>
          </Grid>
        </Box>
        {
          users.map((user, index)=> (
            <Grid container spacing={3} key={user.id} className={classes.inputGroup}> 
              <Grid item md={4}> 
                <TextField
                label="Drug Name"
                placeholder="Enter Your Drug Name"
                variant="outlined"
                name="dname"
                onChange={e => onChange(e, index)}
                value={user.dname}
                fullWidth 
                />
              </Grid>
              <Grid item md={2}> 
                <Grid item xs={12} container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                    label="val"
                    // placeholder="Enter Your E-mail"
                    variant="outlined"
                    name="strengthVal"
                    onChange={e => onChange(e, index)}
                    value={user.strengthVal}
                    fullWidth 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                    label="unit"
                    // placeholder="Enter Your E-mail"
                    variant="outlined"
                    name="strengthUnit"
                    onChange={e => onChange(e, index)}
                    value={user.strengthUnit}
                    fullWidth 
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={2}> 
              <Grid item xs={12} container spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                    label="val"
                    // placeholder="Enter Your E-mail"
                    variant="outlined"
                    name="durationVal"
                    onChange={e => onChange(e, index)}
                    value={user.durationVal}
                    fullWidth 
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                    label="unit"
                    // placeholder="Enter Your E-mail"
                    variant="outlined"
                    name="durationUnit"
                    onChange={e => onChange(e, index)}
                    value={user.durationUnit}
                    fullWidth 
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.textValueAlign} item md={1}> 
                <TextField
                label="1"
                // placeholder="Enter Your Address"
                type="number"
                variant="outlined"
                name="morningVal"
                onChange={e => onChange(e, index)}
                value={user.morningVal}
                fullWidth 
                />
              </Grid>
              <Grid item md={1}> 
                <TextField
                label="0"
                // placeholder="Enter Your Address"
                variant="outlined"
                name="noonVal"
                onChange={e => onChange(e, index)}
                value={user.noonVal}
                fullWidth 
                />
              </Grid>
              <Grid item md={1}>
                <Box className={classes.noonField}> 
                  <TextField
                  label="0"
                  // placeholder="Enter Your Address"
                  variant="outlined"
                  name="nightVal"
                  onChange={e => onChange(e, index)}
                  value={user.nightVal}
                  fullWidth 
                  />
                </Box>
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









// import React, { useState, useEffect } from "react";
// import "./styles/App.css";
// import { Container,
//          Paper, 
//          Box, 
//          Button,
//          Grid,
//          TextField,
//          IconButton
//          } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { Trash as TrashIcon } from "react-feather"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: theme.palette.grey[300],
//     paddingTop: theme.spacing(5),
//   },
//   inputGroup: {
//     marginBottom: theme.spacing(1)
//   }
// }));

// function App() {

//   const classes = useStyles();

//   const userTemplate = {id:Math.random(), name: "", email: "", phone: "", address: ""};
  
//   const [users, setUsers] = useState([userTemplate])
//   const [selected, setSelected] = useState(null);
//   // useEffect(() => {
//   //   // DO here
//   //   if(selected){
//   //     setSelected(selected)
//   //   }

//   //   // setUsers(updatedUsers)
//   //   },[selected])

//   const addUser = () => {
//     setUsers([...users, {id:Math.random(), name: "", email: "", phone: "", address: ""}]);
//   }

//   const onChange = (e, index) => {
//     console.log(index)
//     const updatedUsers = users.map((user, i) => index === i ? 
//       Object.assign(user, {[e.target.name]: e.target.value}) : user)

//     setUsers(updatedUsers)
//     // setSelected(updatedUsers)
//   }


//   const removeUser = (index) => {
//     const filteredUsers = [...users];
//     filteredUsers.splice(index, 1);
//     setUsers(filteredUsers);
//     // console.log(index)
//   }

//   return (
//     <Container className={classes.root}>
//       <Paper component={Box} p={4}>
//         {
//           users.map((user, index)=> (
//             <Grid container spacing={3} key={user.id} className={classes.inputGroup}> 
//               <Grid item md={3}> 
//                 <TextField
//                 label="Name"
//                 placeholder="Enter Your Name"
//                 variant="outlined"
//                 name="name"
//                 onChange={e => onChange(e, index)}
//                 value={user.name}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={3}> 
//                 <TextField
//                 label="E-mail"
//                 placeholder="Enter Your E-mail"
//                 variant="outlined"
//                 name="email"
//                 onChange={e => onChange(e, index)}
//                 value={user.email}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={2}> 
//                 <TextField
//                 label="Phone"
//                 placeholder="Enter Your Phone No"
//                 variant="outlined"
//                 name="phone"
//                 onChange={e => onChange(e, index)}
//                 value={user.phone}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={3}> 
//                 <TextField
//                 label="Address"
//                 placeholder="Enter Your Address"
//                 variant="outlined"
//                 name="address"
//                 onChange={e => onChange(e, index)}
//                 value={user.address}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={1}> 
//                 <IconButton color="secondary" onClick={() => removeUser(index)}>  
//                   <TrashIcon />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           ))
//         }
//         <Button variant="contained" color="primary" onClick={addUser}>Add User</Button>
//       </Paper>
//     </Container>
//   );
// }

// export default App;








// import React, { useState } from "react";
// import "./styles/App.css";
// import { Container,
//          Paper, 
//          Box, 
//          Button,
//          Grid,
//          TextField,
//          IconButton
//          } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { Trash as TrashIcon } from "react-feather"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100vw",
//     height: "100vh",
//     backgroundColor: theme.palette.grey[300],
//     paddingTop: theme.spacing(5),
//   },
//   inputGroup: {
//     marginBottom: theme.spacing(1)
//   }
// }));

// function App() {

//   const classes = useStyles();

//   const userTemplate = {id:Math.random(), name: "", email: "", phone: ""};
//   const [users, setUsers] = useState([userTemplate]);

//   const addUser = () => {
//     setUsers([...users, {id:Math.random(), name: "", email: "", phone: ""}]);
//   }

//   const onChange = (e, index) => {
//     if(e.target.name === "address"){
//       users[index].address = e.target.value
//     }
//     if(users[index].address === "" && users[index].hasOwnProperty('address')) {
//       delete users[index].address
//       setUsers([...users])
//     }
//     else {
      
//     const updatedUsers = users.map((user, i) => index === i ? 
//     Object.assign(user, {[e.target.name]: e.target.value}) : user)

//     setUsers(updatedUsers)
//     }

    
//     // console.log(userTemplate);
//     console.log(users[index].address);
//     // console.log(users[index].address;
//   }

//   // console.log(users.name);

//   const removeUser = (index) => {
//     const filteredUsers = [...users];
//     filteredUsers.splice(index, 1);
//     setUsers(filteredUsers);
//     // console.log(index)
//   }

//   return (
//     <Container className={classes.root}>
//       <Paper component={Box} p={4}>
//         {
//           users.map((user, index)=> (
//             <Grid container spacing={3} key={user.id} className={classes.inputGroup}> 
//               <Grid item md={3}> 
//                 <TextField
//                 label="Name"
//                 placeholder="Enter Your Name"
//                 variant="outlined"
//                 name="name"
//                 onChange={e => onChange(e, index)}
//                 value={user.name}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={3}> 
//                 <TextField
//                 label="E-mail"
//                 placeholder="Enter Your E-mail"
//                 variant="outlined"
//                 name="email"
//                 onChange={e => onChange(e, index)}
//                 value={user.email}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={2}> 
//                 <TextField
//                 label="Phone"
//                 placeholder="Enter Your Phone No"
//                 variant="outlined"
//                 name="phone"
//                 onChange={e => onChange(e, index)}
//                 value={user.phone}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={3}> 
//                 <TextField
//                 label="Address"
//                 placeholder="Enter Your Address"
//                 variant="outlined"
//                 name="address"
//                 onChange={e => onChange(e, index)}
//                 value={user.address}
//                 fullWidth 
//                 />
//               </Grid>
//               <Grid item md={1}> 
//                 <IconButton color="secondary" onClick={() => removeUser(index)}>  
//                   <TrashIcon />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           ))
//         }
//         <Button variant="contained" color="primary" onClick={addUser}>Add User</Button>
//       </Paper>
//     </Container>
//   );
// }

// export default App;