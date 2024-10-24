import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

function platformCard() {
    return (
        <div className='w-full md:w-auto bg-white flex justify-center items-center mt-3 mb-4' key={`section-${"product"}`} id={"product"}>
            <div className='container'>
                <div className='grid grid-cols-2'>
                    <div className='font-bold text-black ml-10 items-center text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-8xl 2xl:8xl'>Platform of EveryThing</div>
                    <div className='flex justify-end items-center mr-14'>
                        <Image
                            src="/images/pot.webp"
                            width={1}
                            height={1}
                            sizes="100vw"
                            style={{
                                width: '75%',
                                height: 'auto',
                            }}
                            alt="pot"
                            priority={false}
                            loading="eager"
                        />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='mx-10 text-black font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:4xl'>
                        {`Datasance PoT is the Open Source Distributed Edge Intelligence Platform.PoT brings all the advantages and intelligence functions of Cloud Computing to the locations where data is generated.`}
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <div className='mx-10'>
                        <Accordion type="single" collapsible defaultValue='item-1'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='text-black font-bold border-b-1 rounded sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl '>CONCEPT</AccordionTrigger>
                                <AccordionContent className='border-2 rounded'>
                                    <div className='grid xl:text-grid-cols-2 2xl:grid-cols-2 mx-10 mt-3 '>
                                        <div>
                                            <div className='text-black font-bold mt-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl'>Core Concept</div>
                                            <div className='mt-9 text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>By leveraging the potential of Eclipse Foundation Open Source projects, PoT provides true Edge connectivity, and brings Cloud Computing functionalities on to any device with a compute resource. By distributing the intelligence microservices on your Edge devices, PoT enables machine-to-machine autonomous decisions.</div>
                                            <div className='mt-2'>
                                                <ul className="list-disc">
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Open Source</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Secure P2P connectivity</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>DevOps for the Edge</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                src="/images/core_concept.webp"
                                                width={1}
                                                height={1}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                alt="pot"
                                                loading='eager'
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className='text-black font-bold border-b-1 rounded sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>EDGE</AccordionTrigger>
                                <AccordionContent className='border-2 rounded'>
                                    <div className='grid xl:text-grid-cols-2 2xl:grid-cols-2 mx-10 mt-3'>
                                        <div>
                                            <div className='text-black font-bold mt-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl'>Container Management on Edge Devices</div>
                                            <div className='mt-9 text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>PoT is based on Eclipse IoFog. By abstracting the Edge HW resources, and with the zero-trust approach, PoT provides true Edge Native security, and Cloud Native development functionalities for Edge devices. So you can start to manage, build, and run container based intelligence and analytic microservices at the points where data is generated.</div>
                                            <div className='mt-2'>
                                                <ul className="list-disc">
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Manage HW resource and monitor health status</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Dynamic cryptographic signing for device attestation</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>HW agnostic: Any device with a CPU or GPU</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Container based microservice management</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Avoid network latency</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Maximum HW utilization with lightweight containers</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Decrease operational cost</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                src="/images/core_concept.webp"
                                                width={1}
                                                height={1}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                alt="pot"
                                                loading='eager'
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className='text-black font-bold border-b-1 rounded sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>FOG</AccordionTrigger>
                                <AccordionContent className='border-2 rounded'>
                                    <div className='grid xl:text-grid-cols-2 2xl:grid-cols-2 mx-10 mt-3'>
                                        <div>
                                            <div className='text-black font-bold mt-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl'>Fog Computing Services</div>
                                            <div className='mt-9 text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Fog Computing is the state-of-the art approach for building true P2P connectivity on Edge Layer. The aim is to extend Cloud Computing capabilities, and bring compute, storage, network, control and decision mechanisms to the Edge Layer for building distributed autonomous Edge-to-Edge decision making.</div>
                                            <div className='mt-2'>
                                                <ul className="list-disc">
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Layer 7 encrypted mesh network based on Skupper</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Semantic P2P Edge connectivity</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>No inbound connection and automatically quarantine rogue nodes</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>True control over data flow</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Distribute Intelligence microservices on Edge devices</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Autonomous Edge-to-Edge decision making</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                src="/images/fog_2.webp"
                                                width={1}
                                                height={1}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                alt="pot"
                                                loading='eager'
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className='text-black font-bold border-b-1 rounded sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>DATA</AccordionTrigger>
                                <AccordionContent className='border-2 rounded'>
                                    <div className='grid xl:text-grid-cols-2 2xl:grid-cols-2 mx-10 mt-3'>
                                        <div>
                                            <div className='text-black font-bold mt-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl'>Uniformly collect data from low power devices near Edge HW</div>
                                            <div className='mt-9 text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>PoT uses the power of Eclipse Hono to enable gateway functions on the Edge devices. You can collect protocol agnostic data from different types of low power sensor devices.</div>
                                            <div className='mt-2'>
                                                <ul className="list-disc">
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Interact with IoT sensors in a uniform way</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>IoT protocols like HTTP, MQTT, AMQP and CoAP out of the box</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Uniforms messaging API</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Security by default with X.509 client certificates, and transport layer security (TLS)</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>You can build a custom protocol for your sensor devices</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Create application templates</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Enables EdgeOps: DevOps for the Edge</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                src="/images/hono_landing_page.webp"
                                                width={1}
                                                height={1}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                alt="pot"
                                                loading='eager'
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className='text-black font-bold border-b-1 rounded sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>DIGITAL TWIN</AccordionTrigger>
                                <AccordionContent className='border-2 rounded'>
                                    <div className='grid xl:text-grid-cols-2 2xl:grid-cols-2 mx-10 mt-3'>
                                        <div>
                                            <div className='text-black font-bold mt-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl'>Digital Twin</div>
                                            <div className='mt-9 text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Digital Twins (DT) are the digital representation of physical assets. DTs abstract the complexities of assets management, and help you to build interoperable ecosystem. With PoT, you can build DTs on the Edge.</div>
                                            <div className='mt-2'>
                                                <ul className="list-disc">
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>It is ready to run Intelligence algorithm</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>You already have an actionable information</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Context and meaning already added to data</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                src="/images/dt_2.webp"
                                                width={1}
                                                height={1}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                alt="pot"
                                                loading='eager'
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className='text-black font-bold border-b-1 rounded sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>MANAGEMENT</AccordionTrigger>
                                <AccordionContent className='border-2 rounded'>
                                    <div className='grid xl:text-grid-cols-2 2xl:grid-cols-2 mx-10 mt-3'>
                                        <div>
                                            <div className='text-black font-bold mt-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:5xl'>Don't worry when managing thousands of Edge devices</div>
                                            <div className='mt-9 text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>When it comes to Edge, you need to manage thousands of heterogeneous HW resource. With Pot, you can manage thousands of Edge devices, and microservices from a single management UI</div>
                                            <div className='mt-2'>
                                                <ul className="list-disc">
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Single management UI</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>CLI based management option</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Integrate control plane with Kubernetes cluster</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Monitor Edge devices, applications, and microservices health status</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Create application templates</li>
                                                    <li className='text-black font-bold sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:4xl'>Enables EdgeOps: DevOps for the Edge</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                src="/images/summary.webp"
                                                width={1}
                                                height={1}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                alt="pot"
                                                loading='eager'
                                            />
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default platformCard