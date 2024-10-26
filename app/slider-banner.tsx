
"use client"
import React, { useState } from 'react'
import { CustomCarouselBanner } from '@/components/custom-carousel-banner'

function SliderBanner() {

    const [customCardState, setcustomCardState] = useState<{ image: string; }[]>()

    React.useEffect(() => {
        const bannerCards = [
            {
                image: "/images/banner/vpl.webp"
            },
            {
                image: "/images/banner/iso.webp"
            },
            {
                image: "/images/banner/ticc.webp"
            },
            {
                image: "/images/banner/nvidia.webp"
            },
            {
                image: "/images/banner/microsoft.webp"
            },
            {
                image: "/images/banner/cekirdek.webp"
            },
        ];
        setcustomCardState(bannerCards)
    }, [])


    return (
        <>
            <CustomCarouselBanner customCardArray={customCardState}></CustomCarouselBanner>
        </>
    )
}

export default SliderBanner