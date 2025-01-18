import Link from "next/link";

import DiscordIcon from "@/components/SocialMediaIcons/DiscordIcon";
import GitHubIcon from "@/components/SocialMediaIcons/GitHubIcon";
import LinkedInIcon from "@/components/SocialMediaIcons/LinkedInIcon";
import TwitterIcon from "@/components/SocialMediaIcons/TwitterIcon";
import YouTubeIcon from "@/components/SocialMediaIcons/YouTubeIcon";

const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/dspytdao",
    icon: (props) => (
      <svg {...props}>
        <TwitterIcon />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/dspytdao",
    icon: (props) => (
      <svg {...props}>
        <GitHubIcon />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/TMEZau6SQ2",
    icon: (props) => (
      <svg {...props}>
        <DiscordIcon />
      </svg>
    ),
  },
  {
    name: "YouTube Dspyt Channel",
    href: "https://www.youtube.com/channel/UCpssd9fVzqvTB6mWSaJ4lUw",
    icon: (props) => (
      <svg {...props}>
        <YouTubeIcon />
      </svg>
    ),
  },
  {
    name: "LinkedIn Dspyt",
    href: "https://www.linkedin.com/company/dspytdao/",
    icon: (props) => (
      <svg {...props}>
        <LinkedInIcon />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <p
                key={item.name}
                className="text-blue-950 hover:text-green-950 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-600 dark:text-gray-300">
            &copy; 2025 Dspyt
          </p>
        </div>
      </div>
    </footer>
  );
}
