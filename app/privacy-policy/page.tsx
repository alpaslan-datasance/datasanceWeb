"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

function CustomPrivacyPolicy() {
  const [markdownHtml, setMarkdownHtml] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('./privacy-policy.md');
        const markdownText = await response.text();
        const processedMarkdown = await remark().use(html).process(markdownText);
        setMarkdownHtml(processedMarkdown.toString());
      } catch (error) {
        console.error('Error loading markdown file:', error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="bg-white">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/3 p-0">
              <div className="bg-black h-32 md:h-screen flex items-center justify-center">
                <div className="md:w-1/2 p-0">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 md:w-48 md:h-48 lg:w-64 lg:h-64 relative">
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
                  <div className="flex items-center justify-center">
                    <div className="w-full flex items-center justify-center font-bold text-white text-4xl md:ml-5">
                      {`Datasance`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-8/12 p-0">
              <div className="bg-white h-screen flex items-center justify-center overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: markdownHtml }} className='h-screen overflow-auto text-center' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomPrivacyPolicy;
