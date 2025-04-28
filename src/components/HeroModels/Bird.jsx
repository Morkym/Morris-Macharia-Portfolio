import React, { useMemo, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function Bird(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/bird.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  console.log('GLTF Scene:', scene);
  console.log('GLTF Animations:', animations);

  React.useEffect(() => {
    if (actions) {
      // Play the first animation
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[-0.625, 0, -17.137]} rotation={[-Math.PI / 2, 0, 0.053]}>
          <group name="5f59736c86d4457fa045aec4aea6b7e0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="AMesh_Ride_FengHuang_01" rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.MatI_Ride_FengHuang_01a}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.MatI_Ride_FengHuang_01b}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/bird.glb');