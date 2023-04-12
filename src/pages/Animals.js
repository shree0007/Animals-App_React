import React from 'react';
import Card from '../UI/Card';
import Search from '../UI/Search';
import './Animals.css';



const Animals = (props) => {
    const searchFilter = props.data.filter(animal => {
        return animal.name.includes(props.searchInput)
    })
    return (
        <div>

            <h2>Animals {props.data.length}</h2>
            <Search searchHandler={props.searchHandler} />
            <div className='cards'>

                {searchFilter.map((item) => <Card
                    key={item.name}
                    name={item.name}
                    likes={item.likes}
                    removeCard={() => props.removeHandler(item.name)}
                    addLikes={() => props.likesHandler(item.name, 'add')}
                    removeLikes={() => props.likesHandler(item.name, 'remove')} />)}
            </div>
        </div>
    );
};

export default Animals;


