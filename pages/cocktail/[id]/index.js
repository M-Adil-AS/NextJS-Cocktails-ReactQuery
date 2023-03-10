import React from 'react'
import Cocktail_UI from '../../../components/Cocktail_UI'
import {useRouter} from 'next/router'
import Loader from '../../../components/Loader'
import Error from '../../../components/Error'
import {useQuery} from 'react-query'

const Cocktail = ()=> {
    const router = useRouter()
    const {id} = router.query

    const { isLoading, error, data } = useQuery(['drink', id], () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json()), {
        refetchOnWindowFocus:false,
        enabled: router.isReady
    })

    const drink = data?.drinks.find(drink => drink.idDrink==id)
    
    const getIngredients = (cocktail)=> {
        let ingredients = []
        for(const [key, value] of Object.entries(cocktail)) {
            if(key.includes('strIngredient') && value){
                ingredients.push({id:key, name:value})
            }
        }
        return ingredients
    }
    
    if(error){
        return <Error msg={error.message}/>
    }
    else if(!drink || isLoading){
        return <Loader/>
    }

    return <Cocktail_UI drink={drink} getIngredients={getIngredients}/>
}

export default Cocktail