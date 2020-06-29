import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import HobbyList from "../components/HobbyList";
import {addNewHobby, setActiveHobby} from "../actions/hobby";

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000))
};

function HomePage(props) {
    //strict comparison === so sanh 2 object
    const  hobbyList = useSelector(state => state.hobby.list);
    const  activeId = useSelector(state => state.hobby.activeId);
    //shallowEqual comparison {a, b} {a, b} so sanh tung phan tu trong object
    // const  hobbyState = useSelector(state => ({
    //     list: state.hobby.list,
    //     activeId: state.hobby.activeId
    // }), shallowEqual);
    const dispatch = useDispatch();
    const  hanAddHobbyClick = () => {
        //random id + title
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: 'Hello' + newId
        };

        //dispatch action add a new redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    };
    const clickToItemHobby = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };

    return (
        <div>
            <h1>Redux Hook - Home page</h1>
            <button onClick={hanAddHobbyClick}>Random hobby</button>
            <HobbyList listItem={hobbyList} active={activeId} onClickHobby={clickToItemHobby}/>
        </div>
    );
}

export default HomePage;
