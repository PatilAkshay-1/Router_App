import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBar.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const SearchBar = ({handleOpen}) => {
  return (
    <div className="searchBarContainer">
      <TextField
        className="searchBar"
        InputProps={{
          className: 'input',
        }}
        placeholder="Search..."
        variant="outlined"
      />
      <AddCircleOutlineIcon onClick={handleOpen} />
    </div>
  );
};

export default SearchBar;
