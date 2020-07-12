const initialState = () => {


    //components
    var Board = {
        selected : '',
        resource : '',
        status : '' 
    }

    var initialState = {
        root: 'ClientApp',
        boardComponent: Board,
        uploadComponent : '',
        selectedTab : 0
    }
    return initialState
}

export default initialState