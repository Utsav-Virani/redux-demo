import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <CakeContainer />
                    <IceCreamContainer />
                </header>
            </div>
        </Provider>
    );
}

export default App;
