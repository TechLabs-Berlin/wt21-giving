import React from 'react';
import headerFilter from "../../components/header/headerFilter";
import CategorieListe from "../../components/research/CategorieListe.json"


function CategorieListe() {
return (
        <>
    <h2>'FilterByCategory'</h2>
<ul>
        {list.map(item => (
            <li key={item.id}>
                <div>{item.name}</div>
            </li>
        ))}
    </ul>
     </>
        );
    }
export default CategorieListe;