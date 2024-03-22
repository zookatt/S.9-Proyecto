

import ropa from '../assets/images/ropa.jpg'
import tote from '../assets/images/tote.jpg'
import mug from '../assets/images/mug.jpg'
import phone from '../assets/images/phone.jpg'

export const ProductCards = () => {


    return (
        <section className='mb-12'>
            <div><h1 className='text-5xl font-bold text-center mb-5'>What we can do:</h1></div>
            <div className="flex flex-col sm:flex-row justify-center">
                <div className="card sm:w-1/4 w-full me-4 mb-5 bg-SuperPink shadow-xl">
                    <figure><img src={ropa} alt="Clothes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">T-SHIRTS</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm btn-primary">See more</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-1/4 w-full me-4 mb-5 bg-SkyBlue shadow-xl">
                    <figure><img src={tote} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">TOTE BAGS</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm btn-primary">See more</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-1/4 w-full me-4 mb-5 bg-YellowSun shadow-xl">
                    <figure><img src={mug} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">MUGS</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm btn-primary">See more</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-1/4 w-full me-4 mb-5 bg-SkyBlue shadow-xl">
                    <figure><img src={phone} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">PHONE CASES</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-sm btn-primary">See more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
