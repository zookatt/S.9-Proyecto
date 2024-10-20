import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { Shirt } from "./Shirt";
import { CameraRig } from "./CameraRig";
import { Backdrop } from "./Backdrop";

export const CanvasModel = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full transition-all ease-in"
      >
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </>
  );
};
