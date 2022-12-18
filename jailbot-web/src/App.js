import './App.css';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react';

function App() {
  return (
    <div>
        <PageHeader />
        <ServerSelector />
        <OffenseSelector />
        <SubmitButton />
    </div>
  );
}

function PageHeader() {
    return (
        <div>
            <header>
                <p>Bonk Bot Webapp</p>
            </header>
        </div>
    )
}

function ServerSelector() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Server</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Sever"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
    )
}
function OffenseSelector() {
    return (
        <div>
            <p>Offense Thing</p>
        </div>
    )
}
function SubmitButton() {
    return (
        <div>
            <p>Submit Thing</p>
        </div>
    )
}

export default App;