import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Easter egg console message
console.log(`
%c░█▀▀░█░█░█░░░█▀█░█▀▄░█▀▀░█▀▀░▀█▀░█▀▀░█░█░█▀▄░░░█▀▀░█▀█░█▀▄░█▀▀░█▀▀░▀█▀
%c░█▀▀░█▀█░█░░░█▀█░░▀▄░░▀▀█░█▀▀░░█░░█▀▀░█░█░█▀▄░░░█░█░█▀█░█░█░█░█░█▀▀░░█░
%c░▀▀▀░▀░▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀▀░▀░▀░░░▀▀▀░▀░▀░▀▀░░▀▀▀░▀▀▀░░▀░
`,
  'color: #00f0ff; font-weight: bold;',
  'color: #b026ff; font-weight: bold;',
  'color: #ff2d95; font-weight: bold;'
);

console.log(
  `%c🔍 Eh là, qui va là ? Inspecteur Gadget ! 🕵️`,
  'color: #39ff14; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #39ff14;'
);

console.log(
  `%c   Eh là, ça va pas ? Ouh ouh ! 🤖`,
  'color: #fff01f; font-size: 16px; font-style: italic;'
);

console.log(`
%c    ╔══════════════════════════════════════════════════════════╗
    ║  🎓 Bienvenue dans les coulisses de Genius Data Marketing! ║
    ║                                                            ║
    ║  Tu veux apprendre à coder comme un pro ?                  ║
    ║  Commence par maîtriser le Data Marketing ! 📊             ║
    ║                                                            ║
    ║  Made with ❤️ by Adrien Cerdan pour Ingemedia              ║
    ╚══════════════════════════════════════════════════════════╝
`,
  'color: #00f0ff; font-family: monospace;'
);

console.log(
  `%c⚡ Pro tip: Les vrais hackers lisent la doc avant de fouiller le code 😉`,
  'color: #ff6b35; font-size: 12px;'
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
