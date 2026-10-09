# Web Pokédex

Pokédex web dei primi 151 Pokémon, realizzato in React con i dati di [PokeAPI](https://pokeapi.co/).

## Funzionalità

- Ricerca per nome o per numero del Pokédex, con debounce (300 ms)
- Card che caricano i dettagli solo quando le apri (tipi, altezza, peso)
- Pagina di profilo per ogni Pokémon con URL dinamico (`/pokemon/25`): artwork, abilità, statistiche base con barre e sprite
- Squadra di massimo 6 Pokémon, condivisa tra le pagine con React Context e salvata in `localStorage`
- Notifiche con React Toastify quando aggiungi un Pokémon o la squadra è piena
- Skeleton di caricamento, messaggi di errore, nessun risultato e pagina 404
- Layout responsive e tema chiaro o scuro in base alle impostazioni del sistema

## Tecnologie

- **React 19**: componenti, hook (`useState`, `useEffect`, `useMemo`, `useContext`) e custom hook
- **React Router 7**: pagine, layout condiviso e route dinamica
- **React Toastify** per le notifiche
- **Vite** come bundler
- **CSS** senza librerie, con variabili per il tema chiaro e scuro
- **ESLint**

## Come avviarlo

Requisiti: [Node.js](https://nodejs.org/) 20.19 o successivo.

```bash
git clone https://github.com/francescoesposito-geeks/web-pokedex.git
cd web-pokedex
npm install
npm run dev
```

Poi apri [http://localhost:5173](http://localhost:5173).

| Comando           | Cosa fa                                |
| ----------------- | -------------------------------------- |
| `npm run build`   | Build di produzione                    |
| `npm run preview` | Avvia la build di produzione in locale |
| `npm run lint`    | Controllo del codice con ESLint        |

Se pubblichi il sito su un hosting statico (Netlify, Vercel, GitHub Pages…), configura il reindirizzamento di tutte le pagine su `index.html`, altrimenti aprendo direttamente un indirizzo come `/pokemon/25` si ottiene un errore 404.

## Struttura del progetto

```
src/
├── components/   # card, griglia, ricerca, navbar, footer, badge dei tipi
├── context/      # TeamContext e TeamProvider: squadra condivisa e salvata
├── hooks/        # usePokedex, usePokemonDetails, usePokemonOpenDetails, useDebounce
├── pages/        # Home, profilo del Pokémon, squadra, About, 404
├── routes/       # percorsi delle pagine
├── styles/       # CSS
├── utils/        # funzioni di supporto (numero del Pokédex, unità di misura…)
├── App.jsx       # definizione delle route
└── main.jsx      # router, provider della squadra e notifiche
```

## Scelte tecniche

- Le card caricano i dettagli di un Pokémon solo la prima volta che vengono aperte, così all'avvio parte una sola richiesta invece di 151.
- In `localStorage` la squadra salva solo i dati che servono (numero, nome, tipi, altezza, peso, immagine) e non l'intera risposta dell'API. Se il dato salvato è rovinato, l'app riparte con una squadra vuota invece di bloccarsi.
- La pagina di profilo ignora le risposte arrivate in ritardo se nel frattempo si è passati a un altro Pokémon.

## Note

Progetto non commerciale realizzato come esercitazione durante lo stage da sviluppatore web presso Geekcreations S.r.l. (marzo–aprile 2026). Pokémon e i nomi dei personaggi sono marchi di Nintendo, Creatures Inc. e GAME FREAK inc. Dati e immagini provengono da PokeAPI.
