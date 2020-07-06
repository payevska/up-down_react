import React, { Component } from 'react'
import items from './data'

const ProductsContext = React.createContext();

class ProductsProvider extends Component {
    state = {
        products: [],
        sortedProducts: [],
        featuredProducts: [],
        loading: true,
        type: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        upDown: false,
    };

    //getData
    componentDidMount() {
        // this.getData
        let products = this.formatData(items);
        let featuredProducts = products.filter(products => products.featured === true);
        let maxPrice = Math.max(...products.map(item => item.price));

        this.setState({
            products,
            featuredProducts,
            sortedProducts: products,
            loading: false,
            price: maxPrice,
            maxPrice
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let product = {...item.fields,images,id};
            return product;
        })
        return tempItems;
    }

    getProduct = (slug) => {
        let tempProducts = [...this.state.product];
        const product = tempProducts.find(product => product.slug === slug);
        return product;
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        },this.filterProducts)
    }

    


}

