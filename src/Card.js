import React from 'react';
import './Card.css'

const Card = (props) => {
    return (

        <div className='card'>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} />
            <h3>{props.name}</h3>

            <button onClick={props.removeCard} className='cross'>x</button>


            <div className='buttons'>
                <button onClick={props.removeLikes} className='minus'>-</button>

                {props.likes >= 0 ? <p>❤️{props.likes}</p>

                    : <p>💔{props.likes}</p>}

                <button onClick={props.addLikes} className='plus'>+</button>
            </div>
        </div>

    );
};


export default Card;
