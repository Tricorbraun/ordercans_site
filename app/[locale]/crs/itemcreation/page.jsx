'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const itemcreation = ({ params: { locale } }) => {
  const router = useRouter();
  const handleClick = (value) => {
    router.push(`/${locale}/crs/itemcreation/${value}/`);
  };

  return (
    <>
      <section className="vessel_form_wrapper">
        <h1 className="head_text text_center w-full">
          <span className="text-vp-yellow">What would you like to create?</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-2 justify-items-center items-center px-6 py-6 md:px-14">
          <div
            onClick={() => handleClick('component')}
            value="component"
            className="type_container"
          >
            <img
              src="/assets/icons/labelsIcon.svg"
              alt="All In One Icon"
              className="w-24 h-24"
            />

            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              Component
            </h1>

            <div className="vessel_sub_text text-vp-orchid text-center px-4">
              Create a single component (eg. label)
            </div>
          </div>

          <div
            onClick={() => handleClick('finishedgood')}
            value="finishedgood"
            className="type_container"
          >
            <img
              src="/assets/icons/allinonelogo.svg"
              alt="All In One Icon"
              className="w-24 h-24"
            />

            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              Finished Good
            </h1>

            <div className="vessel_sub_text text-vp-orchid text-center px-4">
              Create a finished good (eg. all in one can)
            </div>
          </div>

          <div
            onClick={() => handleClick('both')}
            value="both"
            className="type_container"
          >
            <img
              src="/assets/icons/canapplogo.png"
              alt="All In One Icon"
              className="w-24 h-24"
            />

            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              both
            </h1>

            <div className="vessel_sub_text text-vp-orchid text-center px-4">
              Create both an item and finished good.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default itemcreation;
