//*******************************************frmulario****************************

import React, { useState} from 'react';
import './App.css'

interface Character {
    name: string;
    strength: number;
    intelligence: number;
    charisma: number;
}

export default function CharacterStats() {
    const [character, setCharacter] = useState<Character>({
        name: 'Gandalf',
        strength: 10,
        intelligence: 18,
        charisma: 16
    });

    function handleChange(e) {
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <label>
                Name:
                <input
                    name='name'
                    value={character.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Intelligence:
                <input
                    name='intelligence'
                    value={character.intelligence}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Charisma:
                <input
                    name='charisma'
                    value={character.charisma}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Strength:
                <input
                    name='strength'
                    value={character.strength}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}




// import React, { useState } from 'react';
// import './App.css';

// interface FranjaProps {
//   color: string;
//   onClick: () => void;
// }

// const Franja = ({ color, onClick }: FranjaProps) => {
//   return (
//     <div className="franja" style={{ backgroundColor: color }} onClick={onClick} />
//   );
// };

// const App: React.FC = () => {
//   const [colores, setColores] = useState<string[]>(['yellow', 'blue', 'red']);
//   const [mensaje, setMensaje] = useState<string | null>(null);

//   const handleClick = (color: string) => {
//     setMensaje(`Color: ${color} - Ecuador`);
//   };

//   return (
//     <div className="bandera">
//       <div className="mensaje">{mensaje}</div>
//       <div className="franjas-container">
//         {colores.map((color, index) => (
//           <Franja key={index} color={color} onClick={() => handleClick(color)} />
//         ))}
//       </div>
//     </div>
//   );
// };



// *************************************caritas aunmento******************************
// export default App;

// import React, { useState } from 'react';

// export default function EmojiIncrement() {
//     const [emojiString, setEmojiString] = useState('🤣');

//     return (
//         <>
//             <h1>{emojiString}</h1>
//             <button onClick={() => {
//                 setEmojiString(prevEmoji => prevEmoji + "🤣");
//                 setEmojiString(prevEmoji => prevEmoji + "🤣");
//                 setEmojiString(prevEmoji => prevEmoji + "🤣");
//             }}>Add 3 Caritas</button>
//         </>
//     );
// }






