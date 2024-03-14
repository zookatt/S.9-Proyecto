import { MainArticle } from '../components/MainArticle.jsx'
import { ProductCards } from '../components/ProductCards.jsx'
import { Reviews } from '../components/Reviews.jsx'
import { useEffect } from 'react'
import cookie from "../assets/images/cookie.png"
export const Home = () => {

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('my_modal_1').showModal();
        }, 2000); // 2000 milisegundos = 2 segundos
    }, []);
    return (
        <div>
            <MainArticle />
            <ProductCards />
            <Reviews />

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hidden" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box justify-center">
                    <img src={cookie} alt="cookie" className=' mb-6' style={{ display: "block", margin: "0 auto", width: "70px" }} />
                    <h3 className="font-bold text-lg text-center">We use cookies</h3>
                    <p className="py-4">Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies. {" "}Please, accept these sweeties to continue enjoying our site!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Accept</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </div >
    )
}


