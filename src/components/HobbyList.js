import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    listItem: PropTypes.array,
    active: PropTypes.number,
    onClickHobby: PropTypes.func,
};

HobbyList.defaultProps = {
    listItem: [],
    active: null,
    onClickHobby: null
};

function HobbyList(props) {
    const {listItem, active, onClickHobby} = props;
    function clickHobbyItem(hobby) {
        console.log(hobby);
        if (onClickHobby) {
            onClickHobby(hobby)
        }
    }
    return (
        <ul>
            {listItem.map((hobby) => (
                <li style={{cursor: "pointer"}} key={hobby.id}
                    onClick={() => clickHobbyItem(hobby)}
                    className={hobby.id === active ? 'active' : ''}
                >
                    {hobby.title}
                </li>
            ))}
        </ul>
    );
}

export default HobbyList;