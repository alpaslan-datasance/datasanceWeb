
"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { CustomCarouselBanner } from '@/components/custom-carousel-banner'

function sliderBanner() {

    const [customCardState, setcustomCardState] = React.useState<any[]>()

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
                image: "/images/banner/Microsoft.webp"
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

export default sliderBanner