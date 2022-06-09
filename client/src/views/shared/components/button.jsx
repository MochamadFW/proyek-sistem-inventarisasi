import { Button } from "@mui/material";

const SubmitButton = ({sx = [], Label, Types, Click, Disabled }) => {

    return (
        <Button
            type={Types}
            sx={
                [
                    {
                        backgroundColor: "button.main",
                        px: 3, 
                        py: 1,
                        textTransform: 'capitalize',
                        fontWeight: 'bold'
                    },
                    {
                        '&:hover': {
                            backgroundColor: '#d4b60c',
                        },
                    },
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]
            }
            variant="contained"
            onClick={Click}
            disabled={Disabled}
            >
            {Label}
        </Button>
    )
}

export default SubmitButton;