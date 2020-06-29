const initialState = {
    list: [
        {
            id: 4206,
            title: 'Hello4206'
        },
        {
            id: 4207,
            title: 'Hello4206'
        },
        {
            id: 4208,
            title: 'Hello4206'
        },
        {
            id: 4209,
            title: 'Hello4206'
        },
        {
            id: 4210,
            title: 'Hello4206'
        },
        {
            id: 4211,
            title: 'Hello4206'
        }, {
            id: 4212,
            title: 'Hello4206'
        }, {
            id: 4213,
            title: 'Hello4206'
        },
        {
            id: 4214,
            title: 'Hello4206'
        }, {
            id: 4215,
            title: 'Hello4206'
        }, {
            id: 4216,
            title: 'Hello4206'
        },
        {
            id: 4217,
            title: 'Hello4206'
        },
        {
            id: 4218,
            title: 'Hello4206'
        }
    ],
    activeId: 4218
};

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_HOBBY": {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            };
        }

        case "SET_ACTIVE_HOBBY": {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId
            };
        }

        default:
            return state;
    }
};

export default hobbyReducer;

