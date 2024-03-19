import email from '../assets/images/email.png'
import instagram from '../assets/images/instagram.png'
import whats from '../assets/images/whats.png'

export const FooterBottom = () => {
    return (
        <section className="mt-4 md:flex justify-around md:gap-10 text-white">

            <div className='pl-6 mb-4 text-start' >
                <h2 className='font-bold  hover:text-SuperPink cursor-pointer text-3xl max-w-xs '>Torino Print</h2>
                <p className='text-white font-bold mt-2' style={{
                    background: 'linear-gradient(to right, #69C7EA 20%, #E8D20E 50%, #D71987 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Choose the design, <br /> we print it for you.</p>
            </div>
            <div className='pl-6 mb-4'>
                <h2 className='font-bold hover:text-SuperPink cursor-pointer text-2xl max-w-xs  '>Visit us</h2>
                <p className='text-white mt-2'>C/ de Mallorca, 370 <br /> Local, Eixample  <br /> 08013 Barcelona</p>
            </div>
            <div className='pl-6 mb-4 '>
                <h2 className='font-bold  hover:text-SuperPink cursor-pointer text-2xl max-w-xs '>Our contact</h2>
                <p className='text-white mt-2'>torinoprint@gmail.com</p>
                <p className='text-white'>Tel. +34 123 456 789</p>
            </div>
            <div className='pl-6 mb-4'>
                <h2 className='font-bold  hover:text-SuperPink cursor-pointer text-2xl max-w-xs '>Follow us</h2>
                <div className='flex mt-2'>
                    <div><a href="https://wa.me/653539287"><img src={whats} className="w-[35px]" alt="Whatsap" /></a></div>
                    <div><a href="mailto:zotova.ea@gmail.com"><img src={email} className="w-[35px] mx-4" alt="Email" /></a></div>
                    <div><a href="https://www.instagram.com/torinoprint370/"><img src={instagram} className="w-[35px]" alt="Instagram" /></a></div>
                </div>
            </div>

        </section>
    )
}


