import React from "react";
import * as Icons from "lucide-react";

function Footer({ socials }) {

  return (
    <footer className="w-full border-t border-gray-200 mt-10 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">

         
        <div className="text-center sm:text-left">
          <h1 className="text-gray-700 font-semibold text-lg">Karan Chavan</h1>
          <p className="text-sm text-gray-500">Full Stack Web & Mobile App Developer</p>
        </div>

        
        <div className="flex items-center gap-5 text-gray-600 text-sm">
          {socials.map((item, idx) => {
            const Icon = Icons[item.icon]; // Dynamically pick icon
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                className="hover:text-black transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

      </div>

     
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Karan Chavan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
