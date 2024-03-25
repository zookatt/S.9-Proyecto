
// import gradient from '../assets/images/gradient.jpg'
// import { Customiser } from '../pages/Customiser'
// import { CanvasModel } from '../canvasModel'
// import { HomePageCustom } from '../pages/HomePageCustom'
// import { Link } from 'react-router-dom'
// export const MainArticle = () => {


//     return (
//         <section className='container mx-auto mb-12'>
//             <div className="flex flex-col sm:flex-row">
//                 <div className='sm:w-1/2 mx-3'>
//                     {/* <img src={untitled} className='mb-5 sm:mb-5 align-self-center' style={{ width: "500px" }} alt="" /> */}
//                     <h1 className="sm:text-[125px] text-[98px] font-bold leading-none mb-5" style={{
//                         background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent'
//                     }}>You <br />design, <br />we print </h1>
//                 </div>
//                 <div className='sm:w-1/2 justify-start'>
//                     {/* Aqui vendra un componente de personalizador */}
//                     <Link to="/design">
//                         <CanvasModel />
//                         <Customiser />
//                     </Link>
//                 </div>
//             </div>

//         </section >
//     )
// }


import gradient from '../assets/images/gradient.jpg'
import { Customiser } from '../pages/Customiser'
import { CanvasModel } from '../canvasModel'
import { HomePageCustom } from '../pages/HomePageCustom'
import { Link } from 'react-router-dom'
import { DesignComponent } from '../pages/DesignComponent'
export const MainArticle = () => {


    return (
        <section className='container mx-auto mb-5'>

            <DesignComponent />

        </section >
    )
}
