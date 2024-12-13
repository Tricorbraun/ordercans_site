import React, { useState } from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';
import DatePickerSection from '../inputs/DatePickerSection';
import { useTranslations } from 'next-intl';

const ShippingDetails = ({
  deliveryMethodError,
  dunnageTypeError,
  dateError,
  setErrors,
  errors,
}) => {
  const t = useTranslations('Forms');
  const { setField, order } = useOrderStore();
  const [dunnageType, setDunnageType] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [liftGate, setLiftGate] = useState(false);

  const handleDunnageTypeChange = (e) => {
    const value = e.target.value;
    setDunnageType(value);
    setField('dunnageType', value);
    setErrors({ ...errors, dunnageType: null });
  };

  const handleDeliveryMethodChange = (e) => {
    const value = e.target.value;
    setDeliveryMethod(value);
    setField('deliveryMethod', value);
    setErrors({ ...errors, deliveryMethod: null });
  };

  const handleLiftGate = (e) => {
    const value = e.target.checked;
    setLiftGate(value);
    setField('liftGate', value);
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto bg-grey-below-900">
        <h2 className="text-left text-vp-blue mb-4">{t('ShippingDetails')}</h2>
        <div className="flex flex-column-below-900">
          <div className="w-1/3 mr-4 width-100-below-900">
            <DatePickerSection
              error={dateError}
              setErrors={setErrors}
              errors={errors}
            />
          </div>

          <div className="w-1/3 mr-4 width-100-below-900">
            <label className="vessel_input_label">
              {t('DeliveryMethod')}
              <select
                value={deliveryMethod}
                onChange={handleDeliveryMethodChange}
                className={`vessel_input ${deliveryMethodError ? 'error' : ''}`}
              >
                <option value="" disabled>
                  {t('SelectDeliveryMethod')}
                </option>
                <option value="vesselToArrange">{t('VesselToArrange')}</option>
                <option value="customerToPickup">
                  {t('CustomerToPickup')}
                </option>
                <option value="customerToArrange">
                  {t('CustomerToArrange')}
                </option>
              </select>
            </label>
            {deliveryMethodError && (
              <div className="error-message">{deliveryMethodError}</div>
            )}
            {deliveryMethod === 'vesselToArrange' && (
              <div className="flex items-center mb-4 mt-2 ml-3">
                <input
                  id="liftgate-checkbox"
                  type="checkbox"
                  checked={liftGate}
                  onChange={handleLiftGate}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <label
                  htmlFor="liftgate-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lift Gate Required?
                </label>
              </div>
            )}
          </div>

          <div className="w-1/3 mr-4 width-100-below-900">
            <label className="vessel_input_label">
              {t('DunnageType')}
              <select
                value={dunnageType}
                onChange={handleDunnageTypeChange}
                className={`vessel_input ${dunnageTypeError ? 'error' : ''}`}
              >
                <option value="" disabled>
                  {t('SelectDunnageType')}
                </option>
                {order.orderType === 'blankcans' ? (
                  <option value="2-Way (Plastic)">{t('2way')}</option>
                ) : order.orderType === 'suppliesonly' ? (
                  <>
                    <option value="none">{t('NoDunnage')}</option>
                    <option value="2-Way (Plastic)">{t('2way')}</option>
                    {order.location === 'Calgary' && (
                      <option value="1-Way (Wooden)">{t('1way')}</option>
                    )}
                  </>
                ) : (
                  <>
                    <option value="2-Way (Plastic)">{t('2way')}</option>
                    <option value="1-Way (Wooden)">{t('1way')}</option>
                  </>
                )}
              </select>
            </label>
            <p className="text-sm text-vp-yellow">
              <a
                href="https://ordercans.tricorbraun.ca/assets/dunnagePolicy/dunnagePolicy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('PolicyGuide')}
              </a>
            </p>
            {dunnageTypeError && (
              <div className="error-message">{dunnageTypeError}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
