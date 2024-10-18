import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import robot from "../assets/images/robot.gif";
import { useSnapshot } from "valtio";

import state from "../store";
import { download } from "../assets";
import {
  downloadCanvasToImage,
  reader,
} from "../components/3dModelComponent/config/helpers";
import {
  EditorTabs,
  FilterTabs,
  DecalTypes,
} from "../components/3dModelComponent/config/constants";
import {
  fadeAnimation,
  slideAnimation,
} from "../components/3dModelComponent/config/motion";
import {
  CustomButton,
  ColorPicker,
  FilePicker,
  Tab,
} from "../components/3dModelComponent";
import { storage } from "../firebase/firebase";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/authContext";

import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const Customiser = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useContext(authContext);
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");

  const [savedDesigns, setSavedDesigns] = useState([]);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
  const [canvaUrl, setCanvaUrl] = useState("");

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "galerypicker":
        return (
          <GaleryPicker

          // file={file}
          // setFile={setFile}
          // readFile={readFile}

          // prompt={prompt}
          // setPrompt={setPrompt}
          // generatingImg={generatingImg}
          // handleSubmit={handleSubmit}
          />
        );

      default:
        return null;
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };
  //================================================================

  const saveInfo = async (e) => {
    e.preventDefault();

    const newQuery = {
      image: canvaUrl, // Use imageUrl state here
    };

    // Function to save to Firestore
    try {
      await addDoc(collection(db, "savedCanvas"), {
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
    const refArchive = ref(storage, `canvas/${archiveI.name}`);
    await uploadBytes(refArchive, archiveI);
    url = await getDownloadURL(refArchive);

    // Update the imageUrl state with the URL of the uploaded image
    setImageUrl(url);
  };

  const saveDesignToFile = async (designData) => {
    try {
      const canvas = document.createElement("canvas");
      // Ajusta el tamaño del lienzo según tus necesidades
      canvas.width = 1000;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      saveInfo();
      fileHandler();
      // Dibuja tu diseño en el lienzo (aquí deberías tener lógica para dibujar tu diseño en el lienzo)

      // Convertir el lienzo a una imagen PNG
      const imgData = canvas.toDataURL("image/png");

      // Descargar la imagen
      downloadCanvasToImage(imgData, "my_design.png");

      // Mostrar un mensaje de éxito
      alert("Your design has been saved!");
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante el proceso de guardado
      console.error("Error saving design:", error);
      alert(
        "An error occurred while saving your design. Please try again later.",
      );
    }
  };
  //================================================================
  return (
    <>
      <AnimatePresence>
        {!snap.intro && (
          <>
            <motion.div
              key="custom"
              className="absolute top-0 left z-10"
              {...slideAnimation("left")}
            >
              <div className="flex items-center min-h-screen">
                <div className="editortabs-container tabs">
                  {EditorTabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => setActiveEditorTab(tab.name)}
                    />
                  ))}
                  {generateTabContent()}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="filtertabs-container"
              {...slideAnimation("up")}
            >
              {FilterTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab
                  isActiveTab={activeFilterTab[tab.name]}
                  handleClick={() => handleActiveFilterTab(tab.name)}
                />
              ))}
            </motion.div>

            <h1
              className="sm:text-4xl text-2xl font-bold leading-none text-center mb-5"
              style={{
                background:
                  "linear-gradient(to right, #0B4E9C 30%, #E8D20E 50%, #D71987 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Upload your design and choose a color of your T-Shirt!
            </h1>

            <div className="mt-4 flex flex-wrap gap-3 mb-5 md:w-1/2 mx-auto">
              <CustomButton
                type="filled"
                title="Go Back"
                handleClick={() => (state.intro = true)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

              <CustomButton
                type="outline"
                title="Save Your Design"
                handleClick={userLoggedIn ? saveDesignToFile : openModal}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

              {!userLoggedIn && (
                <>
                  <button className="btn hidden" onClick={() => openModal}>
                    open modal
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box justify-center">
                      <form method="dialog" class="flex justify-end">
                        <button className="btn mb-5">Close</button>
                      </form>
                      <img
                        src={robot}
                        alt="robot"
                        className=" mb-6"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          width: "200px",
                        }}
                      />
                      <h3 className="font-bold text-lg text-center">
                        Please, log in to save your design
                      </h3>

                      <div className="modal-action flex justify-center">
                        <Link to="/login">
                          <button
                            type="button"
                            className="btn btn-md  px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-DarkBlue hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Log In
                          </button>
                        </Link>
                        <Link to="/signup">
                          <button
                            type="button"
                            className="btn btn-md  px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-SuperPink  hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Sign Up
                          </button>
                        </Link>
                      </div>
                    </div>
                  </dialog>
                </>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
