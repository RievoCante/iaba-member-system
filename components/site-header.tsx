// responsive site header with nav, language switcher, theme toggle, and login link
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "/members", labelTh: "ดูสมาชิกทั้งหมด", labelEn: "Members" },
  { href: "/news", labelTh: "ข่าวสาร", labelEn: "News" },
  { href: "/privileges", labelTh: "สิทธิพิเศษ", labelEn: "Privileges" },
];

export function SiteHeader() {
  const { language } = useLanguage();
  return (
    <header className="w-full border-b border-border/60 sticky top-0 z-40 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="IABA logo"
              width={36}
              height={36}
              priority
            />
            <span className="font-semibold hidden sm:inline">IABA</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-primary transition-colors"
            >
              {language === "th" ? item.labelTh : item.labelEn}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Link href="/auth/login">
            <Button variant="outline" size="sm">
              {language === "th" ? "เข้าสู่ระบบ" : "Login"}
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>
                    {language === "th" ? item.labelTh : item.labelEn}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/auth/login">
                  {language === "th" ? "เข้าสู่ระบบ" : "Login"}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
