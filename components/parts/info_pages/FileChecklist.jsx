'use client';
import React, { useState } from 'react';

const FileChecklist = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: '> FILE FORMATS',
      content: (
        <div className="mt-5">
          <h2 className="font-bold underline mb-3">
            Illustrator PDF or Illustrator .AI format
          </h2>
          <p className="mx-12 mb-3">
            Files should be submitted on our template as an Adobe Illustrator
            .PDF or .AI file. Also provide any links (if images are not
            embedded) and convert all text to outlines. This will make the
            review process quicker.
          </p>
          <p className="mx-12 mb-3">
            Other software used to build PDFs (Canva, Quark, Corel, InDesign)
            causes issues with file layers and text. Some of these issues might
            be able to be resolved manually, but will add significant delay to
            the artwork process. This is not recommended.
          </p>
          <h2 className="font-bold underline mb-3">Colour space is CMYK</h2>
          <p className="mx-12 mb-3">
            RGB files are not compatible for printing. Automatic conversion of
            RGB to CMYK will cause unexpected muddying of your vibrant colours.
          </p>
          <p className="mx-12 mb-3 italic">(see Colours)</p>
          <h2 className="font-bold underline mb-3">
            Embed any full resolution images{' '}
          </h2>
          <p className="mx-12 mb-3">
            300 dpi or greater: .tif, .psd, .png, .gif, .jpg, .bmp, .svg
            formats. Linked files can also be acceptable, but some issues may
            arise. Embed them for best results.
          </p>
          <p className="mx-12 mb-3">(also see Colours, Raster Images)</p>

          <h2 className="font-bold underline mb-3">
            (Optional) Additional version with editable text
          </h2>
          <p className="mx-12 mb-3">
            This is helpful for us to make quick spelling corrections or copy
            updates.
          </p>
          <p className="mx-12 mb-3">(also see Text)</p>
        </div>
      ),
    },
    {
      title: '> TEXT & COPY',
      content: 'Your content for Text & Copy here...',
    },
    {
      title: '> LAYERS',
      content: 'Your content for Layers here...',
    },
    {
      title: '> COLOURS',
      content: 'Your content for Colours here...',
    },
    {
      title: '> RASTER IMAGES & GRADIENTS',
      content: 'Your content for Raster Images & Gradients here...',
    },
    {
      title: '> UPC BARCODES',
      content: 'Your content for UPC Barcodes here...',
    },
  ];

  return (
    <div className="flex flex-col ml-6 mt-36 w-auto">
      <div className="flex flex-row items-center">
        <h1 className="artwork_header">FILE CHECKLIST</h1>
      </div>
      <p className="mx-10">
        A complete and well formatted label graphics file will help smooth out
        and expedite the decoration approval process. To ensure your file is in
        the best format, please ensure your artwork files meet the standards
        below:
      </p>

      {sections.map((section, index) => (
        <div key={index} className="mt-8 bg-tb-gray rounded-md p-6">
          <h2
            className="text-2xl font-semibold text-tb-violet cursor-pointer"
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </h2>
          {activeIndex === index && (
            <div className="mt-2 ml-6 text-gray-700">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileChecklist;
