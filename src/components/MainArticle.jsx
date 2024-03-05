
// import untitled from '../assets/images/Untitled.jpg'



// export const MainArticle = () => {


//     return (
//         <section className='mb-12'>
//             <div className="flex">
//                 <div>
//                     <img src={untitled} className='mb-5 sm:mb-5 align-self-center' style={{ width: "500px" }} alt="" />
//                 </div>
//                 <div className=" ms-5 carousel rounded-box">
//                     <div className="carousel-item ">
//                         <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }


import untitled from '../assets/images/Untitled.jpg'
import gradient from '../assets/images/gradient.png'


export const MainArticle = () => {


    return (
        <section className='mb-12'>
            <div className="flex">
                <div className='w-1/2 mx-3'>
                    <img src={untitled} className='mb-5 sm:mb-5 align-self-center' style={{ width: "500px" }} alt="" />
                </div>
                <div className='w-1/2'>
                    <div className=" ms-5 carousel rounded-box">
                        <div className="carousel-item">
                            <img src={gradient} style={{ width: "700px" }} alt="Burger" />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

