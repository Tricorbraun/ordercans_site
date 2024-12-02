import React from 'react';
import Link from 'next/link';

const UsefulLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
        HELPFUL LINKS
      </h1>
      <div className="flex justify-center w-full flex-column-below-900 items-center">
        <Link
          href="https://ordercans.tricorbraun.ca/en/faq"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq font-robotobold text-xl "
        >
          Artwork FAQs
        </Link>
        <span className=" mr-3 ml-3">|</span>
        <Link
          href="https://ordercans.tricorbraun.ca/en/artwork-resources"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq  font-robotobold text-xl"
        >
          Artwork Resources
        </Link>
        <span className=" mr-3 ml-3">|</span>
        <Link
          href="https://ordercans.tricorbraun.ca/en/dunnage"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq  font-robotobold text-xl"
        >
          Dunnage
        </Link>
      </div>
    </div>
  );
};

export default UsefulLinks;
