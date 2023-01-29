import Button from '@mui/material/Button'

export function SubmitButton(props: any) {
    return (
        <Button
            variant="text"
            onClick= {props.submitFunction}
        >
            Submit
        </Button>
    )
}