import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EF4848",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./torinologo.webp", // probar cambiar a ./torinologo.webp
  fullDecal: "./torinologo.webp",
  //decals: [{id:1, src: 'bcnspain'}, {id:2, src: 'capy'},{id:3, src: 'sagrada'}]// probar cambiar a ./torinologo.webp
});

export default state;
