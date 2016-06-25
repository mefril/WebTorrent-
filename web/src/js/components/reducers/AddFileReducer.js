import * as AddFileActions from './../actions/AddFileActions'

const uploadFile = (state = {}, file)=> {
    state = file[0];
    return state;
};
const updateName = (state = {}, name)=> {
    state.name = name;
    return state;
};
const updateDescription = (state = {}, description)=> {
    state.description = description;
    return state;
};

export default function (state = {}, action = null) {
    switch (action.type) {
        case AddFileActions.UPLOAD_FILE:
            return uploadFile(state, action.file);
        case AddFileActions.UPDATE_DESCRIPTION:
            return updateDescription(state, action.description);
        case AddFileActions.UPDATE_NAME:
            return updateName(state, action.name);
    }
    return state;
}