import React from 'react'
import {withProductConsumer} from '../context'
import ProductsFilter from './ProductFilter'
import ProductsList from './ProductList'
import Loading from './Loading'

function ProductContainer({context}) {
    const {loading,sortedProducts,products} = context;
    if(loading) {
        return <loading/>
    }
    return (
        <>
            <ProductsFilter products={products}/>            
            <ProductsList products={sortedProducts}/>            
        </>
    )
}

export default withProductConsumer(ProductContainer);
