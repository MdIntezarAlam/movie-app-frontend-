import { AppBar, Autocomplete, Box, TextField, Toolbar, Tabs, Tab } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { getAllSearchMovies } from '../utils/api-helper';
import '../styles/home.css';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <AppBar position='sticky ' sx={{ bgcolor: "#808080", color: "#fff" }}>
            <Toolbar>
                <Box width="20%">
                    <MovieIcon />
                </Box>
                <Box width={"30%"} margin="auto" className="hide_search">
                    <Autocomplete
                        freeSolo
                        sx={{ input: { color: "#fff", border: 0 } }}
                        variant='standard'
                        options={getAllSearchMovies}
                        renderInput={(params) => <TextField {...params} label="Search movie" />}
                    />
                </Box>
                <Box display={"flex"}>
                    <Tabs textColor="secondary"
                        textColor="inherit"
                        indicatorColor="secondary"
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