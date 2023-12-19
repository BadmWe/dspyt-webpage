import HeroImage from "@/public/mainsave.webp";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="sm:max-w-xl">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
                DSPYT - CodeVerse
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 tracking-wide">
                Join our community to explore the latest trends in data science,
                share insights on blockchain technology, and participate in
                discussions about DSPYT DAO, the decentralized autonomous
                organization shaping the future of programming. Discover,
                collect, and curate valuable programming-related content with
                like-minded individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-28 sm:relative sm:mt-28 sm:py-12 lg:absolute lg:inset-y-2 lg:right-0 lg:w-1/2">
            <div
              className={`outlinedImage ${styles.outlinedImage} relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-max lg:h-full `}
            >
              <Image
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={HeroImage}
                alt="DSPYT - CodeVerse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
