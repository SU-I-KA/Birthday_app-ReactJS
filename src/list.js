import React from 'react';
import { Fragment } from "react";


const List = ({people})=>{
    return(
    <section className='list_holder'>
        {people.map((person)=>{
            const {id,name,image,age} = person;
                return(
                    <div className='row' key={id}>
                        <div className='pic-wrap'>
                            <img src={image} alt={name} className='pic'/>
                        </div>
                        <div className='info'>
                            <h2>{name}</h2>
                            <p>{age} years</p>
                        </div>
                    </div>
                )
        })}
    </section>
    )
}

export default List;