import { swatch, fileIcon, galery, logoShirt, stylishShirt, sagrada, capy, red,  ring } from "../assets";


export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  // {
  //   name: "galerypicker",
  //   icon: galery,
  // },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  // {
  //   name: "stylishShirt",
  //   icon: stylishShirt,
  // },
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
    src: capy, 
    title: 'Capy'
   },
  
 
  { 
    id: 3, 
    src: sagrada, 
    title: 'sagrada' 
  },
  // Agrega más imágenes según sea necesario
];