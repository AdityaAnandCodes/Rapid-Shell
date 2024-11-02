import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from 'react'

const Installation = () => {
  const faceMaskRef = useRef(null);

  useGSAP(() => {
    const faceMask = faceMaskRef.current;

    // Basic up-down animation
    gsap.to(faceMask, {
      y: 4,
      repeat: -1,
      duration: 2,
      ease: 'bounce.inOut',
      yoyo: true,
    });

    // Distortion effect on hover - using fromTo for brightness from 1 to 1.5
    const distortionEffect = gsap.fromTo(
      faceMask,
      { filter: 'brightness(1) blur(0px)' },   // Starting values
      {
        filter: 'brightness(1.5) blur(2px)',   // Ending values
        duration: 2,
        paused: true,  // Pause initially to activate on hover
        yoyo: true,
        repeat: 3, // Run a few times for a quick glitch effect
        ease: 'power1.inOut',
      }
    );

    // Add event listeners for hover to play/reverse the distortion
    faceMask.addEventListener('mouseenter', () => distortionEffect.play());
    faceMask.addEventListener('mouseleave', () => distortionEffect.reverse());
  });

  return (
    <section className="flex flex-col w-full min-h-screen/2 px-5">
      <div className="font-semibold text-4xl">Getting Started</div>
      <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center mt-10 gap-10 max-sm:gap-1 w-full bg-gray-800 rounded">
        <div className="flex items-center ml-10 my-5 mx-5 w-max lg:px-10 ">
          <img
            ref={faceMaskRef}
            src="/AnonymousMask.png"
            className="w-44 max-sm:w-24 px-2 py-2 sm:m-5 max-sm:h-28 h-48 face-mask object-contain"
          />
        </div>
        <div className="flex flex-col py-5 pixelated-text gap-1 w-full px-10">
          <p className="text-7xl max-sm:text-5xl font-medium">Wanna get started?</p>
          <p className="text-xl max-sm:text-md font-medium text-gray-600">Wanna Hack your friend without getting arrested ??? </p>
          <p className="text-2xl max-sm:text-xl font-medium">Here is how to go about it....</p>
          <p className="text-2xl max-sm:text-xl font-medium text-gray-500 justify-self-end place-self-end">Removed By My Lawyer</p>
          <p className="text-2xl max-sm:text-xl font-medium">Figure out yourself after Downloading.<span className="text-green-400"> Its Easy!</span></p>
        </div>
      </div>
    </section>
  )
}

export default Installation
