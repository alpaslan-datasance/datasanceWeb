"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import useMediaQuery from "./mq.hook";
import BurgerMenu from './BurgerMenu';
import styles from './custom-header.module.css';

function CustomHeader() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [navClass, setnavClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    const scrollup = document.documentElement.scrollTop;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

  return (
    navClass !== "" ?
      <>
        <div className='w-full md:w-auto bg-black max-h-20 min-h-20 flex justify-start items-center bg-black sticky top-0 z-50'>
          <div className='w-full grid grid-flow-col auto-cols-auto'>
            <div className='ms-0 flex'>
              <div className='flex justify-start items-center'>
                <Image
                  src="/images/datasance-logo-white.webp"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                  loading='eager'
                />
              </div>
              <div className='ms-2 flex justify-start items-center font-[family-name:var(--font-gentona-bold)] font-bold text-lg text-white'>Datasance</div>
            </div>
            <div className='flex justify-end items-center mr-2'>
              <div className='grid grid-cols-4 gap-4'>
                <div>
                  <Image
                    src="/images/linkedin-white.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                    loading='eager'
                  />
                </div>
                <div>
                  <Image
                    src="/images/instagram-white.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                    loading='eager'
                  />
                </div>
                <div>
                  <Image
                    src="/images/twitterx-white.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                    color='white'
                    loading='eager'
                  />
                </div>
                <div>
                  <Image
                    src="/images/menu-480.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                    color='white'
                    loading='eager'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <div className='w-full md:w-auto bg-black max-h-32 min-h-32 flex justify-start items-end bg-black z-50'>
        <div className={`w-full bg-white max-h-20 min-h-20 mb-5 mr-1 ms-1 rounded-full grid ${!isMobile ? "grid-cols-6" : "grid-cols-2"}`}>
          <div className='ms-5 flex grid-cols-subgrid col-span-1'>
            <div className='flex justify-start items-center '>
              <Image
                src="/images/datasance-logo-black.webp"
                width={50}
                height={50}
                alt="Picture of the author"
                loading='eager'
              />
            </div>
            <div className='flex justify-start items-end font-[family-name:var(--font-gentona-bold)] font-bold text-lg text-black'>Datasance</div>
          </div>
          {
            !isMobile ?
              <div className='grid-cols-subgrid col-span-4 content-center'>
                <div className={`grid grid-cols-4`}>
                  <a href="/" className={`${styles.menuItem} 'font-[family-name:var(--font-gentona-bold)] font-bold sm:text-sm md:text-mg lg:text-lg xl:text-xl 2xl:text-2xl grid-cols-subgrid flex justify-center items-center'`}>Home</a>
                  <a href={`#${"product"}`} className={`${styles.menuItem} 'font-[family-name:var(--font-gentona-bold)] font-bold sm:text-sm md:text-mg lg:text-lg xl:text-xl 2xl:text-2xl grid-cols-subgrid flex justify-center items-center'`}>Product</a>
                  <a href={`#${"Industries"}`} className={`${styles.menuItem} 'font-[family-name:var(--font-gentona-bold)] font-bold sm:text-sm md:text-mg lg:text-lg xl:text-xl 2xl:text-2xl grid-cols-subgrid flex justify-center items-center'`}>Industries</a>
                  <a href={`https://alpaslan-datasance.github.io/datasanceDocusaurus/`} className={`${styles.menuItem} 'font-[family-name:var(--font-gentona-bold)] font-bold sm:text-sm md:text-mg lg:text-lg xl:text-xl 2xl:text-2xl grid-cols-subgrid flex justify-center items-center'`}>Docmuents</a>
                </div>
              </div>
              : <></>
          }


          <div className='mr-5 grid-cols-subgrid col-span-1 content-center'>
            <div className='flex justify-center items-center grid grid-cols-2'>
              <div></div>
              {
                !isMobile ?
                  <div className={`grid grid-cols-3 gap-3`}>
                    <Image
                      src="/images/linkedin-black.svg"
                      width={1}
                      height={1}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      alt='book'
                      loading='eager'
                    />

                    <Image
                      src="/images/instagram-black.svg"
                      width={1}
                      height={1}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      alt='book'
                      loading='eager'
                    />

                    <Image
                      src="/images/twitterx-black.svg"
                      width={1}
                      height={1}
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      alt='book'
                      loading='eager'
                    />
                  </div>
                  : 
                  <div className='flex items-center justify-end'>
                    <BurgerMenu></BurgerMenu>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default CustomHeader