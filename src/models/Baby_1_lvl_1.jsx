/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/baby_1_lvl_1.gltf
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import startAnimation from '../helpers/startAnimation';

/*
eslint-disable react/no-unknown-property
*/

const Baby = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL+'/baby_1_lvl_1.gltf');
  const { actions, names } = useAnimations(animations, group);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    startAnimation(actions, names);
  }, [actions, names]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='ARMA_baby_1_lvl_1' position={[0, 0, 0.366]} rotation={[0, -1.087, 0]}>
          <primitive object={nodes.pelvis} />
          <skinnedMesh
            castShadow
            name='MESH_baby_1_lvl_1'
            geometry={nodes.MESH_baby_1_lvl_1.geometry}
            material={materials['Texture_capibara.005']}
            skeleton={nodes.MESH_baby_1_lvl_1.skeleton}
          />
        </group>
        <group name='ARMA_toy' position={[-1.447, -0.002, 1.399]}>
          <primitive  object={nodes.Bone} />
        </group>
      </group>
    </group>
  );
};

export default Baby;

useGLTF.preload('/baby_1_lvl_1.gltf');