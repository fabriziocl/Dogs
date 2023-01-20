import React, {useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments} from '../actions'


export default function CreateDog() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const history = useHistory();
    
    const [input, setInput] = useState({
      name: '',
      minHeight: '',
      maxHeight: '',
      minWeight: '',
      maxWeight: '',
      lifeSpan: '',
      image: '',
      temperaments: []
    })
    const [error, setError] = useState({
      name: '',
      minHeight: '',
      maxHeight: '',
      minWeight: '',
      maxWeight: '',
      lifeSpan: '',
      image: '',
      temperaments: ''
  });

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    function handleChange(e) {
        setInput(prevState => {
          const newState = {    
            ...prevState,
            [e.target.name]: e.target.value,
          };
          setError(validate(newState))    
          return newState                 
        })
      }

    function handleSelect(e){
      setInput({
        ...input,
        temperaments: [...input.temperaments, e.target.value]
      })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const newErrors = validate()
        setError(newErrors)
        if (Object.keys(newErrors).length === 0){
          dispatch(postDog({
            name: input.name,
            height: input.minHeight + ' - ' + input.maxHeight,
            weight: input.minWeight + ' - ' + input.maxWeight,
            lifeSpan: input.lifeSpan,
            image: input.image,
            temperament: [...input.temperaments]
          }))
          alert('New race successfully created!')
          setInput({
            name: '',
            minHeight: '',
            maxHeight: '',
            minWeight: '',
            maxWeight: '',
            lifeSpan: '',
            image: '',
            temperaments: []
        })
            history.push('/home')
        }
        
    }

    function handleTemperaments(e){
      setInput({
        ...input,
        temperaments: input.temperaments.filter((t) => t !== e)
      })
    }


    function validate(state = input){
      const errors = {}

      if (!state.name) errors.name = 'Race name is required'
      if (!/^[a-zA-Z\s]+$/.test(state.name)) errors.name = 'Race name is invalid'

      if (!state.minHeight) errors.minHeight = 'A minimum height is required'
      if (!/^\d*[1-9]\d*$/.test(state.minHeight)) errors.minHeight = 'A positive integer number is required'
      if (state.minHeight > 150) errors.minHeight = 'Value cannot be higher than 150cm'

      if (!state.maxHeight) errors.maxHeight = 'A maximum height is required'
      if (!/^\d*[1-9]\d*$/.test(state.maxHeight)) errors.maxHeight = 'A positive integer number is required'
      if (state.maxHeight > 200) errors.maxHeight = 'Value cannot be higher than 200cm'
      if (state.minHeight >= state.maxHeight) errors.minHeight = 'Minimum value must be lower than the maximum value'
      
      if (!state.minWeight) errors.minWeight = 'A minimum weight is required'
      if (!/^\d*[1-9]\d*$/.test(state.minWeight) ) errors.minWeight = 'A positive integer number is required'
      if (state.minWeight > 130) errors.minWeight = 'Value cannot be higher than 130kg'

      if (!state.maxWeight) errors.maxWeight = 'A maximum weight is required'
      if (!/^\d*[1-9]\d*$/.test(state.maxWeight)) errors.maxWeight = 'A positive integer number is required'
      if (state.maxWeight > 150) errors.maxWeight = 'Value cannot be higher than 150kg'
      if (state.minWeight >= state.maxWeight) errors.minWeight = 'Minimum value must be lower than the maximum value'
      
      if (!state.lifeSpan) errors.lifeSpan = 'Lifespan value is required'
      if (!/^\d*[1-9]\d*$/.test(state.lifeSpan)) errors.lifeSpan = 'A positive integer number is required'
      if (state.lifeSpan > 25) errors.lifeSpan = 'Value cannot be higher than 25 years'

      if (state.image.length === 0) errors.image = 'An image is required'
      if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(state.image)) {
        errors.image = 'A valid image link is required'
      }
      if (state.image.length >= 255) errors.image = 'Link is too long'

      if(state.temperaments.length === 0) errors.temperaments = 'At least one temperament is required'
      return errors
    }

    return (
      <div>
        <Link to='/home'>
          <button>Back</button>
        </Link>
        <h1>Create your own dog race!</h1>
        <p>Measures are metric, in centimeters and kilograms, and in average in adult life.</p>
        <form onSubmit={handleSubmit}>
          <label>New race name:</label>
            <br />
            <input 
            type="text" 
            name='name'
            autoComplete="off"
            onChange={handleChange}
            value={input.name}
            />
            {error.name && <p>{error.name}</p>}
            <br />

          <label>Minimum height:</label>
              <br />
              <input 
            type="number"
            name='minHeight'
            onChange={handleChange} 
            value={input.minHeight}
            />
            {error.minHeight && <p>{error.minHeight}</p>}
            <br />

          <label>Maximum height:</label>
            <br />
            <input 
            type="number"
            name='maxHeight'
            onChange={handleChange} 
            value={input.maxHeight}
            />
            {error.maxHeight && <p>{error.maxHeight}</p>}
            <br />

          <label>Minimum weight:</label>
            <br />
            <input 
            type="number"
            name="minWeight"
            onChange={handleChange}
            value={input.minWeight}
            />
            {error.minWeight && <p>{error.minWeight}</p>}
            <br />
          
          <label>Maximum weight:</label>
            <br />
            <input 
            type="number"
            name='maxWeight'
            onChange={handleChange}
            value={input.maxWeight}
            />
            {error.maxWeight && <p>{error.maxWeight}</p>}
            <br />

          <label>Lifespan:</label>
            <br />
            <input
            type="number" 
            name='lifeSpan'
            onChange={handleChange}
            value={input.lifeSpan}
            />
            {error.lifeSpan && <p>{error.lifeSpan}</p>}
            <br />
          
          <label>Image: (Valid formats: .jpg, .jpeg, .png, and .gif)</label>
            <br />
            <input
            type="url"
            name='image'
            autoComplete="off"
            onChange={handleChange}
            value={input.image}
            placeholder='https://example.com/image.jpg'
            />
            {error.image && <p>{error.image}</p>}
            <br />

          <label>Temperaments:</label>
            <br />
          <select onChange={handleSelect}>
            {temperaments?.map((t) => (
              t.name.length > 0 &&
              <option value={t.name}>{t.name}</option>
            ))}
          </select>
          {input.temperaments.map((e) => 
            <div >
              {e}
              <button 
              type="button"
              onClick={() => handleTemperaments(e)}
              >X</button>
            </div>)}
            <button type='submit' >Create dog race</button>
        </form>
        
        </div>
    )
}