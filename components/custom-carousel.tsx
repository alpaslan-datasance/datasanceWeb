'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useMediaQuery } from 'react-responsive'

interface Props {
    customCardArray: any[] | undefined;
}

export const CustomCarousel: React.FC<Props> = ({ customCardArray }) => {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <div className="flex justify-center" style={{ maxHeight: "38rem" }}>
            <Carousel
                className="w-full "
                opts={{
                    align: "start",
                    loop: true,
                }}
                //plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {customCardArray?.map((data: any, index: any) => (
                        <CarouselItem key={index}>
                            <Card className="p-0">
                                <CardContent className="h-full w-full p-0">
                                    {
                                        data.content
                                    }
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}