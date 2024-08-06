import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

export const HomePageCustom = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="container mx-auto home"
          style={{ padding: "0" }}
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}></motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text desktop-visible">
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(to right, #0B4E9C 10%, #E8D20E 50%, #D71987 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PRINT <br className="xl:hidden" /> YOUR{" "}
                  <br className="xl:hidden" /> DREAM
                </span>
              </h1>
              <h1 className="text-8xl font-bold mobile-visible">
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(to right, #0B4E9C 10%, #E8D20E 50%, #D71987 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PRINT <br className="xl:hidden" /> YOUR{" "}
                  <br className="xl:hidden" /> DREAM
                </span>
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5 w-2/3 sm:w-1/3"
            >
              <p className="font-normal align-self-end">
                Create a unique and exclusive T-Shirt with our brand-new 3D
                customization tool.{" "}
                <strong> You choose the design, we print it for you. </strong>{" "}
              </p>
              <CustomButton
                type="filled"
                title="Try It Out"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
