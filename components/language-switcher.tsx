// language toggle button for switching between TH and EN
"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const isThai = language === "th";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={isThai ? "default" : "ghost"}
        size="sm"
        className="px-2"
        onClick={() => setLanguage("th")}
      >
        TH
      </Button>
      <Button
        variant={!isThai ? "default" : "ghost"}
        size="sm"
        className="px-2"
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
    </div>
  );
}
