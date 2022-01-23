import React from "react";
import Header from "../../components/header/header";
import searchField from "../../components/research/searchField"


function FilterResult() {
    return (
        <div className='FilterResult'>
            <Header />
        <div className='SearchByName'>
            <searchField />
            </div>
            </div>
    )
};

export default FilterResult