import React from 'react'
import {useContext} from 'react'
import {ProductContext} from '../context'
import Title from '../components/Title'


// get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function ProductsFilter({products}) {
        //react hooks
    const context = useContext(ProductContext);
    const {
        handleChange,
        type,
        price,
        minPrice,
        maxPrice,
        adjustHeight
    } = context;
    //get unique types
    let types = getUnique(products,'type');
    //add all
    types = ["all", ...types];
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
            <Title title=""/>
                <form action="" className="filter-form">

                    {/* select type */}
                    <div className="col-md-4 form-group distance">
                        <label htmlFor="type">тип товара</label>
                        <select 
                            name="type" 
                            id="type" 
                            value={type} 
                            className="form-control-select" 
                            onChange={handleChange}
                        >
                            {types}
                        </select>
                    </div>
                    {/* end of select type */}

                    {/* product price */}
                    <div className="col-md-4 form-group distance">
                        <label htmlFor="price">
                            цена {price} &#8372;
                        </label>
                        <div className="input-wrap">
                            <input 
                                type="range" 
                                name="price" 
                                min={minPrice} 
                                max={maxPrice} 
                                id="price" 
                                value={price}
                                className="form-control slider"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* end of product price */}

                    {/* adjustHeight */}
                    <div className="col-md-4 form-group input-checkbox">
                        <div className="product-extra">
                            <input 
                                type="checkbox" 
                                name="adjustHeight"
                                id="adjustHeight"
                                checked={adjustHeight || '' }
                                onChange={handleChange}
                            />
                            <label htmlFor="adjustHeight">
                                Настройка высоты
                            </label>
                        </div>
                    </div>
                    {/* end of adjustHeight */}

                </form>
        </section>
    )
}

