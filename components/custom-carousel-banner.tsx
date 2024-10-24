import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

interface Props {
    customCardArray: any[] | undefined;
}

export const CustomCarouselBanner: React.FC<Props> = ({ customCardArray }) => {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <Carousel
            className="w-full mt-3 mb-2 bg-white"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {customCardArray?.map((card, index) => (
                    <CarouselItem key={index} className="basis-1/5">
                        <div className="p-1">
                            <div className="flex items-center justify-center max-h-16 min-h-16 sm:p-0 md:p-0 lg:p-6 xl:p-12 2xl:p-20">
                                <Image
                                    src={card.image}
                                    width={1}
                                    height={1}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    alt={card.image}
                                    loading='eager'>
                                </Image>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
