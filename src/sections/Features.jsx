import { Center, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/Loader";
import { Character } from "../components/Character";
import { Laptop } from "../components/Laptop";
import { CircleGeometry } from "three";

const Features = () => {
  const [playWave, setPlayWave] = useState(false);
  const [playChickenDance, setPlayChickenDance] = useState(false);
  const [playHappy, setPlayHappy] = useState(false);
  const [buttonText, setButtonText] = useState("Install Rapid Shell for Alex"); // State for button text

  const handleWaveAnimation = () => {
    if (playChickenDance) {
      setPlayChickenDance(false);
    }
    if (!playWave) {
      setPlayHappy(true);
      setPlayWave(true);
      setTimeout(() => setPlayWave(false), 3000);
    }
  };

  const handleChickenDanceAnimation = () => {
    if (playWave) {
      setPlayWave(false);
    }
    if (!playChickenDance) {
      setPlayHappy(true);
      setPlayChickenDance(true);
      setTimeout(() => setPlayChickenDance(false), 5000);
    }

    // Change the button text after clicking
    setButtonText("Ask Alex To Dance");
  };

  return (
    <section className="flex flex-col w-full min-h-screen px-5 py-10">
      <div className="font-semibold text-4xl">Features</div>
      <div className="grid grid-cols-3 min-h-screen w-full grid-rows-3 gap-5 mt-5">
        <div className="rounded row-span-3 w-full h-full bg-gray-950">
          <Canvas>
            <ambientLight />
            <pointLight intensity={200} position={[10, 10, 10]} />
            <pointLight intensity={10} position={[0, 0, 5]} />
            <Center>
              <Suspense fallback={CanvasLoader}>
                <group scale={2.5} position={[-0.1, -2, 0]}>
                  <Character playWaveAnimation={playWave} playChickenDance={playChickenDance} playHappyAnimation={playHappy} />
                </group>
              </Suspense>
            </Center>
          </Canvas>
        </div>

        <div className="rounded col-span-2 w-full h-full bg-gray-800 row-span-2 py-10 px-10 flex flex-col gap-2">
          <div className="text-xl font-semibold text-gray-300">
            Meet Alex! He might look a little sad at first, but greet him, and he’ll quickly become your best buddy.
          </div>
          <button onClick={handleWaveAnimation} className="place-self-end text-lg font-bold bg-blue-600 hover:bg-blue-700 transition-colors rounded p-1 px-3 mb-2 text-white">
            Say Hi to Alex!
          </button>
          <div className="text-lg text-gray-400">
            Alex has been using the same old Linux terminal for years, unaware of what Rapid Shell has to offer. Here’s what’s in store for him:
          </div>
          <div className="text-lg text-gray-400 mt-4">
            <h3 className="text-lg font-semibold text-gray-300">Features of Rapid Shell:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
              <li><span className="font-bold text-gray-300">Speed Boost:</span> Commands run faster than ever.</li>
              <li><span className="font-bold text-gray-300">Smart Suggestions:</span> Helps Alex find the right commands as he types.</li>
              <li><span className="font-bold text-gray-300">Customizable Interface:</span> Personalize themes and layouts.</li>
              <li><span className="font-bold text-gray-300">Built-In Tools:</span> Handy tools like file managers and system monitors.</li>
            </ul>
          </div>
          <div className="text-lg text-gray-400 mt-4">
            Rapid Shell is ready to make Alex’s life simpler and faster. Once he tries it, there’s no going back!
          </div>
          <div className="flex">
          <button onClick={handleChickenDanceAnimation} className=" outline outline-white outline-offset-2 mt-4 w-fit text-lg font-bold bg-green-600 hover:bg-green-700 transition-colors rounded p-2 text-white">
            {buttonText} {/* Display the dynamic button text */}
          </button>
         {playHappy && ( // Only render this div when playHappy is true
    <div className="text-xl mt-4 w-fit p-2 px-10 font-semibold text-gray-700">
      I have Never Seen Alex this Happy
    </div>
  )}
          </div>
        </div>

        <div className="rounded col-span-2 w-full h-full row-span-auto bg-gray-800 flex gap-5 p-2">
          <div className="w-80 bg-gray-950 rounded">
            <Canvas shadows camera={{fov: 80 }}>
              <OrbitControls enableZoom={false}  enablePan={false} />
              
              <ambientLight intensity={0.3} />
              <Environment preset="night" />
              <fog attach="fog" args={['#0a0a0a', 5, 15]} />
              <pointLight shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
  shadow-camera-near={0.1}
  shadow-camera-far={50} castShadow intensity={500} position={[0, 5, 2]} />
              <Center>
                <Suspense fallback={CanvasLoader}>
                  <group castShadow scale={2.5} position={[0, -1, 0]} >
                    <Laptop />
                  </group>
                  <mesh receiveShadow position={[0, -2, 0]} rotation={[-3.14/2,0,0]}>
  <circleGeometry args={[10, 64]} />
  <meshStandardMaterial  color="#030712" receiveShadow />
</mesh>
                </Suspense>
              </Center>
            </Canvas>
          </div>
          <div className="w-full h-full flex gap-2 p-2 flex-col justify-center items-center">
            <div className="text-4xl text-gray-400 pixelated-text">
          Make Your Laptop as <span className="text-green-400">Powerful</span> as This <span className="text-green-00">Beast</span>! Install Rapid Shell
        </div>
        <div className="text-3xl text-gray-700 pixelated-text place-self-end px-4">~Rapid Shell</div>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
