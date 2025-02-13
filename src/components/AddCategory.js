import React, {useState} from 'react'


export const AddCategory = ({setHeroes}) => {
    const [submit, setSubmit] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submit.trim().length >= 2){
            setHeroes( event => [submit, ...event] );
            setSubmit('');    
        }
        
    }

    const handleChange =  (e) => {
        setSubmit(e.target.value)
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={submit}
            onChange={handleChange}
        ></input>
    </form>
  )
}
