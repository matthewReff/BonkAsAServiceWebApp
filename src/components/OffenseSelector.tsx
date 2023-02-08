import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react';

export function OffenseSelector(props: any) {
    const handleUserChange = (event: SelectChangeEvent) => {
        props.setUser(event.target.value);
    };

    const handleOffenseChange = (event: SelectChangeEvent) => {
        props.setOffense(event.target.value);
    };

    const generateMenuItemFromUser = (userValue?: any) => {
        return (
            <MenuItem value={userValue} key={userValue}>
                {userValue}
            </MenuItem>
        )
    }

    const generateMenuItemFromOffense = (offenseValue?: any) => {
        return (
            <MenuItem value={offenseValue} key={offenseValue}>
                {offenseValue}
            </MenuItem>
        )
    }

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="user-select-label">User</InputLabel>
                <Select
                    labelId="user-select-label"
                    id="user-select-select"
                    value={props.selectedUser}
                    label="User"
                    onChange={handleUserChange}
                >
                    { props.userList.map(generateMenuItemFromUser) }
                </Select>
            </FormControl>
            <p>has committed</p>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Offense</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.selectedOffense}
                    label="Sever"
                    onChange={handleOffenseChange}
                >
                    { props.offenseList.map(generateMenuItemFromOffense) }
                </Select>
            </FormControl>
        </div>
    )
}