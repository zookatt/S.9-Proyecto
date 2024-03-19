import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
    return (
        <footer className="bg-DarkBlue rounded-[20px] justify-evently items-start mb-8 mt-8">

            <div className="sm:w-full sm:w-1/2 mb-2 mt-4 p-5 mb-0">
                <iframe className="sm:w-[1200px]  md:h-[450px] md:w-full sm:h-[500px] h-[500px] mx-auto rounded-[20px]" title="Mapa de ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7553060992404!2d2.1702543765666626!3d41.40112009514261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3ed7f13ece3%3A0x605aa28767510871!2sTorino%20Print!5e0!3m2!1ses!2ses!4v1709573277676!5m2!1ses!2ses" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="px-4 py-3 text-start">
                <FooterBottom />
            </div>
        </footer >
    );
};
