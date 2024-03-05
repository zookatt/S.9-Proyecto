import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
    return (
        <footer className="bg-DarkBlue  justify-evently items-start mb-8">
            <div className="flex flex-col sm:flex-row px-4 py-6">
                <div className="sm:w-1/2 mb-4 sm:mb-0">
                    <iframe className="sm:w-[700px] h-[450px] w-full h-[500px]" title="Mapa de ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7553060992404!2d2.1702543765666626!3d41.40112009514261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3ed7f13ece3%3A0x605aa28767510871!2sTorino%20Print!5e0!3m2!1ses!2ses!4v1709573277676!5m2!1ses!2ses" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="sm:w-1/2 text-center">
                    <div>
                        <h1 className="text-5xl mb-3 font-bold text-white">Contact us</h1>
                        <p className="text-white">Tell us what's on your mind:</p>
                    </div>
                    <div className="w-full">
                        <ul className="mt-5">
                            <li><input type="text" placeholder="Full Name" className="input input-bordered input-warning mb-3 h-[35px] sm:w-3/4 w-full" /></li>
                            <li><input type="email" placeholder="Email" className="input input-bordered input-secondary h-[35px] mb-3 sm:w-3/4 w-full" /></li>
                            <li><input type="phone" placeholder="Phone number" className="input input-bordered input-primary mb-3 sm:w-3/4 w-full h-[35px] " /></li>
                            <li><input type="message" placeholder="Type your message here" className="input input-bordered input-accent mb-3 sm:w-3/4 w-full h-[200px] " /></li>
                            <button className="btn btn-info sm:w-3/4 w-full ">Send</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-4 py-6 text-start">
                <FooterBottom />
            </div>
        </footer >
    );
};
