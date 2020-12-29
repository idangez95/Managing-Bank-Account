import React, { Component} from 'react';
import axios from 'axios'

class Category extends Component {

    constructor() {
        super()
        this.state ={
            categories: []
        }
    }

    async componentDidMount() {
        const categories = await this.getCategories()
        this.setState({ categories: categories.data })
    }
    getCategories = async () => {
        return await axios.get("http://localhost:4200/categories")
    }

    render() {
        const categories = this.state.categories
        return(
            <div>
                {categories.map(c => {
                    return (
                        <div>
                        {c._id}: {c.totalAmount}
                        </div>
                    )
                })} 
            </div>
        )
    }
}


export default Category