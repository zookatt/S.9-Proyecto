import React, { useState } from 'react';
//import gradient from '../assets/images/gradient.png';
import dtg from '../assets/images/dtg.jpg';
import dtf from '../assets/images/dtf.jpg';
export const About = () => {

    // const [isSideBySide, setIsSideBySide] = useState(true); // State for layout

    // const toggleLayout = () => {
    //     setIsSideBySide(!isSideBySide); // Toggle layout on click
    // };

    return (
        <div className="container mx-auto">
            <h1 className="head-text" style={{
                background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }} >ABOUT US</h1>
            <p>
                We are Torino Print, your printing and souvenir shop in the heart of Barcelona. We are very excited to —finally— open the doors of our shop!
                Every day, we dive into the world of printed t-shirts and bags, investigating the latest trends. That is why in our store we focus on customization and design looking for a unique and personal result.
                But that is not all! We capture special and unrepeatable moments, making it possible to translate your photos and creations into prints, giving free rein to your imagination. You have the vision, and we make it happen!
                This space will be your window to what's new in our store and updates to our designs in action. We hope you enjoy them as much as we enjoy creating them with all our love.
            </p>

            <div>
                <h2 className="text-4xl font-bold text-start mt-5 mb-4" style={{
                    background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>DGT: Direct-to-Garment</h2>

                <div className="diff aspect-[8/4]">
                    <div className="diff-item-1">
                        <img alt="daisy" src={dtf} />
                    </div>
                    <div className="diff-item-2">
                        <img alt="daisy" src={dtg} />
                    </div>
                    <div className="diff-resizer"></div>
                </div>

                <h2 className="text-4xl font-bold text-end mt-5 mb-4" style={{
                    background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>DTF: Direct Transfer to Film</h2>
            </div>
            <div className="w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-center mt-5 mb-4" style={{
                    background: 'linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Frequently Asked Questions:</h2>
                <div className="collapse collapse-arrow bg-SkyBlue  mb-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        #1 How much time does it takes to print a T-Shirt?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eius, reiciendis quibusdam labore fuga voluptates fugit a eveniet laudantium ea ratione laboriosam, optio, tempore rem amet alias? Sunt, numquam nulla?</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-SuperPink mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        #2 How to wash clothes printed with DGT?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos beatae modi pariatur dolore dolorem quod odio totam, cum neque ab praesentium optio laudantium maxime fugit corporis laborum enim. Iusto, culpa?</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-YellowSun mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        #3 I have a design that i want to print on a T-Shirt. Can you do it?
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur tenetur recusandae odio vel eum laudantium dolor velit! Totam corrupti nesciunt ex exercitationem perferendis possimus minus non vel aliquid debitis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}