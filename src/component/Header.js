import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { AppBar, Autocomplete, Box, TextField, Toolbar, Tabs, Tab } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../utils/api-helper';
import { Link } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState(0)
    const [movies, setMovie] = useState([])

    useEffect(() => {
        getAllMovies().then((data) => setMovie(data.movie))
            .catch((err) => console.log(err))
    }, [])


    return (
        <AppBar position='sticky    ' sx={{ bgcolor: "#808080", color: "#fff" }}>
            <Toolbar>
                <Box width="20%">
                    <MovieIcon />
                </Box>
                <Box width={"30%"} margin="auto">
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => <TextField {...params}
                            placeholder='Search movie'
                            sx={{ input: { color: "#fff" } }}
                            variant='standard' />}
                    />
                </Box>
                <Box display={"flex"}>
                    <Tabs value={value} textColor="secondary"
                        textColor="inherit"
                        indicatorColor="secondary"
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab LinkComponent={Link} to="/movies" label="Movies" />
                        <Tab LinkComponent={Link} to="/admin" label="Admin" />
                        <Tab LinkComponent={Link} to="/auth" label="Auth" />
                    </Tabs>

                </Box>
            </Toolbar>
        </AppBar>
    )    
}

export default Header