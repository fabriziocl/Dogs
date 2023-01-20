import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../actions'
import { useEffect } from "react";
import { clearPage } from "../actions";
import st from './Detail.module.css'

export default function Detail(props) {
    console.log(props)

    const dispatch = useDispatch();
    const { id } = useParams(state => state.detail)

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(clearPage())
        }
    }, [dispatch, id]);
   
    const dog = useSelector((state) => state.detail)
    // const temperament = dog[0].temperament
    console.log(dog[0])
    return (
        <div>
            {
                dog.length > 0 ?
                    <div className={st.card}>
                        <h1>{dog[0].name}</h1>
                        <img src={dog[0].image} alt={dog[0].name} height="500px" ></img>
                        <h3>Temperaments: </h3>
                        <h5>{dog[0].temperament ? dog[0].temperament : 
                                dog[0].temperaments?.map(d => d.name).join(', ')}</h5>
                        <h3>Height: </h3>
                        <h5>{dog[0].height + " cm"}</h5>
                        <h3>Weight: </h3>
                        <h5>{!dog[0].weight.includes("NaN") ? dog[0].weight + " kg" : "Unknown weight"}</h5>
                        <h3>Lifespan: </h3>
                        <h5>{dog[0].lifeSpan.includes("years") ? dog[0].lifeSpan : dog[0].lifeSpan + " years"}</h5>
                    </div> :
                    <p><strong>Loading...</strong></p>
            }
            <Link to='/home'>
                <button>
                    Home
                </button>
            </Link>
        </div>
    )
}