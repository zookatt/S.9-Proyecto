import canvas_capy from '../assets/canvas_capy.png'
import peace from '../assets/peace.png'

import ropa from '../assets/images/ropa.jpg'
import tote from '../assets/images/tote.jpg'
import mug from '../assets/images/mug.jpg'
import phone from '../assets/images/phone.jpg'
import acrylic from '../assets/images/acryl.jpg'

export const Products = () => {
    return (
        <div>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Featured Products</h1>
            </div>

            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={ropa} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={tote} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={mug} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={phone} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={acrylic} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
            </div>


            <div className="text-center ">
                <h1 className="font-bold text-4xl mb-4">Our Design</h1>
            </div>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={ropa} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={tote} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={mug} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={phone} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={acrylic} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
            </div>

            <div className="text-center ">
                <h1 className="font-bold text-4xl mb-4">Custom Design</h1>
            </div>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src={ropa} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={tote} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={mug} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={phone} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
                <div className="carousel-item">
                    <img src={acrylic} alt="Pizza" style={{ width: "300px", height: "300px" }} />
                </div>
            </div>

            <div className="text-center ">
                <h1 className="font-bold text-4xl mb-4">Prices</h1>
            </div>

            {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src={canvas_capy}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">T-Shirt</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Don't Worry Be Capy</p>
                            <div className="flex items-center">
                                <p className="text-md  text-black  text-black cursor-auto my-3">Starting from 16.99€</p>
                            </div>

                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 1 - Ends Here  -->

                <!--   ✅ Product card 2 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src={peace}
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span class="text-gray-400 mr-3 uppercase text-xs">T-SHIRT</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Peace Was Never An Option</p>
                            <div className="flex items-center">
                                <p className="text-md  text-black cursor-auto my-3">Starting from 16.99€</p>

                                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 2- Ends Here  -->

                <!--   ✅ Product card 3 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 3 - Ends Here  -->

                <!--   ✅ Product card 4 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 4 - Ends Here  -->

                <!--   ✅ Product card 5 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 5 - Ends Here  -->

                <!--   ✅ Product card 6 - Starts Here 👇 --> */}
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!--   🛑 Product card 6 - Ends Here  --> */}

            </section>

            {/* <!-- 🛑 Grid Section - Ends Here --> */}

        </div>
    )
}