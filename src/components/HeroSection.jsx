import video1 from "../assets/video1.mp4";
import gif1 from "../assets/gif1.gif";

const HeroSection = () => {
  return (
    <div id="Home" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Trusted AI{" "}
        </span>
        for
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Data Analysis
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Redefine how you interact with your data through FireAI, a SECURE, FAST
        & DEPENDABLE AI-as-a-Service that can interpret complex data into
        user-friendly insights, making analysis accessible for all. Just
        articulate queries in simple English for instant results.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Book a free demo
        </a>
      </div>
      {/* Videos section */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          src={gif1}
          alt=""
        />
      </div>

      {/* Features */}
      <div className="container mx-auto p-4">
        <ul className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <li className="nav-item flex-1">
            <div className="p-4 border border-orange-500 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Charts &amp; Graphs
              </h2>
              <p className="text-gray-300 mb-2 text-center">
                Merge columns, convert formats, and execute complex calculations
              </p>
              <a
                href="#cnTscs"
                className="text-orange-500 hover:underline self-center"
              >
                Just feed in your query
              </a>
            </div>
          </li>

          <li className="nav-item flex-1">
            <div className="p-4 border border-orange-500 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Tailored inquiries
              </h2>
              <p className="text-gray-300 mb-2 text-center">
                Get precise, targeted, and accurate data in seconds
              </p>
              <a
                href="#cnTscs"
                className="text-orange-500 hover:underline self-center"
              >
                Just Ask
              </a>
            </div>
          </li>

          <li className="nav-item flex-1">
            <div className="p-4 border border-orange-500 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Share
              </h2>
              <p className="text-gray-300 mb-2 text-center">
                Emails, Drives, Cloud-based platforms
              </p>
              <a
                href="#cnTscs"
                className="text-orange-500 hover:underline self-center"
              >
                Share Anywhere
              </a>
            </div>
          </li>

          <li className="nav-item flex-1">
            <div className="p-4 border border-orange-500 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]">
              <h2 className="text-xl font-semibold text-white mb-2 text-center">
                Reports
              </h2>
              <p className="text-gray-300 mb-2 text-center">
                Drive informed decision making with polished analyses &amp;
                summaries
              </p>
              <a
                href="#cnTscs"
                className="text-orange-500 hover:underline self-center"
              >
                Access Anytime
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
