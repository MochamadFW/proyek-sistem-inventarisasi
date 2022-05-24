import { Button } from "@mui/material";

const SubmitButton = ({ Label }) => {
    return (
        <Button
            sx={
                [
                    {
                        backgroundColor: "button.main",
                        px: 3, 
                        py: 1
                    },
                    {
                        '&:hover': {
                            backgroundColor: '#d4b60c',
                        },
                    },
                ]
            }
            variant="contained">
            {Label}
        </Button>
    )
}

export default SubmitButton;