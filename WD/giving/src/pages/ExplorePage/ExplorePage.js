import React, { useState, useEffect } from 'react';
import Filter from '../../components/research/filterButton/Filter';
import Footer from '../../components/Footer/Footer';
import SearchField from '../../components/research/searchFieldBar/searchField';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import NameList from '../../components/NameList/NameList'
    
function ExplorePage(props) {
    const [input, setInput] = useState('');
    const [nameListDefault, setNameListResults] = useState();
    const [nameList, setNameList] = useState();

    const fetchData = async () => {
        return await fetch('http://localhost:3000/explorepage')
          .then(response => response.json())
          .then(data => {
            setNameList(data) 
            setNameListResults(data)
           });}
    
      const updateInput = async (input) => {
         const filtered = nameListDefault.filter(name => {
          return name.organisation.toLowerCase().includes(input.toLowerCase())
         })
         setInput(input);
         setNameList(filtered);
      }
    
      useEffect( () => {fetchData()},[]);
 
return (    
    <>
        <div className='ExplorePage'>
        <Header />
        < br />

            <SearchField 
                 keyword={input}
                 setKeyword={updateInput}
             />
        <NameList nameList={nameList} />
        <Link to={`/FilterPage`}>
                <Filter className='filtering'>Filter by category</Filter>
            </Link>   
            <div className='ExplorePage-Organisation'>
             <h3>The top Organisations</h3>
            <Footer />
            < br />
        </div>
        </div>
            </>
    );
}     

export default ExplorePage;