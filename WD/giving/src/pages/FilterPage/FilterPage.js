import React, { useState }  from 'react';
import Header from '../../components/header/header';


const categoryName = [
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
]

function CategorieListe() {
    const [setName, setSearchName] = useState(categoryName);

    return (
        <div className='Filterpage'>
            <Header />
            <label>Select a category:</label>
            <ul>
                {setName.map(categoryName => {
                    return <li key={categoryName}></li>})}
                </ul>
        </div>
    );
};
export default CategorieListe;

