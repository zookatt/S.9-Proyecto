
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


//import untitled from '../assets/images/Untitled.jpg'
import gradient from '../assets/images/gradient.jpg'


export const MainArticle = () => {


    return (
        <section className='mb-12'>
            <div className="flex flex-col sm:flex-row">
                <div className='sm:w-1/2 mx-3'>
                    {/* <img src={untitled} className='mb-5 sm:mb-5 align-self-center' style={{ width: "500px" }} alt="" /> */}
                    <h1 className="sm:text-[120px] text-[100px] font-bold lg:leading-none" style={{
                        background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>You <br />design, <br />we print </h1>
                </div>
                <div className='sm:w-1/2'>
                    <div className=" flex ms-5 carousel rounded-box">
                        {/* Aqui vendra un componente de personalizador */}
                        <div className="carousel-item">
                            <img src={gradient} className='justify-end' style={{ width: "500px" }} alt="Burger" />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

