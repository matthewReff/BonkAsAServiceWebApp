import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export function ServerSelector(props: any) {

    const handleChange = (event: SelectChangeEvent) => {
        props.setServer(event.target.value);
    };

    const generateMenuItemFromServer = (serverValue?: any) => {
        return (
            <MenuItem value={serverValue}>{serverValue}</MenuItem>
        )
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="server-select-label">Server</InputLabel>
            <Select
                labelId="server-select-label"
                id="server-select"
                value={props.currentServer}
                label="Sever"
                onChange={handleChange}
            >
            { props.serverList.map(generateMenuItemFromServer) }
            </Select>
        </FormControl>
    )
}