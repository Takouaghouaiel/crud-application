import { applyMiddleware ,compose ,createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
)
// hatina l applymiddleware fil faza mta3 l compose bch najmou nestaamlou redux devtool(visulaisation du state)
// The thunk is executed by the middleware before the action is passed to the reducer.
export default store ;