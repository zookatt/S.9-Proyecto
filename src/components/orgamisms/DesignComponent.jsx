import { Customiser } from "../../pages/Customiser";
import { CanvasModel } from "../3dModelComponent";
import { HomePageCustom } from "../../pages/HomePageCustom";
export const DesignComponent = () => {
  return (
    <div className="flex flex-col justify-start h-screen  md:w-full  mx-auto ">
      <HomePageCustom />
      <CanvasModel />
      <Customiser />
    </div>
  );
};
