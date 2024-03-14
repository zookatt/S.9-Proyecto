import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

export const ColorPicker = () => {

    const snap = useSnapshot(state);



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

            />
        </div>
    )
}
