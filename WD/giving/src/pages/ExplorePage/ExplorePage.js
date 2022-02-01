import React from 'react';
import firebase from '../firebase';
import FilterSearch from '../../components/research/FilterSearch/FilterSearch';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import Filter from '../../components/research/filter/Filter'
import Name from '../../components/research/Name';


function Explore () {

const Explore = async val => {
        this.setState({ loading: true });
        const res = await firebase(
          `https://giving-e14dd.firebaseio.com/name/${val}/name.json`
        );
        const name = await res.data.results;
    
        this.setState({ name, loading: false });
      };
    
      onChangeHandler = async e => {
        search(e.target.value);
        setState({ value: e.target.value });
      };
      


return (
    <div className='ExplorePage'>
        <div className='header-explore'>
            <Header />
        </div>
        <input
              value={this.state.value}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Search organisation by name"
        />
        <FilterSearch details={Explore}/>
        {this.renderNames}
        <div className='Filter-adjust'>
            <Link to={`/filterpage`}><button>
                Filter by category
            </button>
            </Link>
            </div>
    </div>  
    );
}

export default Explore;