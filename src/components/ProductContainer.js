import React from 'react'
import {withProductConsumer} from '../context'
import Loading from './Loading'
import ProductsList from './ProductsList'
import ProductsFilter from './ProductsFilter'

function ProductContainer({context}) {
    
    const {loading,sortedProducts,products} = context;
    if(loading) {
        return <Loading/>
    }
    return (
        <>
            <ProductsFilter products={products}/>            
            <ProductsList products={sortedProducts}/>            
        </>
    )
}

export default withProductConsumer(ProductContainer);
