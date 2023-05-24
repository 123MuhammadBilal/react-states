import React from "react";
import {
  //works as form
  FormControl,
  //works as Input Feild
  TextField,

  //Button
  Button,

  //keeps radio in group
  RadioGroup,
  //radio
  Radio,

  //checkbox
  Checkbox,

  //select
  Select,
  //works as option
  MenuItem,

  //box as a div
  Box,
} from "@mui/material";

//for color picker
import { MuiColorInput } from "mui-color-input";
// for clander
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// import { MultiInputDateRangeField } from '@mui/x-date-pickers-pro';
// npm install @mui/x-date-pickers-pro

const SingUpForm = () => {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [colorPicker, setColorPicker] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [selector, setSelector] = React.useState("WEB DEVELOPER");

  const handleChange = (newValue) => {
    setColorPicker(newValue);
  };
  const onGenderChange = (e) => {
    setGender(e.target.value);
  };

  const onSelect = (e) => {
    setSelector(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("clicked");
    document.getElementById("data").style.display = "block";
  };

  return (
    <div style={{ width:'100%' }}>
      <Box sx={{}}>
        <h1>SignUpForm</h1>
        <FormControl onSubmit={handleSubmit} className="formInputs">
          <TextField
            color="primary"
            label="First Name"
            id="fname"
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <br></br>
          <TextField
            color="secondary"
            variant="filled"
            label="Last Name"
            id="lname"
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br></br>
          <TextField
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <br></br>
          <TextField
            label="Password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <TextField
            variant="filled"
            label="Bithday"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <br></br>
          <RadioGroup
            label="Selet Gender"
            name="gender"
            value={gender}
            onChange={onGenderChange}
          >
            <Radio value="Male" label="Male" />
            <Radio value="Female" label="Female" />
            <Radio value="Other" label="Other" />
          </RadioGroup>
          <br></br>
          <MuiColorInput
            label="Color Picker"
            value={colorPicker}
            onChange={handleChange}
          />
          <br></br>
          <Select label="Select" value={selector} onChange={onSelect}>
            <MenuItem value="WEB DEVELOPER">Web Developer</MenuItem>
            <MenuItem value="APP DEVELOPER">App Developer</MenuItem>
            <MenuItem value="API DEVELOPER">API Developer</MenuItem>
          </Select>
          <br></br>
          <Button type="submit" variant="contained" disabled={!checkbox}>
            Submit
          </Button>
        </FormControl>
        <Checkbox
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
        <p>
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy"
        </p>

        <div id="data">
          <div className="userDetails">
            <h2>Name:</h2>
            <h4>
              {fname} {lname}
            </h4>
          </div>
          <div className="userDetails">
            <h2>Email:</h2>
            <h4>{mail}</h4>
          </div>
          <div className="userDetails">
            <h2>Password:</h2>
            <h4>{password}</h4>
          </div>
          <div className="userDetails">
            <h2>Birthday:</h2>
            <h4>{birthday}</h4>
          </div>
          <div className="userDetails">
            <h2>Gender:</h2>
            <h4>{gender}</h4>
          </div>
          <div className="userDetails">
            <h2>Color:</h2>
            <h4>{colorPicker}</h4>
          </div>
          <div className="userDetails">
            <h2>Selected:</h2>
            <h4>{selector}</h4>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default SingUpForm;
