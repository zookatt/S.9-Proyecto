import { MainArticle } from "../components/orgamisms/MainArticle.jsx";
import { ProductCards } from "../components/molecules/ProductCards.jsx";
import { Reviews } from "../components/orgamisms/Reviews.jsx";
import { useEffect } from "react";
import cookie from "../assets/images/cookie.png";
export const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("my_modal_1").showModal();
    }, 2000); // 2000 milisegundos = 2 segundos
  }, []);
  return (
    <div>
      <MainArticle />
      <ProductCards />
      <Reviews />

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn hidden" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box justify-center">
                    <img src={cookie} alt="cookie" className=' mb-6' style={{ display: "block", margin: "0 auto", width: "70px" }} />
                    <h3 className="font-bold text-lg text-center">We use cookies</h3>
                    <p className="py-4">Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies. {" "}Please, accept these sweeties to continue enjoying our site!</p>
                    <div className="modal-action flex">
                        <form method="dialog ">
                            <button className="btn me-2">Accept</button>
                        </form>
                        <form method="dialog">
                            <button className="btn">No, I'm on a diet</button>
                        </form>
                    </div>
                </div>
            </dialog > */}
    </div>
  );
};
