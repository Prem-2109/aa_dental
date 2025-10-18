import React from "react";

export default function MediaDaySection() {
  return (
    <section className="bg-black py-20 px-6 md:px-16 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 bg-white p-8 sm:p-10 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Press & Media Day
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Press & Media Day will feature exclusive launches, unveilings, and
            official debuts from leading Auto Brands. Media partners will have
            full-day access to press conferences from all brands. Top exhibitors
            will break news or make announcements to a media-only audience.
            <br />
            <br />
            Media Day will be the opportunity to hear the latest breaking news,
            product launches, and technology trends from the world’s top
            automotive innovators.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1573495612897-4d3d1a2b2e68?auto=format&fit=crop&w=1000&q=80"
              alt="Press Media"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

          {/* Text Overlay */}
          <div className="relative z-10 text-white p-8 sm:p-10">
            <h4 className="text-lg font-bold uppercase tracking-wide mb-3">
              <span className="text-white">Press &</span>
              <span className="text-blue-300 ml-1">Media Day</span>
            </h4>
            <h5 className="text-sm sm:text-base font-semibold mb-3">
              Schedule
            </h5>

            <ul className="text-sm sm:text-base space-y-2">
              <li>
                <span className="font-semibold text-blue-300">Premiere Show</span>
              </li>
              <li>
                <span className="font-semibold">Date:</span> 16th September, 2025
              </li>
              <li>
                <span className="font-semibold">Press & Media:</span> 12:00 PM – 11:00 PM
              </li>
              <li>
                <span className="font-semibold">Celebrity Hours:</span> 7:00 PM – 10:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
