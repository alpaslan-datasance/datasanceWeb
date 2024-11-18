
"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useRouter } from 'next/navigation';


function SliderTwo() {
    const { push } = useRouter();
    return (
        <>
            <div className='w-full flex justify-center h-42' style={{ backgroundColor: "#10253dff" }}>
                <div className='container'>
                    <div className='lg:grid xl:grid 2xl:grid lg:text-grid-cols-12 xl:text-grid-cols-12 2xl:grid-cols-12 lg:gap-3 xl:gap-3 2xl:gap-3 xl:m-8 2xl:m-8 '>
                        <div className='m-5 col-span-3 flex justify-center'>
                            <Image
                                src="./images/book.webp"
                                width={100}
                                height={100}
                                sizes="100vw"
                                style={{
                                    width: '60%',
                                    height: 'auto',
                                }}
                                alt='book'
                                loading='eager'
                            ></Image>
                        </div>
                        <div className='flex items-center lg:col-span-9 xl:col-span-9 2xl:col-span-9'>
                            <div className='p-4'>
                                <div className='text-start text-white font-bold text-xl'>Can Digital Technology help us to be on target?</div>
                                <div className='text-start text-white text-lg mt-4'>According to Technological Transformation report published by World Economic Forum, digital technology can cut global emissions by 15%.Enterprises need to step up and modernize their infrastructures to cope against climate challange.</div>
                                <div className='grid xl:grid-cols-2 2xl:grid-cols-2'>
                                    <div className=''>
                                        <Button variant="destructive" size={"lg"} onClick={() => push('/forms')} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Discover more</Button>
                                    </div>
                                    <div></div>

                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='container h-42'>
                    <div className='grid lg:text-grid-cols-4 xl:text-grid-cols-4 2xl:grid-cols-4 bg-white gap-3 m-8 '>
                        <div className='xl:col-span-3 2xl:col-span-3'>
                            <div className='text-center text-black font-bold text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Cloud centric is not Intelligence centric</div>
                            <div className='text-center text-black text-lg mt-4'>Cloud brings lots of improvement for managing datacenter operations, and developing software. However, modern Artificial Intelligence use cases requires sub-millisecond latencies which could not be provided by just-Cloud approach. That is the reason why Edge is the mega trend and building proper Edge infrasture is the first thing inside technology leaders agenda.</div>
                            <ul className="list-disc text-black">
                                <li className='mt-4 ml-6'>
                                    <div className='text-black font-bold text-xl'>Pros of Cloud</div>
                                    <div className='text-black'>Homogeneous HW environment, Unlimited compute resource, Ability to collect data, Asset management with Digital Twins</div>
                                </li>
                                <li className=' mt-4 ml-6'>
                                    <div className='text-black font-bold text-xl'>Bottlenecks of Cloud</div>
                                    <div className='text-black'>Latency,Requires high bandwidth, Can not tolerate network loss, Decreasing process success rate, Less anomaly detection , Losing location and context awareness, Regulatory restrictions</div>
                                </li>
                                <li className='mt-4 ml-6'>
                                    <div className='text-black font-bold text-xl'>Cons of Cloud</div>
                                    <div className='text-black'>Lack of Edge-native security, Lack of Agile decision deployment to the Edge, Lack of HW utilization on the Edge, Operational Costs</div>
                                </li>
                            </ul>

                            <div className='grid xl:grid-cols-1 2xl:grid-cols-1'>
                                <div className='xl:col-span-1 2xl:col-span-1'>
                                    <Button variant="destructive" size={"lg"} onClick={() => push('/forms')} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Discover more</Button>
                                </div>
                                <div></div>

                            </div>
                            <div></div>
                        </div>
                        <div className='m-5'>
                            <Image
                                src="./images/cloud_centric.webp"
                                width={100}
                                height={100}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                alt='book'
                                loading='eager'
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center' style={{ backgroundColor: "#10253dff" }}>
                <div className='container h-42'>
                    <div className='grid lg:text-grid-cols-2 xl:text-grid-cols-2 2xl:grid-cols-2 gap-3 m-8 '>
                        <div className='flex items-center'>
                            <div>
                                <div className='text-start text-white font-bold text-xl'>The new IIoT era brings a new challenge</div>
                                <div className='text-start text-white text-lg mt-4'>The scale and coverage of digital intelligence is increasing as enterprises would like to turn their physical assets into intelligent machines. But physical assets are heterogeneous, and it makes building an intelligent machine ecosystem complex. To make Intelligence development more secure and agile, enterprises need to abstracts the complexities of both asset management, networking and hardware dependencies away from the intelligence applications.</div>
                                <div className='grid xl:grid-cols-2 2xl:grid-cols-2'>
                                    <div className=''>
                                        <Button variant="destructive" size={"lg"} onClick={() => push('/forms')} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Discover more</Button>
                                    </div>
                                    <div></div>

                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='m-5'>
                            <Image
                                src="./images/sunum1_1.webp"
                                width={100}
                                height={100}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                alt='book'
                                loading='eager'
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Carousel className="w-full max-w-full">
                <CarouselContent>
                    {customCardSliderTwoState?.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                {
                                    _.content
                                }
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel> */}

        </>
    )
}

export default SliderTwo