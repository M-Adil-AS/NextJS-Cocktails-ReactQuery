import React from 'react'
import Typography from '@mui/material/Typography';

const Loader = ()=>{
    return (
        <Typography sx={{m: 3, fontWeight: 'fontWeightLight'}} variant="h5" component="h4" className='center'>
            <b>Loading...</b>
        </Typography>
    )
}

export default Loader