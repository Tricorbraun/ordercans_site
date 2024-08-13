import React from 'react';
import Link from 'next/link';

const UsefulLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-barlowbold text-tb-violet text-center text-2xl">
        HELPFUL LABEL LINKS
      </h1>
      <div className="flex justify-center w-full flex-column-below-900 items-center">
        <Link
          href="https://ordercans.tricorbraun.ca/en/faq"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq font-robotobold text-xl mr-6"
        >
          Artwork FAQs
        </Link>
        <Link
          href="https://ordercans.tricorbraun.ca/en/artwork-resources"
          rel="noopener noreferrer"
          target="_blank"
          className="text-vp-yellow hover:text-tb-turq  font-robotobold text-xl ml-6"
        >
          Artwork Resources
        </Link>
      </div>
    </div>
  );
};

export default UsefulLinks;
