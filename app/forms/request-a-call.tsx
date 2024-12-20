"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

interface WindowWithHbspt extends Window {
  hbspt?: {
    forms: {
      create: (options: { portalId: string; formId: string; target: string }) => void;
    };
  };
}

function DatasanceFormRequestACall() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      const windowWithHbspt = window as WindowWithHbspt;
      if (windowWithHbspt.hbspt) {
        windowWithHbspt.hbspt.forms.create({
          portalId: '143920332',
          formId: 'cad86b57-fab2-4977-9cb0-20af44024a50',
          target: '#hubspotForm',
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="bg-white">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/3 p-0">
              <div className="bg-black h-32 md:h-screen flex items-center justify-center">
                <div className='md:w-1/2 p-0'>
                  <div className='flex items-center justify-center'>
                    <div className="w-full h-16 w-16 md:h-48 w-48 lg:h-64 w-64 relative">
                      <Image
                        src="https://alpaslan-datasance.github.io/datasanceWeb/images/datasance-logo-white.webp"
                        layout="fill"
                        objectFit="contain"
                        alt="logo"
                        priority={false}
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className="w-full flex items-center justify-center font-bold relative text-white text-4xl md:ml-5">
                      {`Datasance`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-8/12 p-0">
              <div className="bg-white h-screen flex items-center justify-center">
                <div id="hubspotForm" className='h-svh mt-6 md:h-11/12 w-11/12 overflow-auto'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DatasanceFormRequestACall