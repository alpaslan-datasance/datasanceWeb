
"use client"
import React, { memo, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import useMediaQuery from "../components/mq.hook";
import dynamic from 'next/dynamic'

export const SliderOne = memo( function SliderOne () {
        const [customCardState, setcustomCardState] = useState<{
            name: string;
            image: string;
            content: React.JSX.Element;
        }[]>()
        const [customCardMobile, setcustomCardMobileState] = useState<{
            name: string;
            image: string;
            content: React.JSX.Element;
        }[]>()
        const isMobile = useMediaQuery("(max-width: 768px)");

        const DynamicHeader = dynamic(() => import('@/components/custom-react-responsive-carousel'), {
            loading: () => <p>Loading...</p>,
          })

        useEffect(() => {
            const cards = [
                {
                    name: "First item",
                    image: "/images/Slider/firstSlider/slider_1.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-20 left-0 flex justify-center items-center' key={"First"}>
                            <div>
                                <div className='text-end text-white font-bold sm:text-lg md:text-xl lg:text-4xl xl:text-5xl 2xl:4xl mt-12'>Open for Intelligence Everywhere</div>
                                <div className='text-end text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-10'>Build machine-to-machine autonomous intelligence ecosystem</div>
                                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                                    <div></div>
                                    <div></div>
                                    <Button variant="destructive" size={"lg"} className='text-white sm:text-xs md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-10 transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
                {
                    name: "Second item",
                    image: "/images/Slider/firstSlider/slider_2.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-20 left-0 flex justify-center items-center' key={"Second"}>
                            <div>
                                <div className='text-end text-black font-bold sm:text-lg md:text-xl lg:text-4xl xl:text-5xl 2xl:4xl'>Trusted Edge AI brings safe and autonomous mobility</div>
                                <div className='text-end text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-10'>Distributed AI micro services on the Edge brings P2P autonomous decision making without human intervention.  Datasance PoT enables you to build autonomous mobility</div>
                                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                                    <div></div>
                                    <div></div>
                                    <Button variant="destructive" size={"lg"} className='text-white sm:text-xs md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-10 transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
                {
                    name: "Third item",
                    image: "/images/Slider/firstSlider/slider_3.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-20 left-0 flex justify-center items-center' key={"Third"}>
                            <div>
                                <div className='text-end text-white font-bold sm:text-lg md:text-xl lg:text-4xl xl:text-5xl 2xl:4xl'>Bring AI and secure Edge connectivity to the manufacturing floor</div>
                                <div className='text-end text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-10'>Turn your manufacturing machines into intelligent devices. Increase efficiency, prevent loss, and decrease your carbon footprint. Datasance PoT can helps you to build intelligent manufacturing ecosystem.</div>
                                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                                    <div></div>
                                    <div></div>
                                    <Button variant="destructive" size={"lg"} className='text-white sm:text-xs md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-10 transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
                {
                    name: "Fourth item",
                    image: "/images/Slider/firstSlider/slider_4.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-20 left-0 flex justify-center items-center' key={"Fourth"}>
                            <div>
                                <div className='text-end text-white font-bold sm:text-lg md:text-xl lg:text-4xl xl:text-5xl 2xl:4xl'>Smarter Edge, Smarter Cities</div>
                                <div className='text-end text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-10'>Turn any physical service point into intelligent urban service point, with Datasance PoT. Improve efficiency of services, and provide secure and connected mobility ecosystem.</div>
                                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>
                                    <div></div>
                                    <div></div>
                                    <Button variant="destructive" size={"lg"} className='text-white sm:text-xs md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-10 transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
            ];
            setcustomCardState(cards)

            const cardsMobile = [
                {
                    name: "First item",
                    image: "/images/Slider/firstSlider/slider_1.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-0 left-0' key={"First"}>
                            <div className='flex flex-col'>
                                <div className='text-end text-white font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Open for Intelligence Everywhere</div>
                                <div className='text-end text-white sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:2xl'>Build machine-to-machine autonomous intelligence ecosystem</div>
                                <div className='mt-2'>
                                    <Button variant="destructive" size={"sm"} className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
                {
                    name: "Second item",
                    image: "/images/Slider/firstSlider/slider_2.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-0 left-0 mt-5' key={"Second"}>
                            <div className='flex flex-col'>
                                <div className='text-end text-black font-bold sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:xl'>Trusted Edge AI brings safe and autonomous mobility</div>
                                {/* <div className='text-end text-black sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:xl whitespace-break-spaces'>Distributed AI micro services on the Edge brings P2P autonomous decision making without human intervention.  Datasance PoT enables you to build autonomous mobility </div> */}
                                <div className='mt-2'>
                                    <Button variant="destructive" size={"sm"} className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
                {
                    name: "Third item",
                    image: "/images/Slider/firstSlider/slider_3.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-0 left-0 mt-2 p-4' key={"Third"}>
                            <div className='flex flex-col'>
                                <div className='text-end text-white font-bold sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:xl'>Bring AI and secure Edge connectivity to the manufacturing floor</div>
                                {/* <div className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Turn your manufacturing machines into intelligent devices. Increase efficiency, prevent loss, and decrease your carbon footprint. Datasance PoT can helps you to build intelligent manufacturing ecosystem.</div> */}
                                <div className='mt-2'>
                                    <Button variant="destructive" size={"sm"} className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
                {
                    name: "Fourth item",
                    image: "/images/Slider/firstSlider/slider_4.webp",
                    content: <>
                        <div className='absolute w-full grid grid-cols-2 top-0 left-0 mt-5' key={"Fourth"}>
                            <div className='flex flex-col'>
                                <div className='text-end text-white font-bold sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:xl'>Smarter Edge, Smarter Cities</div>
                                {/* <div className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Turn any physical service point into intelligent urban service point, with Datasance PoT. Improve efficiency of services, and provide secure and connected mobility ecosystem.</div> */}
                                <div className='mt-2'>
                                    <Button variant="destructive" size={"sm"} className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl transition duration-700 ease-in-out text-wrap'>Request a Call</Button>
                                </div>
                            </div>
                        </div>
                    </>
                },
            ];

            setcustomCardMobileState(cardsMobile)


        }, [])


        return (
            <>
                <div key={`section-${"slider-one"}`} id={"slider-one"}>
                    <DynamicHeader customCardArray={!isMobile ? customCardState : customCardMobile} isMobile={isMobile} />
                </div>
            </>
        )
    },
    () => true
);