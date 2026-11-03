import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { achievements, features, heroImages, programs, siteConfig, stats, testimonials } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, Card, SectionHeading } from "@/components/ui/Card";
import { StatCounter } from "@/components/ui/StatCounter";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap = { ShieldCheck, Target, HeartHandshake, Trophy };

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero — foto aksi pemain SSB sebagai background */}
      <section className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center text-white">
        <Image
          src={heroImages.home}
          alt="Pemain muda SSB berlatih sepak bola"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/90 via-brand-green-dark/75 to-brand-ink/95" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center w-full">
          {/* <FadeIn>
            <Badge variant="outline" className="mb-5 sm:mb-6">
              <Sparkles size={14} /> Sejak {siteConfig.foundedYear} membentuk pemain muda
            </Badge>
          </FadeIn> */}
          <FadeIn delay={0.08}>
            <h1 className="font-display text-balance text-3xl font-extrabold leading-[1.15] sm:text-5xl md:text-6xl">
              {siteConfig.tagline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-5 sm:mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg leading-relaxed">
              {siteConfig.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <ButtonLink href="/pendaftaran" size="lg">
                Daftar Sekarang <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="/program" variant="outline" size="lg">
                Lihat Program Latihan
              </ButtonLink>
            </div>
          </FadeIn>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 py-6 sm:py-10 md:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Kenapa Pilih Kami"
          title="Dibangun untuk Perkembangan Pemain Muda"
          description="Kombinasi kurikulum terstruktur, pelatih berlisensi, dan budaya kompetitif yang sehat."
        />
        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <FadeIn key={f.title} delay={i * 0.06}>
                <Card className="h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-brand-green-dark">{f.title}</h3>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">{f.desc}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Highlight Program */}
      <section className="bg-black/[0.02] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Program Latihan"
            title="Kurikulum Sesuai Kelompok Usia"
            description="Setiap kelompok usia memiliki fokus latihan dan jadwal yang disesuaikan tahap tumbuh kembang."
          />
          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.05}>
                <Card className="p-6 flex flex-col h-full">
                  <Badge variant="green" className="self-start">
                    Usia {p.ageRange}
                  </Badge>
                  <h3 className="mt-4 font-display font-bold text-lg text-brand-green-dark">{p.name}</h3>
                  <p className="mt-2 text-sm text-black/60 flex-1 leading-relaxed">{p.focus}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="font-display font-bold text-brand-green">{p.price}</span>
                    <Link
                      href="/pendaftaran"
                      className="text-sm font-semibold text-brand-green-dark hover:text-brand-green inline-flex items-center gap-1"
                    >
                      Daftar <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <ButtonLink href="/program" variant="ghost">
              Lihat semua program <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading eyebrow="Rekam Jejak" title="Prestasi Kami" />
        <div className="mt-10 sm:mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <FadeIn key={a} delay={i * 0.05}>
              <div className="flex gap-4 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/10 text-brand-green-dark">
                  <Trophy size={18} />
                </span>
                <span className="text-sm text-black/70 leading-relaxed self-center">{a}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-black/[0.02] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading eyebrow="Testimoni" title="Apa Kata Mereka" />
          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <Card className="p-6 h-full flex flex-col">
                  <p className="text-sm italic text-black/70 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm font-bold text-brand-green-dark">— {t.name}</footer>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-white text-center py-16 sm:py-20 overflow-hidden">
        <Image
          src={heroImages.pendaftaran}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-green-dark/90" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-balance">
            Siap Bergabung Bersama {siteConfig.name}?
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base">
            Pendaftaran siswa baru dibuka sepanjang tahun untuk semua kelompok usia.
          </p>
          <div className="mt-8">
            <ButtonLink href="/pendaftaran" size="lg">
              Daftar Sekarang <ArrowRight size={18} />
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
