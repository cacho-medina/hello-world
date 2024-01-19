import "./App.css";
import Mensaje from "./components/Mensaje";
import Mensaje2 from "./components/Mensaje2";
import Mensaje3 from "./components/Mensaje3";
function App() {
    return (
        <main>
            <Mensaje></Mensaje>
            <Mensaje2 mensaje={"mundoo"}></Mensaje2>
            <Mensaje3 mensaje={"mundooo"}></Mensaje3>
        </main>
    );
}

export default App;
