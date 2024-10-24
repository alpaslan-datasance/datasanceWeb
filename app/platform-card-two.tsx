"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'


function PlatformCardTwo() {

    const [selectedTabValue, setselectedTabValue] = useState("smart-city")

    function chooseImage() {
        switch (selectedTabValue) {
            case "smart-city":
                return ("/images/smartcity_3.webp")
            case "5g-base-stations":
                return ("/images/5g.webp")
            case "manufacturing":
                return ("/images/manufacturing.webp")
            case "logistics":
                return ("/images/distirbutioncc.webp")
        }
        return "/images/smartcity_3.webp"
    }

    return (
        <div className='w-full flex justify-center mt-5'  key={`section-${"Industries"}`} id={"Industries"}>
            <div className='container'>
                <div className='w-full md:w-auto bg-white justify-center items-start mt-2 grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12'>
                    <div className='sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6 2xl:col-span-6 place-self-center'>
                        <Image
                            src={chooseImage()}
                            width={1}
                            height={1}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt='book'
                            loading='eager'
                        ></Image>
                    </div>
                    <div className='sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6 2xl:col-span-6'>
                        <Tabs defaultValue="smart-city" className="w-full" onValueChange={e => setselectedTabValue(e)}>
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="smart-city" className='text-black font-bold text-xs sm:text-xs md:text-xs lg:text-xs xl:text-lg 2xl:text-lg'>Smart City</TabsTrigger>
                                <TabsTrigger value="5g-base-stations" className='text-black font-bold text-xs sm:text-xs md:text-xs lg:text-xs xl:text-lg 2xl:text-lg'>5G Stations</TabsTrigger>
                                <TabsTrigger value="manufacturing" className='text-black font-bold text-xs sm:text-xs md:text-xs lg:text-xs xl:text-lg 2xl:text-lg'>Manufacturing</TabsTrigger>
                                <TabsTrigger value="logistics" className='text-black font-bold text-xs sm:text-xs md:text-xs lg:text-xs xl:text-lg 2xl:text-lg'>Logistics</TabsTrigger>
                            </TabsList>
                            <TabsContent value="smart-city">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Have to build digital service points where the physical services meet with the shareholders of city.</CardTitle>
                                        <CardDescription>

                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        With Datasance PoT, you can build an infrastructure for real-time autonomous traffic signal management on the intersections, and intelligent public busses and connected public transportation.
                                    </CardContent>
                                    <CardFooter>
                                        <div className='grid grid-cols-2 w-full'>
                                            <div></div>
                                            <div className='flex justify-end'><Button variant="destructive" size={"lg"} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Request a Call</Button></div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="5g-base-stations">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Top challenges: Implement new 5G radio base stations and turn physical network functions into virtual network functions(VNFs)</CardTitle>
                                        <CardDescription>

                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        With PoT you can deploy VNFs as a container(CNF) on stand alone base stations, also you can deploy predictive maintenance algorithms on base stations to monitor real-time health status of base station, and interfere before break happens
                                    </CardContent>
                                    <CardFooter>
                                        <div className='grid grid-cols-2 w-full'>
                                            <div></div>
                                            <div className='flex justify-end'><Button variant="destructive" size={"lg"} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Request a Call</Button></div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="manufacturing">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Take control over your manufacturing shopfloor</CardTitle>
                                        <CardDescription>

                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        The production process mostly includes multiple machines and what happens in particular one machine is result of both what happens inside that machine and what happened form previous machines on the flow. So with Datasance PoT, you can build a distributed machine infrastructure for real-time traceability of process, or implement computer vision and error prevention algorithm or predictive maintenance for each machines.
                                    </CardContent>
                                    <CardFooter>
                                        <div className='grid grid-cols-2 w-full'>
                                            <div></div>
                                            <div className='flex justify-end'><Button variant="destructive" size={"lg"} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Request a Call</Button></div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="logistics">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Picking represent 60% cost of warehouse, you do not have an option for wrong picking</CardTitle>
                                        <CardDescription>

                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        Build a real-time traceability for distribution centers. Your pickers can decide the most suitable routes for batch picking, and warn operator in the case of wrong picking. Also implement pick2light approach to your picking locations, and create P2P autonomous decisions between picker and locations. Integration with smart gloves  to maximize operator efficiency.
                                    </CardContent>
                                    <CardFooter>
                                        <div className='grid grid-cols-2 w-full'>
                                            <div></div>
                                            <div className='flex justify-end'><Button variant="destructive" size={"lg"} className='text-white sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:2xl mt-3 transition duration-700 ease-in-out text-wrap'>Request a Call</Button></div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformCardTwo