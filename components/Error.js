import React from 'react'
import Typography from '@mui/material/Typography';

const Error = ({msg})=> {
    return (
        <>
            <Typography sx={{m: 3, fontWeight: 'fontWeightLight'}} variant="h5" component="h4" className='center'>
                <b>Error</b>
            </Typography>
            <Typography sx={{m: 3, fontWeight: 'fontWeightLight', }} variant="p" component="h4" className='center'>
                <p>{msg}</p>
            </Typography>
        </>
    )
}

export default Error