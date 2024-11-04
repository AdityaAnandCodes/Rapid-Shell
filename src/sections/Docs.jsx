const Docs = () => {
  return (
    <section id="Docs" className="h-1/2 w-full p-4 flex flex-col items-center justify-center"> {/* Adjusted padding for smaller screens */}
      <div className="rounded bg-gray-800 w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-2 px-5 pt-5 pb-2"> {/* Adjusted text size for smaller screens */}
          Documentation
        </h2>
        <p className="mb-4 text-gray-400 text-center px-5 max-sm:px-3"> {/* Adjusted padding for smaller screens */}
          Access comprehensive documentation including guides, tutorials, and references to assist you in using our platform effectively.
        </p>
        <p className="mb-4 text-gray-400 text-center px-5 max-sm:px-3"> {/* Adjusted padding for smaller screens */}
          For any additional questions or support, please refer to the resources below.
        </p>
        <a
          href="/Malware.txt"
          download
          className="px-6 py-2 mb-5 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 text-base max-sm:text-sm" 
        >
          Download Documentation
        </a>
      </div>
    </section>
  );
};

export default Docs;
