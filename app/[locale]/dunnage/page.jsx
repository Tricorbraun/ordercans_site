'use client';
import { React, useState } from 'react';

const Dunnage = () => {
  const [hiddenField, setHiddenField] = useState('');
  const onSubmit = () => {};
  const order = {};
  return (
    <section>
      <div className="mx-36">
        <iframe
          width="900"
          height="2000"
          src="https://app.smartsheet.com/b/form/b9242fc748cd43ebbe9b08027b11838c"
        ></iframe>
      </div>
    </section>
  );
};

export default Dunnage;
