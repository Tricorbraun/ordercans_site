'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const both = () => {
  const [submission, setSubmission] = useState({
    personSubmitting: '',
    itemNumber: '',
    brand: '',
    vendorItemNum: '',
    vendorName: '',
    vendorAccountNum: '',
    newCustItemNum: '',
    countryOfOrigin: '',
    siteLocation: '',
    defaultItemStatus: '',

  });

  return (
    <>
      <section className="vessel_form_wrapper">
        <h1 className="head_text text_center w-full">
          <span className="text-vp-yellow">Item + Finished Good</span>
        </h1>

        <div></div>
      </section>
    </>
  );
};

export default both;
