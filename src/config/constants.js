import { swatch, fileIcon, galery, logoShirt, stylishShirt, battery, bella, red, wifi, ring } from "../assets";


export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "galerypicker",
    icon: galery,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};

export const GalleryImages = [
  { 
    id: 1, 
    src: ring, 
    title: 'Ring' 
  },

  { 
    id: 2, 
    src: bella, 
    title: 'Bella'
   },
  { 
    id: 3, 
    src: wifi, 
    title: 'Wifi' 
  },
  { 
    id: 4, 
    src: red, 
    title: 'Red' 
  },
  { 
    id: 5, 
    src: battery, 
    title: 'Battery' 
  },
  // Agrega más imágenes según sea necesario
];