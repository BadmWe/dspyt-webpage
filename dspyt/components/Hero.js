import FadeInSection from "@/components/FadeInSection";
import HeroImage from "@/public/mainsave.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pb-8 sm:pb-10 lg:pb-12">
      <FadeInSection>
        <div className="pt-6 overflow-hidden sm:pt-8 lg:relative lg:py-48">
          <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-6xl text-center sm:text-left font-bold tracking-tight text-gray-900 dark:text-gray-100">
                DSPYT - into CodeVerse
              </h1>
              <p className="mt-2 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-7 text-gray-600 dark:text-gray-300 tracking-tight sm:tracking-wide">
                Join our community to explore the latest trends in data science,
                share insights on blockchain technology, and participate in
                discussions about DSPYT DAO, the decentralized autonomous
                organization shaping the future of programming. Discover,
                collect, and curate valuable programming-related content with
                like-minded individuals.
              </p>
            </div>
          </div>

          <div className="mx-auto sm:max-w-3xl px-8 sm:px-12">
            <div className="relative sm:mt-4 py-8 sm:py-10 md:py-12 lg:absolute lg:inset-y-2 lg:right-0 lg:w-1/2">
              <div className="outlinedImage relative mx-auto sm:max-w-3xl sm:px-0 lg:max-w-max lg:h-full">
                <Image
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src={HeroImage}
                  alt="DSPYT - CodeVerse"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
