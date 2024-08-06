'use client';
import React, { useState } from 'react';

const Dunnage = () => {
  const [hiddenField, setHiddenField] = useState('');
  const onSubmit = () => {};
  const order = {};

  return (
    <section>
      <div className="flex justify-center w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36">
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
