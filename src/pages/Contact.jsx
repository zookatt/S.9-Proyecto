import { FooterBottom } from "../components/FooterBottom"

import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from "../firebase/firebase"

export const Contact = () => {

    const [imageUrl, setImageUrl] = useState("");

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
            image: imageUrl // Use imageUrl state here
        };

        // Function to save to Firestore
        try {
            await addDoc(collection(db, "contactform"), {
                ...newQuery
            });
        } catch (error) {
            console.log(error);
        }

        e.target.reset();
    };

    const fileHandler = async (e) => {
        const archiveI = e.target.files[0];
        const refArchive = ref(storage, `documents/${archiveI.name}`);
        await uploadBytes(refArchive, archiveI);
        const url = await getDownloadURL(refArchive);

        // Update the imageUrl state with the URL of the uploaded image
        setImageUrl(url);
    };

    return (
        <div>
            <h1 className="font-bold text-3xl text-center">CONTACT US</h1>
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

                            ></textarea>
                        </div>
                        <div
                            className="bg-gray-50 text-center px-4 mt-5 rounded w-100 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed mx-auto font-[sans-serif]">
                            <div className="py-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mb-2 fill-gray-600 inline-block" viewBox="0 0 32 32">
                                    <path
                                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                        data-original="#000000" />
                                    <path
                                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                        data-original="#000000" />
                                </svg>
                                <h4 className="text-base font-semibold text-gray-600">Drag and drop files here</h4>
                            </div>
                            <hr className="w-full border-gray-400 my-2" />
                            <div className="py-6">
                                <input type="file"
                                    id='uploadFile1'
                                    className="hidden"
                                    onChange={fileHandler}
                                />
                                <label for="uploadFile1"
                                    className="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100">Browse Files</label>
                                <p className="text-xs text-gray-400 mt-4">Only PNG images are Allowed.</p>
                            </div>
                        </div>


                        <div className="mx-auto text-center mt-5">
                            <button
                                className="hover:shadow-form rounded-md bg-SuperPink  py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>





            <footer className="bg-DarkBlue rounded-[20px] justify-evently items-start mb-8 mt-8">

                <div className="sm:w-full sm:w-1/2 mb-4 p-5 mb-0">
                    <iframe className="sm:w-[1200px] h-[450px] w-full h-[500px] mx-auto" title="Mapa de ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7553060992404!2d2.1702543765666626!3d41.40112009514261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3ed7f13ece3%3A0x605aa28767510871!2sTorino%20Print!5e0!3m2!1ses!2ses!4v1709573277676!5m2!1ses!2ses" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="px-4 py-6 text-start">
                    <FooterBottom />
                </div>
            </footer >
        </div>
    )
}




// import { FooterBottom } from "../components/FooterBottom"
// import { db } from "../firebase/firebase"
// import { useState } from "react"
// import { addDoc, collection } from "firebase/firestore"

// export const Contact = () => {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [subject, setSubject] = useState("");
//     const [message, setMessage] = useState("");
//     const [userImg, setUserImg] = useState("");

//     const userCollectionRef = collection(db, "contactform");

//     const handleSubmit = () => {
//         addDoc(userCollectionRef, {
//             name: name,
//             email: email,
//             subject: subject,
//             message: message,
//             userImg: userImg
//         })

//     }
//     return (
//         <div>

//             <div className="flex items-center justify-center p-12">

//                 <div className="mx-auto w-full max-w-[550px]">
//                     <form action="https://formbold.com/s/FORM_ID" method="POST">
//                         <div className="mb-5">
//                             <label
//                                 for="name"
//                                 className="mb-3 block text-base font-medium text-[#07074D]"
//                             >
//                                 Full Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Full Name"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 onChange={(e) => { setName(e.target.value) }}
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label
//                                 for="email"
//                                 className="mb-3 block text-base font-medium text-[#07074D]"
//                             >
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="your@mail.com"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 onChange={(e) => { setEmail(e.target.value) }}
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label
//                                 for="subject"
//                                 className="mb-3 block text-base font-medium text-[#07074D]"
//                             >
//                                 Subject
//                             </label>
//                             <input
//                                 type="text"
//                                 name="subject"
//                                 id="subject"
//                                 placeholder="Enter your subject"
//                                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 onChange={(e) => { setSubject(e.target.value) }}
//                             />
//                         </div>
//                         <div className="mb-5">
//                             <label
//                                 for="message"
//                                 className="mb-3 block text-base font-medium text-[#07074D]"
//                             >
//                                 Message
//                             </label>
//                             <textarea
//                                 rows="4"
//                                 name="message"
//                                 id="message"
//                                 placeholder="Type your message"
//                                 className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 onChange={(e) => { setMessage(e.target.value) }}
//                             ></textarea>
//                         </div>
//                         <div
//                             className="bg-gray-50 text-center px-4 mt-5 rounded w-100 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed mx-auto font-[sans-serif]">
//                             <div className="py-6">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mb-2 fill-gray-600 inline-block" viewBox="0 0 32 32">
//                                     <path
//                                         d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
//                                         data-original="#000000" />
//                                     <path
//                                         d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
//                                         data-original="#000000" />
//                                 </svg>
//                                 <h4 className="text-base font-semibold text-gray-600">Drag and drop files here</h4>
//                             </div>
//                             <hr className="w-full border-gray-400 my-2" />
//                             <div className="py-6">
//                                 <input type="file"
//                                     id='uploadFile1'
//                                     className="hidden"
//                                     onChange={(e) => { setUserImg(e.target.value) }}
//                                 />
//                                 <label for="uploadFile1"
//                                     className="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100">Browse Files</label>
//                                 <p className="text-xs text-gray-400 mt-4">Only PNG images are Allowed.</p>
//                             </div>
//                         </div>


//                         <div className="mx-auto text-center mt-5">
//                             <button onClick={handleSubmit}
//                                 className="hover:shadow-form rounded-md bg-SuperPink  py-3 px-8 text-base font-semibold text-white outline-none"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>





//             <footer className="bg-DarkBlue rounded-[20px] justify-evently items-start mb-8 mt-8">

//                 <div className="sm:w-full sm:w-1/2 mb-4 p-5 mb-0">
//                     <iframe className="sm:w-[1200px] h-[450px] w-full h-[500px] mx-auto" title="Mapa de ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7553060992404!2d2.1702543765666626!3d41.40112009514261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3ed7f13ece3%3A0x605aa28767510871!2sTorino%20Print!5e0!3m2!1ses!2ses!4v1709573277676!5m2!1ses!2ses" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//                 </div>

//                 <div className="px-4 py-6 text-start">
//                     <FooterBottom />
//                 </div>
//             </footer >
//         </div>
//     )
// }