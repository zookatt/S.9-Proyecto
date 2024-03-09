import {proxy} from 'valtio';

const state = proxy ({
intro: true,
color: "#EF4848",
isLogoTexture: true,
isFullTexture: false,
logoDecal: './torinologo.webp', // probar cambiar a ./torinologo.webp
fullDecal: './torinologo.webp' // probar cambiar a ./torinologo.webp
});

export default state;