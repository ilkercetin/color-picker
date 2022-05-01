import ColorWindow from "./Components/ColorWindow";
import {useState} from "react";

function App() {
    const [colors, setColors] = useState(generateRandom100Color);

    function refreshColors() {
        setColors(generateRandom100Color());
    }

    function generateRandom100Color() {
        let colorList = [];
        const letters = '0123456789ABCDEF'.split('');

        for (let i = 0; i < 50; i++) {
            let color = '#';

            for (let j = 0; j < 6; j++) {
                color += letters[Math.round(Math.random() * (letters.length - 1))];
            }

            colorList.push(color);
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
