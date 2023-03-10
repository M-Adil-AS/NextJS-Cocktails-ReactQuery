import React from 'react'
import Typography from '@mui/material/Typography';

const About = ()=> {
    return (
        <>
            <Typography sx={{m: 3, fontWeight: 'fontWeightLight'}} variant="h5" component="h4" className='center'>
                <b>About us</b>
            </Typography>
            <Typography sx={{m: 3, fontWeight: 'fontWeightLight', }} variant="p" component="h4" className='center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
            </Typography>
        </>
    )
}

export default About