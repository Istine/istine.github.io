import * as React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputBase,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search: React.FC<{}> = () => {
  const [state, setState] = React.useState("category");

  return (
    <Box component="form" autoComplete="false">
      <CssTextField variant="outlined" />
      <Select
        sx={{
          overflow: "hidden",
        }}
        input={<BootstrapInput />}
        value={state}
        defaultValue="category"
        onChange={(e) => {
          setState(e.target.value);
        }}
      >
        <MenuItem sx={{ display: "none" }} value="category" selected={true}>
          category
        </MenuItem>
        <MenuItem value="test one">test one</MenuItem>
      </Select>
      <CssButton>
        <SearchIcon fontSize="small" color="primary" />
      </CssButton>
    </Box>
  );
};

export default Search;

const CssButton = styled(IconButton)({
  "&": {
    color: "black",
    backgroundColor: "#23A6F0",
    height: "100%",
    marginTop: "-6px",
    boxSizing: "border-box",
    borderRadius: 1,
    padding: ".6rem",
  },
  "&:hover": {
    backgroundColor: "#23A6F0",
  },
});

const CssTextField = styled(TextField)({
  "& fieldset": {
    backgroundColor: "transparent",
    outlined: "none",
    border: "none",
    margin: 0,
  },
  "& input": {
    height: "5px",
    borderRadius: 0,
    backgroundColor: "#F9F9F9",
    fontSize: "12px",
    width: "180px",
    border: "1px solid #ccc",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "3px",
  },
  outline: "none",
  width: "120px",
  boxSizing: "border-box",
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    outline: "none",
    backgroundColor: "#F9F9F9",
    border: "1px solid #ced4da",
    fontSize: 13,
    textAlign: "center",
    padding: "10px 26px 5px 12px",
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderRadius: 0,
    },
  },
}));
