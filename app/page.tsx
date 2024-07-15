import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <Image
          src={'/images/hero.png'}
          width={500}
          height={200}
          alt="hero-png"
          className="w-full h-[200px] sm:h-fit"
        />

        <div className="absolute w-full px-5  top-[40px] right-[30px] sm:top-1/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h1 className="sm:text-[60px] mb-4 sm:leading-[60px]">
            Bridging Continents with Premium Agricultural Supplies Together.
          </h1>
          <p className="sm:text-xl">
            From UAE to Brazil, OLG Trade delivers the finest fertilizers and
            sugar to enhance agricultural success across the whole world.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-white mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-blue-site font-site">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left">
            Ready to partner? Contact us here{' '}
          </h3>
          <a
            href="#contact"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-site w-fit"
          >
            Contact Us
          </a>
        </div>
      </div>
      <h2 id="about" className="text-center text-4xl my-10 sm:my-20 font-site">
        About us
      </h2>
      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/initiatives.png"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our Initiatives</h3>
            <p className="my-6 text-sm">
              OLG Trade is committed to sustainability and innovation. We
              actively work on expanding our product range, improving supply
              chain efficiency, and fostering partnerships with leading
              suppliers in UAE, Qatar, Russia, and Brazil to ensure consistent
              delivery of top-quality products.
            </p>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/mission.png"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
              At OLG Trade, our mission is to provide high-quality nitrogen
              fertilizers and sugar to support the agricultural growth of our
              clients. We strive to enhance crop yields and contribute to the
              prosperity of farmers and retailers in the Middle East.
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="/images/values-section.png"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our Values</h3>
            <p className="my-6 text-sm">
              We believe in integrity, reliability, and customer satisfaction.
              Our dedication to these values ensures that we provide dependable
              service and maintain long-term relationships with our clients and
              partners, driving mutual success in the agricultural sector.
            </p>
          </div>
        </div>
      </div>
      <h2
        id="our-goals"
        className="text-center text-4xl my-10 sm:my-20 font-site"
      >
        Our Goals
      </h2>

      <div className="flex flex-col sm:flex-row gap-12 justify-between">
        <div className="text-center flex flex-col items-center gap-4">
          <Image
            src={'/images/fertilizer.png'}
            width={150}
            height={150}
            alt="productivity"
          />
          <span className="font-site">
            Enhance Agricultural <br /> Productivity
          </span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <Image
            src={'/images/market.png'}
            width={150}
            height={150}
            alt="productivity"
          />
          <span className="font-site">Expand Market Reach</span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <Image
            src={'/images/customer-review.png'}
            width={150}
            height={150}
            alt="productivity"
          />
          <span className="font-site">Client Satisfaction</span>
        </div>
      </div>
    </div>
  );
}
