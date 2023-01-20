import React from 'react';
import st from './Pagination.module.css';

export default function Pagination({ currentPage, dogsPerPage, allDogs, pagination }) {
    const pageNumbers = [];

    for (let i = 0; i <= Math.floor(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i+1);
    }

    return (
        <nav>
            <ul className={st.pagination}>
                {pageNumbers && pageNumbers.map(num => (
                    <li key={num} className={st.number}>
                        <button className ={`${st.button} ${currentPage === num ? st.active : ''}`}
                         onClick={() => pagination(num)}>
                            {num}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}