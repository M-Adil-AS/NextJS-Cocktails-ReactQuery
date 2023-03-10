import Head from 'next/head';
import React,{useState} from 'react'
import ItemList from '../components/ItemList'
import Loader from '../components/Loader'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useQuery} from 'react-query'
import Error from '../components/Error'

const Home = ()=> {
    const [search, setSearch] = useState('')
    const { isLoading, error, data } = useQuery(['search', search], () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then(res => res.json()), {refetchOnWindowFocus:false})

    if(error){
        return <Error msg={error.message}/>
    }
    else{
        return (
            <>
                <Head>
                  <title>Home Page</title>
                </Head>
    
                <div className='center'>
                    <Typography sx={{m: 3, fontWeight: 'fontWeightLight'}} variant="h5" component="h4">
                        <b>Search favorite cocktail</b>
                    </Typography>
                    
                    <Grid container justifyContent="center">
                        <Grid item sx={{minWidth: '190px'}} xs={8} sm={6} md={5} lg={4}>
                            <TextField id="outlined-basic" variant="outlined" size='small' color='primary' value={search} onChange={(e)=> setSearch(e.target.value)} fullWidth/>
                        </Grid>
                    </Grid>
                    <br/><br/>
                </div>
                
                {!isLoading ? <ItemList drinks={data.drinks}/> : <Loader/>}
                <br/><br/>
            </>
        )
    }
}

export default Home