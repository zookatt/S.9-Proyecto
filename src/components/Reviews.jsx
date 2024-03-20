import { useState, useEffect } from 'react';
import customersData from '../customers.json';
import google from "../assets/images/google.png"

export const Reviews = () => {
    const [customers, setCustomers] = useState([]); // Define el estado "customers" usando useState


    useEffect(() => {
        setCustomers(customersData); // Establece los datos del cliente utilizando el JSON importado
    }, []);


    return (
        <div className=" my-5 text-center">
            <a href='https://shorturl.at/bdzO0'><h1 className="font-bold text-[40px] mb-4">See what our clients think about us:</h1></a >
            <div className="h-96 carousel  border-2 border-gray-300 carousel-vertical rounded-box">
                {customers.map((customer, index) => (
                    <div key={index} className="carousel-item h-full py-4 justify-center" >
                        <div className="justify-center">
                            <div className="flex justify-center mt-8 mb-1 ">
                                <img src={customer.img} />
                            </div>
                            <div className="justify-center text-center font-semibold mb-1 sm:text-[18px] text-[14px]">{customer.customer}</div>
                            <div className="sm:w-2/3 mx-auto flex jusify-center  mb-1 text-black text-center sm:text-[20px] text-[16px] py-5 px-5">
                                {`"${customer.review}"`}
                            </div>
                            <div className="rating mb-1">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio " name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio " name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />
                                <input type="radio " name="rating-2" className="mask mask-star-2 bg-orange-400" disabled />

                            </div>
                            <div className="flex justify-center">
                                <a href='https://shorturl.at/bdzO0'><img src={google} alt="" draggable="false" className='w-[150px]' /></a>
                            </div>
                        </div>
                    </div>
                ))
                }


            </div >
        </div >

    )
}


//https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/ChIJ1X-Zm8KipBIRX5oB_SGG1UY/reviews
//falta account id
//17054405995437320540
//https://mybusiness.googleapis.com/v4/accounts/17054405995437320540/locations/ChIJ1X-Zm8KipBIRX5oB_SGG1UY/reviews




