import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/newCakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <CakeContainer />
                    <IceCreamContainer />
                    <NewCakeContainer />
                </header>
            </div>
        </Provider>
    );
}

export default App;
