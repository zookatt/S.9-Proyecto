import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import send from "../assets/images/send.gif";
export const Contact = () => {
  const [imageUrl, setImageUrl] = useState("");

  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };
  const saveInfo = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const newQuery = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      image: imageUrl,
      // Use imageUrl state here
    };

    // Function to save to Firestore
    try {
      await addDoc(collection(db, "contactform"), {
        ...newQuery,
      });
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
    openModal();
  };

  const fileHandler = async (e) => {
    const archiveI = e.target.files[0];
    const refArchive = ref(storage, `documents/${archiveI.name}`);
    await uploadBytes(refArchive, archiveI);
    urlImg = await getDownloadURL(refArchive);
    setImageUrl(urlImg);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Contact us</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={saveInfo} method="POST">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@mail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              ></textarea>
            </div>
            <div className="bg-gray-50 text-center px-4 mt-5 rounded w-100 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed mx-auto font-[sans-serif]">
              <div className="py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 mb-2 fill-gray-600 inline-block"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000"
                  />
                  <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000"
                  />
                </svg>
                <h4 className="text-base font-semibold text-gray-600">
                  Drag and drop files here
                </h4>
              </div>
              <hr className="w-full border-gray-400 my-2" />
              <div className="py-6">
                <input
                  type="file"
                  id="uploadFile1"
                  className="hidden"
                  onChange={fileHandler}
                  required
                />
                <label
                  for="uploadFile1"
                  className="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100"
                >
                  Browse Files
                </label>
                <p className="text-xs text-gray-400 mt-4">
                  Only PNG images are Allowed.
                </p>
              </div>
            </div>

            <div className="mx-auto text-center mt-5">
              <button className="hover:shadow-form rounded-md bg-SuperPink  py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Modal de éxito */}
      {saveInfo && (
        <>
          <button className="btn hidden" onClick={openModal}>
            open modal
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box justify-center">
              <img
                src={send}
                alt="robot"
                className=" mb-6"
                style={{ display: "block", margin: "0 auto", width: "200px" }}
              />
              <h2 className="text-2xl font-bold mb-4">
                Your email has been sent!
              </h2>
              <p className="text-gray-700 mb-2">
                Thank you for your message. We'll be back with you soon.
              </p>
              <form method="dialog" class="flex justify-end">
                <button className="btn">Close</button>
              </form>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};
