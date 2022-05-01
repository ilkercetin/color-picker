import ColorWindow from "./Components/ColorWindow";
import {useState} from "react";

function App() {
    const [colors, setColors] = useState(generateRandom100Color);

    function refreshColors() {
        setColors(generateRandom100Color());
    }

    function generateRandom100Color() {
        let colorList = [];

        for (let i = 0; i < 100; i++) {
            let colorCode = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            colorList.push(colorCode);
        }

        return colorList;
    }

    return (
        <div className="App">
            <ColorWindow colors={colors} setColors={refreshColors}/>
        </div>
    );
}

export default App;
