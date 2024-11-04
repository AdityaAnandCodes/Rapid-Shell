import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useState } from "react";

const Hero = () => {
    const [videoWidth, setVideoWidth] = useState(500); // Default width

   const handleResize = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 640) {
            setVideoWidth(250); // Width for small screens
        } else if (windowWidth >= 640 && windowWidth < 1024) {
            setVideoWidth(375); // Width for medium screens
        } else {
            setVideoWidth(500); // Width for large screens
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Call it once to set the initial width

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            ".pixelated-text", // Make sure to use a dot for class selector
            {
                
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.1,
            }
        );
        gsap.fromTo('.video-tab',{
            opacity : 0,
        },{
            opacity : 1,
            duration : 0.4, 
            stagger : 0.4,
            delay : 0.1,

        });
        gsap.to('.animated-sprite',{
            opacity : 1,
            repeat : -1,
            duration : 5,
            yoyo : true,
            ease : 'bounce.inOut'
        });
        gsap.fromTo('.video-tab-1',{
            boxShadow : "0px 0px 500px 1px #ef233b68",
        },{
            boxShadow : "0px 0px 400px 5px #01f91e72",
            duration : 15,
            ease :  "power1.inOut",

        });
        gsap.to('.video-tab-1',{
            boxShadow : "0px 0px 500px 5px #01f91e72",
            duration : 2,
            repeat : -1,
            yoyo : true,
            delay : 18,
            ease :  "power1.inOut",
        });
        gsap.to('.dot',{
            y : 50,
            duration : 1.5,
            repeat : -1,
            yoyo : true,
            ease : 'power1.inOut',
        });
    });
  return (
    <section id="Home" className="min-h-screen w-full relative px-5 py-5 max-sm:py-0 max-sm:pt-10 flex justify-between items-center max-sm:flex-col">
    <div className="ml-10 pb-20 max-sm:pb-0 sm:pb-5">
        <p className="text-7xl max-sm:text-4xl pixelated-text">Hi! <span className="text-green-400">Hackers <span className="animated-sprite opacity-0">:\</span></span></p>
        <p className="text-3xl max-sm:text-xl mt-4 text-gray-300 pixelated-text">
            Welcome to the command center.
        </p>
        <p className="text-3xl max-sm:text-xl text-gray-300 pixelated-text">
            <span className="text-green-400">Initializing environment...</span>
        </p>
        <p className="text-3xl max-sm:text-xl text-gray-300 pixelated-text">
            Setting up secure connection<span className="text-green-400">...</span>
        </p>
        <p className="text-3xl max-sm:text-xl text-gray-300 pixelated-text">
            <span className="text-green-400">Root@terminal:</span> Access granted.
        </p>
        <p className="text-3xl max-sm:text-xl text-gray-300 pixelated-text">
            Ready to explore, code, and hack the system.
        </p>
        <p className="text-3xl max-sm:text-xl text-gray-300 pixelated-text">
            <span className="text-green-400">{"{ "}</span>System diagnostics: <span className="text-green-400">All clear.</span> <span className="text-green-400">{" }"}</span>
        </p>
        <p className="text-3xl max-sm:text-xl text-gray-300 pixelated-text">
            <span className="text-green-400">Root@terminal:</span> Execute your commands and shape the future.
        </p>
        <div className="flex justify-end">
            <button className="pixelated-text text-2xl max-sm:text-lg rounded mx-10 text-green-400 bg-gray-900 px-5 py-4 max-sm:my-10 sm:my-10 hover:bg-green-400 hover:text-white outline outline-white outline-offset-2 transition-all">
                <a href="https://hackertyper.net/#" target="_blank" rel="noopener noreferrer">Start Hacking</a>
            </button>
        </div>
        <div className="w-6 h-6 max-sm:w-5 max-sm:h-5 rounded-full bg-green-500 dot flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 max-sm:w-3 max-sm:h-3 text-white">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
    <div className="relative flex max-sm:justify-center items-start mx-auto pb-20 my-20 max-sm:my-15 sm:my-5">
        <div className="mb-20 max-sm:place-self-center pb-5 pr-5 max-sm:pb-0 max-sm:pr-0 max-sm:mb-0">
            <video
                className="video-tab video-tab-1 relative opacity-1/2 mx-20 max-sm:mx-0 z-10 rounded outline outline-gray-400"
                src="/TerminalCode.mkv"
                width={videoWidth}
                autoPlay
                muted
                disablePictureInPicture
                disableRemotePlayback
            />
            <video
                className="video-tab absolute top-1 left-1/8 max-sm:left-1/12 translate-x-1/2 translate-y-1/2 z-20 rounded outline outline-gray-200"
                src="/TerminalWithoutError.mkv"
                width={videoWidth - 50}
                autoPlay
                loop
                muted
                disablePictureInPicture
                disableRemotePlayback
            />
        </div>
    </div>
</section>

  )
}

export default Hero