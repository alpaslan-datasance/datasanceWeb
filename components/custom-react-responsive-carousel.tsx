import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image';

interface Props {
    customCardArray: any[] | undefined;
    isMobile: boolean;
}

export const customReactResponsiveCarousel: React.FC<Props> = ({ customCardArray, isMobile }) => {


    const [items, setItems] = useState<any>();

    // Memoize the children elements based on the customCardArray
    const childMemo = useMemo(() => {
        return customCardArray?.map((data, index) => (
            <div key={index}>
                <Image
                    src={data.image}
                    width={1}
                    height={1}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    alt={data.name}
                    priority={false}
                    loading="eager"
                />
                {data?.content}
            </div>
        ));
    }, [customCardArray]);

    useEffect(() => {
        setItems(childMemo);
    }, [childMemo]);


    return (
        <div style={{ height: isMobile ? "fit-content" : "100vh", maxHeight: isMobile ? "fit-content" : "100vh" }}>
            <Carousel swipeable={true} showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay useKeyboardArrows autoFocus={false} centerMode centerSlidePercentage={100}
            >
                {items}
            </Carousel>
        </div>
    )
}

export default customReactResponsiveCarousel