import React, { Component } from 'react';
import Header from '../../components/header/header';
import Button from '../../components/button/Button';
import './FilterPage.css';
class List extends Component {
    categories = [
        {
            ID: 1, name: 'Animals'
        },
        {
            ID: 2, name: 'Arts'
        },
        {
            ID: 3, name: 'Culture'
        },
        {
            ID: 4, name: 'Humanities'
        },
        {
            ID: 5, name: 'Community Development'
        },
        {
            ID: 6, name: 'Environment'
        },
        {
            ID: 7, name: 'Human and Civil Rights'
        },
        {
            ID: 8, name: 'Human Services'
        },
        {
            ID: 9, name: 'Human Services International'
        },
        {
            ID: 10, name: 'Religion'
        },
        {
            ID: 11, name: 'Research and Public Policy'
        }
    ];
 
    categoryList = this.categories.map(category => (
        <Category name={category.name} />
    ));

    render() {
        return (
            <div className='Filterpage'>
                <Header />
                <div className='filter'>
                <h2>Filter by category</h2>
                </div>
                <div className='filter-list'>
                    {this.categoryList}
                </div>
                <Button text='Apply'/>
                </div>
        );
    }
}
const Category = props => {
    return (
        <div className="Filterpage">
            {props.name}
        </div>
    );
}
         
export default List;