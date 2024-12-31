import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Navbar(props) {
  const handleInputChange = (event) => {
    props.setInputValue(event.target.value);
  };
  return (
    <div className="nav">
      <i
        class="fa fa-address-book"
        style={{ fontSize: "32px", margin: "0 10px" }}
      ></i>
      <TextField
        id="outlined-basic"
        label="Search Contacts"
        variant="outlined"
        size="medium"
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#000",
              margin: "0 10px",
            },
            "&:hover fieldset": {
              borderColor: "#000",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#000",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#000",
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: "#000",
          },
        }}
      />
      <Button
        onClick={props.handleAllContact}
        variant="outlined"
        size="medium"
        sx={{
          padding: "5px 28px",
          borderColor: "black",
          color: "black",
          margin: "0 10px",
          "&:hover": {
            borderColor: "darkgray",
            backgroundColor: "lightgray",
            color: "black",
          },
        }}
      >
        All Contacts
      </Button>
    </div>
  );
}

export default Navbar;
