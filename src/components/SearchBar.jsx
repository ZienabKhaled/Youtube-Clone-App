import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={ () => {}}
      sx={{
        pl: 2,
        borderRadius:20,
        border:'1px solid #e3e3e3',
        boxShadow: 'none',
        mr:{sm:5}
      }}
    >
        < input        
        className="search-bar"
        placeholder="Search ..."
        value=""
        onChange={ () => {

        }}

        />
        <IconButton sx={{ p: '10px' , color:'red'}} type="submit" aria-label="search">
            <Search/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar