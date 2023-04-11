import React from 'react';
import Card from './Card';
import Search from './Search'
import './Animals.css'


const Birds = (props) => {
    const searchFilter = props.data.filter(bird => {
        return bird.name.includes(props.searchInput)
    })
    return (
        <div>
            <h2>Birds {props.data.length}</h2>
            <Search searchHandler={props.searchHandler} />
            <div className='cards'>

                {searchFilter.map((item) => <Card
                    key={item.name}
                    name={item.name}
                    likes={item.likes}
                    removeCard={() => props.removeHandler2(item.name)}
                    addLikes={() => props.likesHandler2(item.name, 'add')}
                    removeLikes={() => props.likesHandler2(item.name, 'remove')} />)}
            </div>
        </div>
    );
};

export default Birds;