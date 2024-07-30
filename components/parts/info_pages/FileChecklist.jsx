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
          <img
            src="/assets/Artwork_Resources/images/FILEFORMATS1.png"
            height={200}
            width={200}
            alt="fileformats1"
            className="mx-12 mb-3"
          />
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

          <img
            src="/assets/Artwork_Resources/images/FILEFORMATS2.png"
            height={200}
            width={200}
            alt="fileformats1"
            className="mx-12 mb-3"
          />

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
      content: (
        <div className="mt-5">
          <h2 className="font-bold underline mb-3">
            All text are converted to outlines
          </h2>
          <p className="mx-12 mb-3">
            Main file must have all text converted to outlines. If supplementing
            a file with editable text, please provide all fonts used.
          </p>
          <img
            src="/assets/Artwork_Resources/images/TEXTCOPY2.png"
            height={250}
            width={250}
            alt="textcopy2"
            className="mx-12 mb-3"
          />
          <h2 className="font-bold underline mb-3">
            Type is at least 6 pt size{' '}
          </h2>
          <p className="mx-12 mb-3">
            In some cases, type may be as small as 4 pt, but it is not
            recommended.
          </p>
          <h2 className="font-bold underline mb-3">
            Place reverse text over spot colours when printing flexo
          </h2>
          <p className="mx-12 mb-3">
            White type on 4-colour process background will appear fuzzy. If
            required, a spot colour outline of at least 0.5 pt will be added for
            flexo printing if not provided.
          </p>
          <img
            src="/assets/Artwork_Resources/images/TEXTCOPY1.png"
            height={250}
            width={250}
            alt="textcopy1"
            className="mx-12 mb-3"
          />
        </div>
      ),
    },
    {
      title: '> LAYERS',
      content: (
        <div className="mt-5">
          <h2 className="font-bold underline mb-3">
            Non-printing marks on separate layers
          </h2>
          <p className="mx-12 mb-3">
            Ensure all template guides and notes are on separate layers from
            your artwork and white/matte plates.
          </p>
          <h2 className="font-bold underline mb-3">
            Special finishes each on separate layers
          </h2>
          <p className="mx-12 mb-3">
            Ensure flood/spot whites, matte varnishes, etc. are on their own
            layers. (also see Colours)
          </p>
          <img
            src="/assets/Artwork_Resources/images/LAYERS.png"
            height={250}
            width={250}
            alt="layers"
            className="mx-12 mb-3"
          />
          <h2 className="font-bold underline mb-3">Die-line for PSLs</h2>
          <p className="mx-12 mb-3">
            PSL die-line must be on own layer and swatch
          </p>
        </div>
      ),
    },
    {
      title: '> COLOURS',
      content: (
        <div className="mt-5">
          <h2 className="font-bold underline mb-3">
            Use CMYK and Pantone Solid Coated
          </h2>
          <p className="mx-12 mb-3">
            Choose CMYK process for digital printing. Otherwise, provided
            Pantone colours will be substituted. For flexo printing, use the
            Pantone Solid Coated book if selecting spot colours. Please make
            sure that Pantone Colours are set to Spot, and not process.
          </p>
          <img
            src="/assets/Artwork_Resources/images/COLOURS1.png"
            height={250}
            width={250}
            alt="colours"
            className="mx-12 mb-3"
          />
          <h2 className="font-bold underline mb-3">
            Images in CMYK, Grayscale, or Bitmap
          </h2>
          <p className="mx-12 mb-3">
            RGB assets are not compatible and significant colour shift would
            occur if converted.
          </p>
          <h2 className="font-bold underline mb-3">
            Special inks and marks use spot colour
          </h2>
          <p className="mx-12 mb-3">
            Die lines and inks like white, matte varnish should be using a
            custom spot colour swatch and set to overprint. ‍(also see Layers)
          </p>
          <img
            src="/assets/Artwork_Resources/images/COLOURS2.png"
            height={250}
            width={250}
            alt="colours2"
            className="mx-12 mb-3"
          />
          <h2 className="font-bold underline mb-3">
            Remove any unused colours
          </h2>
          <p className="mx-12 mb-3">
            Remove unused swatches from the Swatches panel.
          </p>
        </div>
      ),
    },
    {
      title: '> RASTER IMAGES & GRADIENTS',
      content: (
        <div className="mt-5">
          <h2 className="font-bold underline mb-3">
            Raster images and gradients
          </h2>
          <p className="mx-12 mb-3">
            To ensure highest image quality, make sure raster images are 300 ppi
            or greater.
          </p>
          <img
            src="/assets/Artwork_Resources/images/RASTER.png"
            height={250}
            width={250}
            alt="raster"
            className="mx-12 mb-3"
          />
          <h2 className="font-bold underline mb-3">
            Images are Embedded or Linked
          </h2>
          <p className="mx-12 mb-3">
            Embed images if possible. If using linked images, please provide all
            linked files.
          </p>
          <h2 className="font-bold underline mb-3">
            Raster effects are flattened
          </h2>
          <p className="mx-12 mb-3">
            Flatten all raster effects at 300 dpi or greater. Live effects can
            change unexpectedly if this is not done.
          </p>

          <h2 className="font-bold underline mb-3">
            Avoid gradients to white for flexography
          </h2>
          <p className="mx-12 mb-3">
            There is a minimum dot size that ink will adhere to printing plates.
            As a result, there will be a sudden drop to white for these
            gradients when printed. Safe dot size is {'>'}8%.
          </p>
        </div>
      ),
    },
    {
      title: '> UPC BARCODES',
      content: (
        <div className="mt-5">
          <h2 className="font-bold underline mb-3">
            Barcodes are dark colour on top of light colour
          </h2>
          <p className="mx-12 mb-3">
            Black or a dark PMS spot colour on white is recommended.
          </p>
          <h2 className="font-bold underline mb-3">
            Barcode size is at least 80% scale
          </h2>
          <p className="mx-12 mb-3">
            This size translates to 25.08 mm bar width, with 2.9 mm and 1.85 mm
            of white at the left and right quiet zones respectively. Minimum
            height of the bars is 18.29 mm.
          </p>
          <img
            src="/assets/Artwork_Resources/images/BARCODES.png"
            height={250}
            width={250}
            alt="barcode"
            className="mx-12 mb-3"
          />
          <h2 className="font-bold underline mb-3">
            Shrink sleeves use rotated barcodes
          </h2>
          <p className="mx-12 mb-3">
            Due to deformations in the heat shrinking process a horizontally
            oriented barcode may not scan properly on some scanners. To avoid
            this, have the code rotated to read vertically (black bars running
            horizontally). We also recommend this for PSLs because of the
            curvature of the can, but it isn't as much of an issue as with
            shrink sleeves.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col ml-6 mt-36 w-auto">
      <div className="flex flex-row items-center">
        <h1 className="artwork_header">FILE CHECKLIST</h1>
      </div>
      <p className="mx-10 mb-12">
        A complete and well formatted label graphics file will help smooth out
        and expedite the decoration approval process. To ensure your file is in
        the best format, please ensure your artwork files meet the standards
        below:
      </p>

      {sections.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left font-bold py-2 px-4 mb-3 bg-vp-yellow rounded transition-colors duration-300"
          >
            {section.title}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileChecklist;
