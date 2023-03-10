import React from 'react'
import Item from '../components/Item'
import styles from '../styles/ItemList.module.css'
import Typography from '@mui/material/Typography';

const ItemList = ({drinks})=>{
    return (
        <>
            {(!drinks) ? <h2 className='center'>No cocktails matched your search criteria</h2> : 
            <div>
                <Typography sx={{mx: 3, my:2, fontWeight: 'fontWeightLight'}} className='center' variant="h5" component="h4">
                    <b>Cocktails</b>
                </Typography>
                <div className={styles.itemList}>
                    {drinks.map((item)=>{
                    return (
                        <Item key={item.idDrink} {...item}/>
                    )
                    })}
                </div>
            </div>}
        </>
    )
}

export default ItemList