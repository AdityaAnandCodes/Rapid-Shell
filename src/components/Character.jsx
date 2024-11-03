import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function Character({ playWaveAnimation, playChickenDance, playHappyAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Kid.glb');
  const { actions } = useAnimations(animations, group);

  // Helper function to play an animation
  const playAnimation = (actionName, loopOnce = true, fadeInDuration = 0.5) => {
    // Fade out currently playing animations except the target action
    Object.values(actions).forEach(action => {
      if (action.isRunning() && action !== actions[actionName]) {
        action.fadeOut(0.3);
      }
    });

    // Reset and play the specified action with a fade-in effect
    actions[actionName].reset().fadeIn(fadeInDuration).play();
    
    if (loopOnce) {
      actions[actionName].setLoop(THREE.LoopRepeat); // Loop continuously
    } else {
      actions[actionName].setLoop(THREE.LoopOnce);
      actions[actionName].clampWhenFinished = true;
    }
  };

  useEffect(() => {
    // Initially play SadIdle in a loop
    playAnimation('SadIdle', true, 0.5);
  }, [actions]);

  useEffect(() => {
    if (playWaveAnimation) {
      playAnimation('Wave', true, 0.5);
    } else if (playChickenDance) {
      playAnimation('ChickenDance', true, 0.5);
    } 
     else if(playHappyAnimation && !playWaveAnimation && !playChickenDance){
      playAnimation('IdleHappy', true, 0.5);
     }
    else {
      // Switch back to IdleHappy when no animations are playing
      playAnimation('SadIdle', true, 0.5);
    }
  }, [playWaveAnimation, playChickenDance, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature003" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Ch09"
            castShadow
            geometry={nodes.Ch09.geometry}
            material={materials.Ch09_body}
            skeleton={nodes.Ch09.skeleton}
          />
          <primitive object={nodes.mixamorig6Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/Kid.glb');
