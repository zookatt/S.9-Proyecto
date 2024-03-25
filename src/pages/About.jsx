import React, { useState } from 'react';
import dtg from '../assets/images/dtg.png';
import dtf from '../assets/images/dtf.png';
import sub from '../assets/images/sub.png';

export const About = () => {

    return (
        <div className="container mx-auto mt-5">
            <h1 className="sm:text-6xl text-7xl font-bold mb-5" style={{
                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }} >ABOUT US</h1>
            <p>
                We are Torino Print, your printing and souvenir shop in the heart of Barcelona. We are very excited to —finally— open the doors of our shop!
                Every day, we dive into the world of printed t-shirts and bags, investigating the latest trends. That is why in our store we focus on customization and design looking for a unique and personal result.
                But that is not all!
            </p>
            <p className='mt-2'>
                We capture special and unrepeatable moments, making it possible to translate your photos and creations into prints, giving free rein to your imagination. You have the vision, and we make it happen!
                This space will be your window to what's new in our store and updates to our designs in action. We hope you enjoy them as much as we enjoy creating them with all our love.
            </p>

            <div>
                <h2 className="text-4xl font-bold text-start mt-5 mb-4" style={{
                    background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>DGT: Direct-to-Garment</h2>

                <div className='flex flex-col sm:flex-row'>
                    <div className='sm:w-1/2 flex justify-center '><img src={dtg} alt="" style={{ width: "500px" }} /></div>
                    <div className='sm:w-1/2 flex flex-col justify-center items-center'>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>WHAT IS IT</h1>
                            <p className='text-start mt-3'> DTG printing directly applies ink onto garments using specialized printers, allowing for detailed, full-color designs without the need for screens or plates.</p>
                        </div>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>HOW WE DO IT</h1>
                            <p className='text-start mt-3 mb-3'> Designs are digitally printed onto garments using DTG printers, providing high-quality, precise prints with vibrant colors and soft textures.</p>
                        </div>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>PRODUCTS</h1>
                            <p className='text-start  mt-3 mb-3'> DTG printing is ideal for cotton and cotton-blend garments, making it perfect for T-shirts, sweatshirts, and other apparel requiring complex designs.</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl font-bold text-start mt-5 mb-4" style={{
                    background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>DTF: Direct Transfer to Film</h2>

                <div className='flex flex-col sm:flex-row'>
                    <div className='sm:w-1/2  flex flex-col justify-center items-center'>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>WHAT IS IT</h1>
                            <p className='text-start mt-3'> DTF printing involves transferring designs from a specialized film onto garments using heat and pressure, resulting in vibrant, detailed prints.</p>
                        </div>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>HOW WE DO IT</h1>
                            <p className='text-start mt-3 mb-3'> Designs are printed onto a special film, then transferred onto garments with a heat press, allowing for intricate detail and vivid colors.</p>
                        </div>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>PRODUCTS</h1>
                            <p className='text-start  mt-3 mb-3'> DTF printing is suitable for various fabrics, including cotton, polyester, and blends, making it ideal for T-shirts, hoodies, and more.</p>
                        </div>
                    </div>
                    <div className='sm:w-1/2 flex justify-center'><img src={dtf} alt="" style={{ width: "600px" }} /></div>
                </div>
                <h2 className="text-4xl font-bold text-start mt-5 mb-4" style={{
                    background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Sublimation Printing</h2>
                <div className='flex flex-col sm:flex-row'>
                    <div className='sm:w-1/2 flex justify-center'><img src={sub} alt="" style={{ width: "500px" }} /></div>
                    <div className='sm:w-1/2 flex flex-col justify-center items-center'>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }} >WHAT IS IT</h1>
                            <p className='text-start mt-3'> Sublimation printing involves transferring designs from a special ink onto a substrate using heat, resulting in permanent, vibrant prints that are embedded into the material.</p>
                        </div>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>HOW WE DO IT</h1>
                            <p className='text-start mt-3 mb-3'> Designs are printed onto sublimation paper with specialized inks, then heat transferred onto polyester-based substrates, such as garments, mugs, and phone cases.</p>
                        </div>
                        <div className=' mb-5'>
                            <h1 className='text-3xl text-start' style={{
                                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>PRODUCTS</h1>
                            <p className='text-start  mt-3 mb-3'> Sublimation printing works best on polyester-based products, including apparel, mugs, mousepads, and other items requiring all-over or full-color designs.</p>
                        </div>
                    </div>
                </div>
            </div>


            <h2 className="text-5xl font-bold text-center mt-5 mb-4" style={{
                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>Frequently Asked Questions:</h2>
            <div className=" flex flex-col sm:flex-row justify-center mx-auto">
                <div className='sm:w-1/2'>
                    <div className="collapse collapse-arrow mt-3 mb-3">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            #1 How much time does it takes to print a T-Shirt?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius, reiciendis quibusdam labore fuga voluptates fugit a eveniet laudantium ea ratione laboriosam, optio, tempore rem amet alias? Sunt, numquam nulla?</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            #2 How to wash clothes printed with DGT?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos beatae modi pariatur dolore dolorem quod odio totam, cum neque ab praesentium optio laudantium maxime fugit corporis laborum enim. Iusto, culpa?</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            #3 I have a design that i want to print on a T-Shirt. Can you do it?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur tenetur recusandae odio vel eum laudantium dolor velit! Totam corrupti nesciunt ex exercitationem perferendis possimus minus non vel aliquid debitis.</p>
                        </div>
                    </div>
                </div>
                <div className='sm:w-1/2'>
                    <div className="collapse collapse-arrow mt-3 mb-3">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            #4 Which tecnics is better to personalize a cup?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius, reiciendis quibusdam labore fuga voluptates fugit a eveniet laudantium ea ratione laboriosam, optio, tempore rem amet alias? Sunt, numquam nulla?</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            #5 Can you create a special design for me?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos beatae modi pariatur dolore dolorem quod odio totam, cum neque ab praesentium optio laudantium maxime fugit corporis laborum enim. Iusto, culpa?</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  mb-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            #6 Which color of a T-Shirt I can choose?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur tenetur recusandae odio vel eum laudantium dolor velit! Totam corrupti nesciunt ex exercitationem perferendis possimus minus non vel aliquid debitis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}