'use client';
import React, { useState } from 'react';

const Dunnage = () => {
  return (
    <section>
      <div>
        <div className="gap-4 justify-items-center items-center mb-12 ml-22 mr-22 px-6 md:px-14">
          <a
            href="/assets/dunnagePolicy/dunnagePolicy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 mb-12 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col space-y-4 text-white hover:text-tb-brown hover:bg-tb-green/50 bg-tb-green cursor-pointer"
          >
            Click Here to read our dunnage policy
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <iframe
          className="w-full max-w-3xl h-[1800px] sm:h-[1500px] md:h-[2000px]"
          src="https://app.smartsheet.com/b/form/b9242fc748cd43ebbe9b08027b11838c"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Dunnage;
