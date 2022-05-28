import * as React from 'react';
import { 
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';

const FormBox = ({sx = [], title, children}) => {
  return (
    <Card 
        sx={[
          { display: 'inline-flex', flexDirection: 'column' },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        variant="outlined"
    >
      <CardHeader
        sx={{ bgcolor: '#29B6F6', color: 'font.white' }}
        title={title}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default FormBox;

/* HOW TO USE
<FormBox
  title="Shrimp and Chorizo Paella"
  sx={{maxWidth:600}}
>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" />
</FormBox> 
*/