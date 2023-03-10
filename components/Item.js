import React from 'react'
import styles from '../styles/Item.module.css'
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({strGlass,strDrink,strAlcoholic,strDrinkThumb,idDrink})=>{
    return(
        <Card sx={{width:'200px', m:2}} className={`${styles.item} center`}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="200"
                image={strDrinkThumb}
                alt="drink"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {strDrink}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {strGlass}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {strAlcoholic}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link href="/cocktail/[id]" as={`/cocktail/${idDrink}`} passHref>
                    <Button size="small" color="primary">Details</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Item