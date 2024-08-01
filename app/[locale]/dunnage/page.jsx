'use client';
import { React, useState } from 'react';

const Dunnage = () => {
  const [hiddenField, setHiddenField] = useState('');
  const onSubmit = () => {};
  const order = {};
  return (
    <section>
      <div className="mx-36">
        <h1 className="font-barlowbold text-tb-violet text-4xl flex flex-col max-w-custom p-12 small_scrn_less_padding">
          Dunnage Return BOL Creator
        </h1>
        <p className="mb-2">
          Enter your return details below and we will{' '}
          <strong> auto-generate a BOL</strong> for you to print and attach to
          your shipment. Please allow up to 10 minutes to receive the PDF.
        </p>
        <p>
          <i>Please allow up to 10 minutes to receive the PDF.</i>
        </p>
        <div className="m-6">
          <h3 className="mb-2 bold">Helpful Links:</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-tb-turq underline"
                href="https://uploads-ssl.webflow.com/5cf6ee7465fae562145a7a17/662970b9aa048088856eaa40_Vessel%202023%20Dunnage%20Program%20-%20FINAL%20-%20April%2024%202024%20Update.pdf"
              >
                Vessel Dunnage Program 2024
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-tb-turq underline"
                href="https://uploads-ssl.webflow.com/5cf6ee7465fae562145a7a17/631a0e7c72acb4ca9fb7c3c6_Vessel%20Packaging%20Terms%20and%20Conditions%20-%20Goods%20and%20Services%20(FINAL%2009.07.2022).docx.pdf"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
        >
          <input
            type="text"
            style={{ display: 'none' }}
            value={hiddenField}
            onChange={(e) => setHiddenField(e.target.value)}
          />

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="vessel_login_label">Company Name</label>
              <input
                type="text"
                placeholder={'Company Name'}
                value={order.companyName}
                onChange={(e) =>
                  setOrder({ ...order, companyName: e.target.value })
                }
                className="vessel_login_input "
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Dunnage;
