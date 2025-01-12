'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOrderStore } from '../../../utils/state/store/Order';
import { useTranslations } from 'next-intl';
import { useMessages } from 'next-intl';
import UsefulLinks from '../../../components/UsefulLinks';

const Type = ({ params: { locale } }) => {
  const router = useRouter();
  const order = useOrderStore((state) => state.order);
  const setField = useOrderStore((state) => state.setField);
  const messages = useMessages();
  const t = useTranslations('Type');

  useEffect(() => {
    if (
      !order.companyName ||
      !order.contactName ||
      !order.contactEmail ||
      !order.contactPhone ||
      !order.location
    ) {
      router.push('/');
    }
  }, [order, router]);

  const handleClick = (value) => {
    const formattedValue = value.toLowerCase().replace(/\s+/g, '');
    router.push(`/${locale}/${formattedValue}`);
    setField('orderType', formattedValue);
    if (value === 'Blank Cans') {
      setField('application', 'Blank Cans');
      setField('brand', 'Blank Cans');
    } else {
      setField('application', '');
      setField('brand', '');
    }
    if (value === 'All In One') {
      setField('allinone', true);
    } else {
      setField('allinone', false);
    }
    setField('newOrReorder', '');
    setField('canSize', '');
    setField('numberOfCans', '');
    setField('endType', '');
    setField('numberOfSleeves', '');
    setField('pakTechType', '');
    setField('numberOfBoxes', '');
    setField('trayType', '');
    setField('bundlesofTrays', '');
    setField('layersPerPallet', '');
    setField('address', '');
    setField('PO', '');
    setField('deliveryMethod', '');
    setField('dunnageType', '');
    setField('date', '');
    setField('copackerEmail', '');
    setField('comments', '');
    setField('PSLfinish', '');
    setField('PSLlength', '');
    setField('filename', '');
    setField('printingType', '');
    setField('termsOfService', false);
    setField('file', null);
  };

  const isCalgary = order.location === 'Calgary';

  return (
    <div className="flex flex-col min-h-screen-minus-210 pt-28">
      <div className="flex justify-center items-center flex-grow mb-third">
        <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center px-6 md:px-14">
          <div
            onClick={isCalgary ? () => handleClick('All In One') : null}
            value="allinone"
            className={`${isCalgary ? 'type_container' : 'type_container_disabled opacity-50 cursor-not-allowed'}`}
          >
            <img
              src="/assets/icons/allinonelogo.svg"
              alt="All In One Icon"
              className="w-24 h-24"
            />
            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              {t('ALLINONE')}
            </h1>
            <div className="vessel_sub_text text-vp-orchid text-center px-4">
              {t('AI1Subtext')}
            </div>
            {!isCalgary && (
              <div className="text-center text-red-500">Calgary only</div>
            )}
          </div>
          <div
            onClick={() => handleClick('Labels Only')}
            value="labelsonly"
            className="type_container"
          >
            <img
              src="/assets/icons/labelsIcon.svg"
              alt="Labels only Icon"
              className="w-28 h-28"
            />
            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              {t('LABELSONLY')}
            </h1>
            <div className="vessel_sub_text text-center text-vp-orchid px-6 py-4 pb-10">
              {t('LABELSubtext')}
            </div>
          </div>
          <div
            onClick={isCalgary ? () => handleClick('Can App') : null}
            value="canapp"
            className={`${isCalgary ? 'type_container' : 'type_container_disabled opacity-50 cursor-not-allowed'}`}
          >
            <img
              src="/assets/icons/canapplogo.png"
              alt="Can App Icon"
              className="w-20 h-20"
            />
            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              {t('CANAPP')}
            </h1>
            <div className="vessel_sub_text text-vp-orchid text-center px-4">
              {t('CANAPPSubtext')}
            </div>
            {!isCalgary && (
              <div className="text-center text-red-500">Calgary only</div>
            )}
          </div>
          <div
            onClick={() => handleClick('Blank Cans')}
            value="blankcans"
            className="type_container"
          >
            <img
              src="/assets/icons/blankcanslogo.png"
              alt="Blank Cans Icon"
              className="w-24 h-24"
            />
            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              {t('BLANKCANS')}
            </h1>
            <div className="vessel_sub_text text-vp-orchid text-center px-4 py-4">
              {t('BLANKCANSsubtext')}
            </div>
          </div>
          <div
            onClick={() => handleClick('Supplies Only')}
            value="supplies"
            className="type_container"
          >
            <img
              src="/assets/icons/supplieslogo.svg"
              alt="Supplies Icon"
              className="w-24 h-24"
            />
            <h1 className="font-barlowbold text-vp-orchid text-center text-2xl">
              {t('SUPPLIES')}
            </h1>
            <div className="vessel_sub_text text-vp-orchid text-center px-4 py-4">
              {t('SUPPLIESsubtext')}
            </div>
          </div>

          <a
            href="https://app.smartsheet.com/b/form/b5eb22408acd4292b757817d706b691b" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-72 rounded-lg px-4 py-4 m-2 flex items-center justify-center flex-col space-y-4 text-black hover:text-vp-orchid hover:bg-tb-gray hover:bg-opacity-40 bg-tb-white bg-opacity-40 border-solid border-black cursor-pointer hover:bg-opacity-25;"
          >
            <div className="p-4 flex flex-col items-center ">
              <img
                src="/assets/icons/right-arrow.png"
                alt="Supplies Icon"
                className="w-24 h-24"
              />
              <h1 className="font-barlowbold text-center text-2xl mt-2">
                {t('FTL')}
              </h1>
            </div>
          </a>
        </div>
      </div>
      <UsefulLinks />
    </div>
  );
};

export default Type;
