import axios from "axios";
import React, { useEffect } from "react";
import md5 from 'md5';

const publicKey = '73a123efb948c2d57d2387712f194cf8';
const privateKey = '8fd2a0768e3a349d9bafa27c3b9d19b5afbe433a';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const App: React.FunctionComponent = () => {
    useEffect(() => {
    axios
    .get(
        'http://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}',
        )
        .then(response => console.log(time, response))
        .catch(err => console.log(err));
}, []);
    return <h2>Heróis</h2>
};

export default App; 