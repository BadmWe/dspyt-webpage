import Link from "next/link";

import GitHubIcon from "@/components/SocialMediaIcons/GitHubIcon";
import LinkedInIcon from "@/components/SocialMediaIcons/LinkedInIcon";
import TwitterIcon from "@/components/SocialMediaIcons/TwitterIcon";

const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/dspytdao",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <TwitterIcon />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/dspytdao",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <GitHubIcon />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/TMEZau6SQ2",
    icon: (props) => (
      <svg width="22px" height="22px" viewBox="0 -28.5 256 256" {...props}>
        <path
          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
    ),
  },
  {
    name: "YouTube Dspyt Channel",
    href: "https://www.youtube.com/channel/UCpssd9fVzqvTB6mWSaJ4lUw",
    icon: (props) => (
      <svg viewBox="-35.20005 -41.33325 305.0671 247.9995" {...props}>
        <path
          d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"
          fill="currentColor"
        />
        <path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "LinkedIn Dspyt",
    href: "https://www.linkedin.com/company/dspytdao/",
    icon: (props) => (
      <svg role="img" viewBox="0 0 24 24" {...props}>
        <LinkedInIcon />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 ">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <p key={item.name} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-600 dark:text-gray-300">
            &copy; 2024 Dspyt
          </p>
        </div>
      </div>
    </footer>
  );
}
