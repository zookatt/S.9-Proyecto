import ropa from '../assets/images/ropa.jpg'
import tote from '../assets/images/tote.jpg'
import mug from '../assets/images/mug.jpg'
import phone from '../assets/images/phone.jpg'

import { Link } from 'react-router-dom'

export const ProductCards = () => {


    return (
        <section className='mb-12'>
            <div><h1 className='text-5xl font-bold text-center mb-5'>What we can personalize:</h1></div>
            <div className="flex flex-col sm:flex-row justify-center">
                <div className="card sm:w-1/4 w-full me-4 mb-5  shadow-xl">
                    <figure><img src={ropa} alt="Clothes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">T-SHIRTS</h2>
                        <p className=' font-bold'>Starting from 16.99€</p>
                        <p>Wear your personality, not just a shirt.</p>
                        <div className="card-actions justify-center">
                            <Link to="/products"><button className="btn sm:btn-md btn-sm text-white hover:bg-SkyBlue bg-SuperPink">See more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-1/4 w-full me-4 mb-5  shadow-xl">
                    <figure><img src={tote} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">TOTE BAGS</h2>
                        <p className=' font-bold'>Starting from 4.99€</p>
                        <p>Carry your essentials with flair, wherever you go.</p>
                        <div className="card-actions justify-center">
                            <Link to="/products"><button className="btn sm:btn-md btn-sm text-white hover:bg-SkyBlue bg-SuperPink">See more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-1/4 w-full me-4 mb-5 shadow-xl">
                    <figure><img src={mug} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">MUGS</h2>
                        <p className=' font-bold'>Starting from 5.99€</p>
                        <p> Sip on inspiration with every coffee break.</p>
                        <div className="card-actions justify-center">
                            <Link to="/products"><button className="btn sm:btn-md btn-sm text-white hover:bg-SkyBlue bg-SuperPink">See more</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-1/4 w-full me-4 mb-5  shadow-xl">
                    <figure><img src={phone} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  font-bold ">PHONE CASES</h2>
                        <p className=' font-bold'>Starting from 6.99€</p>
                        <p>Protect your device in style, because your phone deserves it.</p>
                        <div className="card-actions justify-center">
                            <Link to="/products"><button className="btn sm:btn-md btn-sm text-white hover:bg-SkyBlue bg-SuperPink">See more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
