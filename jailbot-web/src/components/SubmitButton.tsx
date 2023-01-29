import Button from '@mui/material/Button'

export function SubmitButton(props: any) {
    const submitOffense = () => {
        console.log("Server: " + props.selectedServer)
        console.log("User: " + props.selectedUser)
        console.log("Offense: " + props.selectedOffense)
        return
    }

    return (
        <Button
            variant="text"
            onClick= {submitOffense}
        >
            Submit
        </Button>
    )
}