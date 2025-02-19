import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperaments, filterByTemperament, userCreated, orderByNameOrWeight } from '../actions'
import { Link } from 'react-router-dom';
import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import st from './Home.module.css'
import Footer from "./Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const allTemperaments = useSelector((state) => state.temperaments)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const [order, setOrder] = useState('')
    const lastCharIndex = currentPage * dogsPerPage
    const firstCharIndex = lastCharIndex - dogsPerPage
    const currentDogs = allDogs.slice(firstCharIndex, lastCharIndex)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs())
    }

    function handleFilterByTemperament(e) {
        setCurrentPage(1)
        dispatch(filterByTemperament(e.target.value));
    }

    function handleUserCreated(e) {
        dispatch(userCreated(e.target.value))
        setCurrentPage(1)
    }

    function handleOrderByNameOrWeight(e) {
        e.preventDefault()
        dispatch(orderByNameOrWeight(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordering ${e.target.value}`)
    }

    return (
        <div className={st.container}>

            <div>
                <SearchBar
                    setCurrentPage={setCurrentPage}
                />
                <select onChange={handleFilterByTemperament}>
                    <option disabled selected>Filter by temperament</option>
                    {allTemperaments?.map(t => (
                        t.name.length > 0 &&
                        <option key={t.id} value={t.name}>{t.name}</option>
                    ))}
                </select>
                <select onChange={handleUserCreated}>
                    <option disabled selected>Filter by creation</option>
                    <option value="api">Dogs from The Dog API</option>
                    <option value="created">User created</option>
                </select>
                <select onChange={handleOrderByNameOrWeight}>
                    <option disabled selected>Order by name or weight</option>
                    <option value="asc">Name: ascending</option>
                    <option value="desc">Name: descending</option>
                    <option value="weight-asc">Weight: ascending</option>
                    <option value="weight-desc">Weight: descending</option>
                </select>
                <button onClick={e => handleClick(e)}>
                    Reset parameters
                </button>
                <Pagination
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    pagination={pagination}
                    currentPage={currentPage}
                />
                <div className={st.cardContainer}>
                    {currentDogs.length === 0 ? (
                        <>
                            <Skeleton className={st.skeletonImg} baseColor="#b0c4b1" highlightColor="#98b7a0" />
                            <Skeleton className={st.skeletonText} baseColor="#b0c4b1" highlightColor="#98b7a0" />
                            <Skeleton className={st.skeletonText} baseColor="#b0c4b1" highlightColor="#98b7a0" />
                        </>
                    ) : (
                        currentDogs?.map((e) => {
                            return (
                                <div key={e.id}>
                                    <Link to={'/dog-detail/' + e.id}>
                                        <Card
                                            name={e.name}
                                            image={e.image}
                                            temperament={e.temperament}
                                            temperaments={e.temperaments}
                                            weight={e.weight}
                                        />
                                    </Link>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}