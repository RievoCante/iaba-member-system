// landing hero section with logo, heading, sub text, and CTAs
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function LandingHero() {
  const { language } = useLanguage();

  const headingTh = "Intania Alumni Basketball Association";
  const subTh =
    "สมาคมบาสเกตบอล ศิษย์เก่าคณะวิศวกรรมศาสตร์จุฬาลงกรณ์มหาวิทยาลัย";

  const headingEn = "Intania Alumni Basketball Association";
  const subEn =
    "Alumni Basketball Association of Chulalongkorn University's Faculty of Engineering";

  const heading = language === "th" ? headingTh : headingEn;
  const sub = language === "th" ? subTh : subEn;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6 sm:mb-8 animate-in fade-in zoom-in-95 duration-700">
            <Image
              src="/logo.png"
              alt="IABA logo"
              width={180}
              height={180}
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground animate-in slide-in-from-bottom-2 duration-700">
            {heading}
          </h1>
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground animate-in slide-in-from-bottom-4 duration-700">
            {sub}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-in slide-in-from-bottom-6 duration-700">
            <Link href="/auth/sign-up">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-secondary"
              >
                {language === "th" ? "สมัครสมาชิก" : "Sign up"}
              </Button>
            </Link>
            <div className="flex gap-2">
              <Link href="/members">
                <Button variant="outline" size="lg">
                  {language === "th" ? "ดูสมาชิกทั้งหมด" : "Members"}
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="outline" size="lg">
                  {language === "th" ? "ข่าวสาร" : "News"}
                </Button>
              </Link>
              <Link href="/privileges">
                <Button variant="outline" size="lg">
                  {language === "th" ? "สิทธิพิเศษ" : "Privileges"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
