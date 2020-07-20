import React, { Component } from 'react'
import items from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        sortedProducts: [],
        //featuredProducts: [],
        loading: true,
        //
        type: "all",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        adjustHeigh: false,
    };

    //getData
    componentDidMount() {
        // this.getData
        let products = this.formatData(items);
        //let featuredProducts = products.filter(product => product.featured === true);
        let maxPrice = Math.max(...products.map(item => item.price));

        this.setState({
            products,
            //featuredProducts,
            sortedProducts: products,
            loading: false,
            //
            price: maxPrice,
            maxPrice,
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
    };

    getProduct = (slug) => {
        let tempProducts = [...this.state.products];
        const product = tempProducts.find(product => product.slug === slug);
        return product;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState(
            {
                [name]: value
            },
            this.filterProducts
        );
    };

    filterProducts = () => {
        let {
            products,
            type,
            price,
            adjustHeight
        } = this.state;

        // all the products
        let tempProducts = [...products];
// transform value
        price = parseInt(price)

//filter by type
        if (type !== "all") {
            tempProducts = tempProducts.filter(product => product.type === type );
        }

//filter by price
        tempProducts = tempProducts.filter(product => product.price <= price );

//filter by adjustHeight
        if(adjustHeight) {
            tempProducts = tempProducts.filter(product => product.adjustHeight === true );
        }

        this.setState({
            sortedProducts: tempProducts
        });
    };

    render() {
        return (
            <ProductContext.Provider 
            value={{ 
                ...this.state,  
                getProduct: this.getProduct,
                handleChange: this.handleChange 
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;


export function withProductConsumer(Component) {


    return function ComsumerWrapper(props) {
        
        return (
        <ProductConsumer>
            {value => <Component {...props} context={value}/>}
        </ProductConsumer>
        );
    };
}

export { ProductProvider, ProductConsumer, ProductContext };



