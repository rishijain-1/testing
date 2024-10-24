import React from 'react';

const SectionTitle = ({
  subtitle,
  dark,
  title,
  centerAlign,
  description,
  classNam,
}) => {
  return (
    <>
      {subtitle !== undefined ? (
        <div
          className={`${
            centerAlign ? 'section-heading text-center' : 'section-heading'
          } ${classNam}`}
        >
          <h4 className={`h5 ${dark ? 'text-warning' : 'text-primary'}`}>
            {subtitle}
          </h4>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <div
          className={`${
            centerAlign ? 'section-heading text-center' : 'section-heading'
          } ${classNam}`}
        >
          <h1 className="whysection-one-heading">{title}</h1>
          <p className="fs-24 text-black">{description}</p>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
