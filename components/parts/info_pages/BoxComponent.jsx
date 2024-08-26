import React from 'react';

const BoxComponent = ({
  title,
  rect1Text,
  rect1Link,
  rect2Text,
  rect2Link,
  rectColor,
}) => {
  return (
    <div className="box-container">
      <h2 className="box-title">{title}</h2>
      {rect1Text && (
        <>
          <a
            href={rect1Link}
            download
            rel="noopener noreferrer"
            className={`rectangle ${rectColor}`}
          >
            <p>{rect1Text}</p>
          </a>
        </>
      )}
      {rect2Text && (
        <a
          href={rect2Link}
          download
          rel="noopener noreferrer"
          className={`rectangle ${rectColor}`}
        >
          <p>{rect2Text}</p>
        </a>
      )}
    </div>
  );
};

export default BoxComponent;
