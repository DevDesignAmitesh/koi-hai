import { Github, Globe, Mail, Twitter, Linkedin } from "lucide-react";
import { ThemeButton } from "../components/ThemeButton";
import { Logo } from "../components/Logo";
import Link from "next/link";

interface BuiltByItemsProps {
  icon: any;
  href: string;
}

const builtByItems: BuiltByItemsProps[] = [
  {
    icon: Github,
    href: "https://github.com/DevDesignAmitesh/",
  },
  {
    icon: Globe,
    href: "https://baap.one/",
  },
  {
    icon: Mail,
    href: "mailto:amiteshsingh252@gmail.com",
  },
  {
    icon: Twitter,
    href: "https://x.com/amitesh48256/",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/amitesh-singh-504b2b281/",
  },
];

export const InfoPage = () => {
  return (
    <div className="min-h-screen w-full text-neutral-800 dark:text-neutral-100">
      {/* Header */}
      <div className="w-full px-4 flex justify-between items-center py-4 border-b border-neutral-300 dark:border-neutral-700">
        <Logo />
        <ThemeButton />
      </div>

      <div className="max-w-xl mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[40vh] flex flex-col justify-center">
          <h2 className="text-4xl font-medium tracking-tight mb-4">Koi Hai</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            A private space for couples.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Designed to stay unnoticed.
            <br />
            Built for two people who need a space that feels safe, quiet, and
            personal.
          </p>
        </section>

        {/* What is Koi Hai */}
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-6">What is Koi Hai?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            Koi Hai is a private digital space built for couples.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            It looks like a normal notes app from the outside —
            <br />
            but inside, it becomes a personal world for just two people.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Hard to notice.
            <br />
            Easy to trust.
          </p>
        </section>

        {/* Who is it for */}
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-6">Built for couples</h2>
          <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 mb-6">
            <li>Designed for 1-to-1 connections only</li>
            <li>No groups</li>
            <li>No public profiles</li>
            <li>No discoverability</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Koi Hai supports only one connection — between two people.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
            No noise.
            <br />
            No social layer.
            <br />
            Just a quiet space for two.
          </p>
        </section>

        {/* Privacy & Security */}
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-6">Privacy comes first</h2>
          <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 mb-6">
            <li>End-to-end encrypted</li>
            <li>No third-party access</li>
            <li>No visibility into private content</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Everything inside Koi Hai is protected with end-to-end encryption.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
            Your conversations stay yours.
            <br />
            Your space stays yours.
          </p>
        </section>

        {/* How to access */}
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-6">How to access Koi Hai</h2>

          <div className="space-y-4 mb-8 text-neutral-600 dark:text-neutral-400">
            <div className="flex gap-4">
              <span className="text-sm w-6 shrink-0">1.</span>
              <p>
                <span>
                  <Link href={"/"} className="underline">
                    Open the app
                  </Link>
                </span>{" "}
                — it looks like a normal notes app
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm w-6 shrink-0">2.</span>
              <p>Create a new note</p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm w-6 shrink-0">3.</span>
              <div>
                <p className="mb-2">Write:</p>
                <p className="pl-4 border-l border-neutral-300 dark:border-neutral-700">
                  <span className="font-medium text-neutral-800 dark:text-neutral-100">
                    "register karo"
                  </span>{" "}
                  if you are new
                </p>
                <p className="pl-4 border-l border-neutral-300 dark:border-neutral-700 mt-1">
                  <span className="font-medium text-neutral-800 dark:text-neutral-100">
                    "login karo"
                  </span>{" "}
                  if you already have an account
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-sm w-6 shrink-0">4.</span>
              <p>Follow the steps to enter your private space</p>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            There are no visible login buttons.
            <br />
            No obvious entry points.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
            Access works through simple words —
            <br />
            just like writing a note.
          </p>
        </section>

        {/* Why it exists */}
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-6">Why Koi Hai exists</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Some spaces don't need attention.
            <br />
            They need protection.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
            Koi Hai exists for people who value privacy over visibility,
            <br />
            and safety over popularity.
          </p>
        </section>

        {/* Built by */}
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-6">Built by</h2>

          <div className="flex gap-6">
            {builtByItems.map((item, i) => (
              <Link
                target="_blank"
                key={i}
                href={item.href}
                className="text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              >
                <item.icon size={20} />
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-neutral-200 dark:border-neutral-700 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © Koi Hai — A private space for two.
          </p>
        </footer>
      </div>
    </div>
  );
};
