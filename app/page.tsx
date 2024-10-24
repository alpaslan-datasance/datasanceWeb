import CustomHeader from "@/components/custom-header";
import {SliderOne} from "./slider-one";
import dynamic from "next/dynamic";

export default function Home() {

  const PlatformCard = dynamic(() => import('./platform-card'), {
    loading: () => <p>Loading...</p>,
  })
  const SliderTwo = dynamic(() => import('./slider-two'), {
    loading: () => <p>Loading...</p>,
  })
  const PlatformCardTwo = dynamic(() => import('./platform-card-two'), {
    loading: () => <p>Loading...</p>,
  })
  const SliderBanner = dynamic(() => import('./slider-banner'), {
    loading: () => <p>Loading...</p>,
  })
  const CustomFooter = dynamic(() => import('@/components/custom-footer'), {
    loading: () => <p>Loading...</p>,
  })
  const ScrollToTopButton = dynamic(() => import('../components/ScrollToTopButton'), {
    loading: () => <p>Loading...</p>,
  })

  return (
    <>
      <div className="w-full h-full bg-black">
        <div className="bg-white">
          <CustomHeader></CustomHeader>
          <SliderOne></SliderOne>
          <PlatformCard></PlatformCard>
          <SliderTwo></SliderTwo>
          <PlatformCardTwo></PlatformCardTwo>
          <SliderBanner></SliderBanner>
          <CustomFooter></CustomFooter>
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}
