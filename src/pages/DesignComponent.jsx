import { Customiser } from '../pages/Customiser'
import { CanvasModel } from '../canvasModel'
import { HomePageCustom } from '../pages/HomePageCustom'

export const DesignComponent = () => {
    return (
        <div className='flex flex-col justify-start h-screen w-full'>
            <HomePageCustom />
            <CanvasModel />
            <Customiser />
        </div>
    )
}


