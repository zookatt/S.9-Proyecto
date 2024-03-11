import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

export const ColorPicker = () => {

    const snap = useSnapshot(state);

    const customStylesColors = {

        // Estilos para los colores predefinidos
        swatch: {
            width: '50px', // Ancho de las cajitas de colores
            height: '24px', // Altura de las cajitas de colores
            marginRight: '5px', // Espacio entre las cajitas de colores
            marginBottom: '5px', // Espacio entre las filas de cajitas de colores
            borderRadius: '3px', // Radio de borde de las cajitas de colores
            cursor: 'pointer', // Cambia el cursor al pasar sobre las cajitas de colores
        },
        // Estilos para la etiqueta del color predefinido
        swatchLabel: {
            display: 'none', // Oculta la etiqueta del color predefinido
        },
    };

    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker
                color={snap.color}
                disableAlpha
                // si quiero anadir colores persolanizados por defecto
                presetColors={[
                    '#0b4e9c', '#f0e62c', '#d71987', '#ffff', '#69c7ea', '#404040'
                ]}
                onChange={(color) => state.color = color.hex}
                styles={customStylesColors}
            />
        </div>
    )
}
