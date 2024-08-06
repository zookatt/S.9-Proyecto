import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

export const Mug = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/ceramic_white_mug.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.Mug_White, snap.color, 0.25, delta),
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Mug_White}
        material-roughness={1}
        dispose={null}
        scale={[0.15, 0.25, 0.35]}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]} //{[0, 0.04, 0.15]}
            rotation={[0, 0, 0]} //{[0, 0, 0]}
            scale={0.25} //{0.25}
            map={logoTexture}
            mapAnisotropy={16} //{16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};
