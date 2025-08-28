import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LandingHero } from "@/components/landing-hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IABA – Intania Alumni Basketball Association",
  description:
    "สมัครสมาชิก IABA และติดตามสมาชิก ข่าวสาร และสิทธิพิเศษของสมาคมบาสเกตบอลศิษย์เก่าวิศวฯ จุฬาฯ",
  openGraph: {
    title: "IABA – Intania Alumni Basketball Association",
    description:
      "สมัครสมาชิก IABA และติดตามสมาชิก ข่าวสาร และสิทธิพิเศษของสมาคมบาสเกตบอลศิษย์เก่าวิศวฯ จุฬาฯ",
    url: "/",
    siteName: "IABA Member System",
  },
  twitter: {
    card: "summary_large_image",
    title: "IABA – Intania Alumni Basketball Association",
    description:
      "สมัครสมาชิก IABA และติดตามสมาชิก ข่าวสาร และสิทธิพิเศษของสมาคมบาสเกตบอลศิษย์เก่าวิศวฯ จุฬาฯ",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <LandingHero />
      <footer className="mt-auto w-full border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-xs flex items-center justify-center gap-6">
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} IABA
          </span>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Line OA (เร็วๆ นี้)
          </Link>
          <ThemeSwitcher />
        </div>
      </footer>
    </main>
  );
}
