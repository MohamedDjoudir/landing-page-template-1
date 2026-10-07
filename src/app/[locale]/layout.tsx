import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider, QueryProvider } from "@/providers";
import { FloatingCursor } from "@/components";
import { routing, getDirection, openGraphLocales } from "@/i18n";
import { SITE_URL } from "@/lib";

const inter = Inter({ subsets: ["latin"] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((code) => [code, `/${code}`])
      ),
    },
    generator: "Mohamed Djoudir",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: t("siteName"),
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale: hasLocale(routing.locales, locale)
        ? openGraphLocales[locale]
        : openGraphLocales[routing.defaultLocale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const font = locale === "ar" ? notoSansArabic : inter;

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className="dark"
      suppressHydrationWarning
    >
      <body className={`${font.className} bg-black mx-auto max-w-[1440px]`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <QueryProvider>{children}</QueryProvider>
          </ThemeProvider>
          <FloatingCursor />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
