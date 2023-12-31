import { CircularProgress, Grid, Typography, InputLabel, MenuItem,FormControl,Select, dividerClasses } from "@mui/material";
import {useState} from "react";

const List = () => {
    
    const[type, setType] = useState('restaurants');
    const[rating, setRating] = useState('')
    return (
        <div >
            <Typography variant="h4"> Restraunts, Hostels & Attractions arround you</Typography>
            <FormControl >
                <InputLabel>Type</InputLabel>\
                <Select value={type} onChange={(e) => setType(e.target.value) }>
                    <MenuItem value="restaurants">Restraunts</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl >
                <InputLabel>Rating</InputLabel>\
                <Select value={rating} onChange={(e) => setRating(e.target.value) }>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List;