import React from 'react';
import { usePrintedStore } from '../../../utils/state/store/PrintedAndVcs';

function DeliveryAddress({
  shipToAddressError,
  shipFromError,
  setErrors,
  errors,
}) {
  const order = usePrintedStore((state) => state.printedvcs);
  const setField = usePrintedStore((state) => state.setField);

  const shipFromOptions = [
    'Olympia',
    'Calgary',
    'Ft. Bend',
    'Toronto',
    'Batesville',
    'Nichols',
    'Conroe',
    'Canpack',
    'TLC Sardis',
    'Buske Sugarland',
    'Bowling Green',
    'Kankakee',
    'Lacrosse',
    'Mankato',
    'Winchester',
    'Dayton',
    'LaCrosse',
  ];

  const handleDeliveryAddressChange = (e) => {
    const value = e.target.value;
    console.log(order);

    setField('shipToAddress', value);
    setErrors({ ...errors, shipToAddress: null });
  };

  const handleShipFromChange = (e) => {
    const value = e.target.value;
    setField('shipFrom', value);
    setErrors({ ...errors, shipFrom: null });
  };

  return (
    <div className="w-full flex gap-6 flex-col 760:flex-row">
      <div className="w-full 760:w-1/2">
        <label className="vessel_input_label">
          Ship-From Location
          <select
            onChange={handleShipFromChange}
            className={`vessel_input ${shipFromError ? 'error' : ''}`}
          >
            <option value="">Select a location</option>
            {shipFromOptions.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </label>
        {shipFromError && <div className="error-message">{shipFromError}</div>}
      </div>
      <div className="w-full 760:w-1/2">
        <label className="vessel_input_label">
          Delivery Address
          <textarea
            onChange={handleDeliveryAddressChange}
            className={`vessel_input ${shipToAddressError ? 'error' : ''}`}
          />
        </label>
        {shipToAddressError && (
          <div className="error-message">{shipToAddressError}</div>
        )}
      </div>
    </div>
  );
}

export default DeliveryAddress;
