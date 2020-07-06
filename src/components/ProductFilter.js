import React from 'react'
import {useContext} from 'react'
import {ProductContext} from '../context'
import Title from './Title'

// get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

function ProductFilter({products}) {
    const context = useContext(ProductContext);
    const {
        handleChange,
        type,
        testing,
        price,
        minPrice,
        maxPrice
    } = context;
    //get unique types
    let types = getUnique(products,'type');
    //add all
    types = ["all",...types];
    //map to jsx
    types = types.map((item,index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
                <form action="" className="filter-form">

                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">тип товара</label>
                        <select 
                            name="type" 
                            id="type" 
                            value={type} 
                            className="form-control" 
                            onChange={handleChange}
                        >
                            {types}
                        </select>
                    </div>
                    {/* end select type */}

                    {/* product price */}
                    <div className="form-group">
                        <label htmlFor="price">
                            цена {price} &#8372;
                        </label>
                        <input 
                            type="range" 
                            name="price" 
                            min={minPrice} 
                            max={maxPrice} 
                            id="price" 
                            value={price}
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    {/* end of product price */}

                    {/* extras */}
                    <div className="form-group">
                        <div className="product-extra">
                            <input 
                                type="checkbox" name="testing"
                                id="testing"
                                checked={testing}
                                onChange={handleChange}
                            />
                            <label htmlFor="testing">
                                Бесплатное тестирование для Харькова
                            </label>
                        </div>
                    </div>
                    {/* end of extras */}

                </form>
        </section>
    )
}

export default ProductFilter
