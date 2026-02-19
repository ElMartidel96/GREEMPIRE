'use client';

/**
 * ============================================================================
 * GREEN EMPIRE LAWN & LANDSCAPE LLC - LANDING PAGE
 * ============================================================================
 *
 * Professional landing page for landscaping & exterior maintenance
 * Features: i18n (EN/ES), Dark/Light mode, Glass morphism design
 * Sections: Hero, Stats, Services, Packages, Why Us, How It Works,
 *           Gallery, Testimonials, FAQ, CTA
 * ============================================================================
 */

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Leaf,
  Droplets,
  Sun,
  TreePine,
  Home,
  Scissors,
  Phone,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  MapPin,
  Calendar,
  Heart,
  Eye,
  Flower2,
  ThumbsUp,
  Crown,
  CircleDollarSign,
} from 'lucide-react';

export default function LandingPage() {
  const t = useTranslations('landing');
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen theme-gradient-bg text-gray-900 dark:text-white">
      {/* Ambient background elements - subtle, diffused */}
      <div className="fixed inset-0 opacity-[0.07] dark:opacity-[0.04] pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-ge-green-light rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-ge-gold rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-ge-lime rounded-full filter blur-3xl" />
      </div>

      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-8 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className={`space-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Badges */}
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ge-green/10 dark:bg-ge-green-light/20 backdrop-blur-sm rounded-full border border-ge-green/30 w-fit">
                  <Leaf className="w-3.5 h-3.5 text-ge-green dark:text-ge-green-light" />
                  <span className="text-xs font-medium text-ge-dark dark:text-white">{t('hero.badge1')}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ge-gold/10 dark:bg-ge-gold/20 backdrop-blur-sm rounded-full border border-ge-gold/30 w-fit">
                  <Award className="w-3.5 h-3.5 text-ge-gold" />
                  <span className="text-xs font-medium text-ge-dark dark:text-white">{t('hero.badge2')}</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">
                  {t('hero.title1')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-ge-green via-ge-green-light to-ge-gold bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ge-green to-ge-green-light rounded-lg font-semibold text-white text-sm hover:from-ge-green-light hover:to-ge-green transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  {t('hero.cta1')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+15023142158"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-sm text-gray-700 dark:text-white border border-gray-200 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  {t('hero.cta2')}
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <Shield className="w-4 h-4 text-ge-green" />
                  <span className="text-xs">{t('hero.trust1')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <Star className="w-4 h-4 text-ge-gold" />
                  <span className="text-xs">{t('hero.trust2')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-ge-green-light" />
                  <span className="text-xs">{t('hero.trust3')}</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image/Logo */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative flex items-center justify-center">
                {/* Glow effect */}
                <div
                  className="absolute w-full max-w-lg aspect-square rounded-full opacity-20"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(76,175,80,0.15) 0%, rgba(200,169,81,0.08) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Logo Container */}
                <div className="relative w-full max-w-md rounded-3xl glass-crystal p-6 flex items-center justify-center" style={{ animation: 'float 4s ease-in-out infinite' }}>
                  <Image
                    src="/logo.png"
                    alt="Green Empire Lawn & Landscape"
                    width={400}
                    height={400}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 p-3 rounded-xl glass-crystal" style={{ animation: 'float 3s ease-in-out infinite' }}>
                  <Leaf className="w-6 h-6 text-ge-green-light" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 rounded-xl glass-crystal" style={{ animation: 'float 3.5s ease-in-out infinite 0.5s' }}>
                  <Sparkles className="w-6 h-6 text-ge-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="relative py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              { icon: Home, label: t('stats.properties'), value: '500+', color: 'text-ge-green dark:text-ge-green-light' },
              { icon: Star, label: t('stats.rating'), value: '4.9/5', color: 'text-ge-gold' },
              { icon: Clock, label: t('stats.experience'), value: '10+', color: 'text-ge-green dark:text-ge-green-light' },
              { icon: Award, label: t('stats.satisfaction'), value: '100%', color: 'text-ge-gold' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl glass-crystal hover:scale-105 transition-all text-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="relative py-16 px-4 bg-gradient-to-b from-transparent via-ge-green/5 dark:via-ge-green/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ge-green/10 dark:bg-ge-green-light/20 rounded-full mb-4">
              <Scissors className="w-4 h-4 text-ge-green dark:text-ge-green-light" />
              <span className="text-sm font-medium text-ge-green dark:text-ge-green-light">{t('services.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Scissors, title: t('services.mowing.title'), desc: t('services.mowing.desc'), color: 'text-ge-green dark:text-ge-green-light', bg: 'bg-ge-green/10 dark:bg-ge-green-light/20' },
              { icon: Leaf, title: t('services.cleanup.title'), desc: t('services.cleanup.desc'), color: 'text-ge-lime', bg: 'bg-ge-lime/10 dark:bg-ge-lime/20' },
              { icon: Droplets, title: t('services.gutters.title'), desc: t('services.gutters.desc'), color: 'text-ge-green dark:text-ge-green-light', bg: 'bg-ge-green/10 dark:bg-ge-green-light/20' },
              { icon: Sparkles, title: t('services.pressure.title'), desc: t('services.pressure.desc'), color: 'text-ge-gold', bg: 'bg-ge-gold/10 dark:bg-ge-gold/20' },
              { icon: Flower2, title: t('services.garden.title'), desc: t('services.garden.desc'), color: 'text-ge-green dark:text-ge-green-light', bg: 'bg-ge-green/10 dark:bg-ge-green-light/20' },
              { icon: TreePine, title: t('services.mulching.title'), desc: t('services.mulching.desc'), color: 'text-ge-earth dark:text-ge-earth-light', bg: 'bg-ge-earth/10 dark:bg-ge-earth-light/20' },
            ].map((service, i) => (
              <div
                key={i}
                className="p-5 rounded-xl glass-crystal hover:scale-105 transition-all group"
              >
                <div className={`p-2.5 ${service.bg} rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{service.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 ge-button-primary rounded-lg font-semibold text-white text-sm hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4" />
              {t('services.cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== PACKAGES / PRICING SECTION ==================== */}
      <section id="packages" className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ge-gold/10 dark:bg-ge-gold/20 rounded-full mb-4">
              <CircleDollarSign className="w-4 h-4 text-ge-gold" />
              <span className="text-sm font-medium text-ge-gold">{t('packages.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('packages.title')}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('packages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Essential Care */}
            <div className="relative p-6 rounded-2xl glass-crystal border border-ge-green/20 dark:border-ge-green-light/20 hover:scale-[1.02] transition-all">
              <div className="mb-4">
                <Leaf className="w-8 h-8 text-ge-green dark:text-ge-green-light mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('packages.essential.name')}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('packages.essential.desc')}</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-ge-green dark:text-ge-green-light">{t('packages.essential.price')}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/{t('packages.perVisit')}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ge-green dark:text-ge-green-light mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t(`packages.essential.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center py-2.5 border-2 border-ge-green dark:border-ge-green-light text-ge-green dark:text-ge-green-light rounded-lg font-semibold text-sm hover:bg-ge-green hover:text-white dark:hover:bg-ge-green-light dark:hover:text-ge-dark transition-all"
              >
                {t('packages.getCTA')}
              </Link>
            </div>

            {/* Complete Care - Featured */}
            <div className="relative p-6 rounded-2xl glass-crystal border-2 border-ge-gold/40 hover:scale-[1.02] transition-all shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-ge-gold text-ge-dark rounded-full text-xs font-bold">
                {t('packages.popular')}
              </div>
              <div className="mb-4 mt-2">
                <Crown className="w-8 h-8 text-ge-gold mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('packages.complete.name')}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('packages.complete.desc')}</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-ge-gold">{t('packages.complete.price')}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/{t('packages.perMonth')}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ge-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t(`packages.complete.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center py-2.5 ge-button-gold rounded-lg font-semibold text-sm"
              >
                {t('packages.getCTA')}
              </Link>
            </div>

            {/* Total Property Care */}
            <div className="relative p-6 rounded-2xl glass-crystal border border-ge-green/20 dark:border-ge-green-light/20 hover:scale-[1.02] transition-all">
              <div className="mb-4">
                <Sparkles className="w-8 h-8 text-ge-green dark:text-ge-green-light mb-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t('packages.total.name')}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t('packages.total.desc')}</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-ge-green dark:text-ge-green-light">{t('packages.total.price')}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/{t('packages.perMonth')}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-ge-green dark:text-ge-green-light mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t(`packages.total.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center py-2.5 border-2 border-ge-green dark:border-ge-green-light text-ge-green dark:text-ge-green-light rounded-lg font-semibold text-sm hover:bg-ge-green hover:text-white dark:hover:bg-ge-green-light dark:hover:text-ge-dark transition-all"
              >
                {t('packages.getCTA')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-transparent via-ge-gold/5 dark:via-ge-gold/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('whyUs.title')}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Problem */}
            <div className="p-6 bg-red-50 dark:bg-red-500/10 rounded-2xl border border-red-200 dark:border-red-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-red-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400">{t('whyUs.problemTitle')}</h3>
              </div>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-xs font-bold">x</span>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t(`whyUs.problem${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="p-6 bg-green-50 dark:bg-ge-green-light/10 rounded-2xl border border-ge-green/30 dark:border-ge-green-light/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-ge-green/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-ge-green dark:text-ge-green-light" />
                </div>
                <h3 className="text-xl font-bold text-ge-green dark:text-ge-green-light">{t('whyUs.solutionTitle')}</h3>
              </div>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-ge-green/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-ge-green dark:text-ge-green-light" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t(`whyUs.solution${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS SECTION ==================== */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { step: 1, icon: Phone, color: 'text-ge-green dark:text-ge-green-light', bg: 'bg-ge-green/10 dark:bg-ge-green-light/20', numBg: 'bg-ge-green dark:bg-ge-green-light' },
              { step: 2, icon: Eye, color: 'text-ge-gold', bg: 'bg-ge-gold/10 dark:bg-ge-gold/20', numBg: 'bg-ge-gold' },
              { step: 3, icon: ThumbsUp, color: 'text-ge-green dark:text-ge-green-light', bg: 'bg-ge-green/10 dark:bg-ge-green-light/20', numBg: 'bg-ge-green dark:bg-ge-green-light' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                {i < 2 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 dark:from-white/20 to-transparent z-0" />
                )}

                <div className="relative z-10 p-6 rounded-2xl glass-crystal hover:scale-[1.02] transition-all">
                  <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg ${item.numBg} text-white`}>
                    {item.step}
                  </div>

                  <div className={`p-3 ${item.bg} rounded-xl w-fit mb-4 mt-2`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t(`howItWorks.step${item.step}.title`)}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t(`howItWorks.step${item.step}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEASONAL SERVICES SECTION ==================== */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-transparent via-ge-green/5 dark:via-ge-green/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ge-lime/10 dark:bg-ge-lime/20 rounded-full mb-4">
              <Sun className="w-4 h-4 text-ge-lime" />
              <span className="text-sm font-medium text-ge-lime">{t('seasonal.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('seasonal.title')}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('seasonal.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { season: 'spring', icon: Flower2, color: 'text-green-500', bg: 'bg-green-500/10', borderColor: 'border-green-500/20' },
              { season: 'summer', icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-500/10', borderColor: 'border-yellow-500/20' },
              { season: 'fall', icon: Leaf, color: 'text-orange-500', bg: 'bg-orange-500/10', borderColor: 'border-orange-500/20' },
              { season: 'winter', icon: Sparkles, color: 'text-blue-400', bg: 'bg-blue-400/10', borderColor: 'border-blue-400/20' },
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-2xl glass-crystal border ${item.borderColor} hover:scale-[1.02] transition-all`}>
                <div className={`p-2 ${item.bg} rounded-lg w-fit mb-3`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t(`seasonal.${item.season}.name`)}</h3>
                <ul className="space-y-1.5">
                  {[1, 2, 3].map((j) => (
                    <li key={j} className="flex items-start gap-1.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${item.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{t(`seasonal.${item.season}.service${j}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ge-gold/10 dark:bg-ge-gold/20 rounded-full mb-4">
              <Heart className="w-4 h-4 text-ge-gold" />
              <span className="text-sm font-medium text-ge-gold">{t('testimonials.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-5 rounded-xl glass-crystal">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-ge-gold fill-ge-gold" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
                  &quot;{t(`testimonials.review${i}.text`)}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ge-green/20 flex items-center justify-center text-ge-green dark:text-ge-green-light font-bold text-sm">
                    {t(`testimonials.review${i}.name`).charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{t(`testimonials.review${i}.name`)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t(`testimonials.review${i}.location`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREA SECTION ==================== */}
      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 lg:p-8 rounded-2xl glass-crystal text-center">
            <MapPin className="w-10 h-10 text-ge-green dark:text-ge-green-light mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {t('serviceArea.title')}
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              {t('serviceArea.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['area1', 'area2', 'area3', 'area4', 'area5'].map((area) => (
                <span key={area} className="px-3 py-1.5 bg-ge-green/10 dark:bg-ge-green-light/20 text-ge-green dark:text-ge-green-light rounded-full text-sm font-medium">
                  {t(`serviceArea.${area}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ge-green/10 dark:bg-ge-green-light/20 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-ge-green dark:text-ge-green-light" />
              <span className="text-sm font-medium text-ge-green dark:text-ge-green-light">{t('faq.badge')}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-xl glass-crystal overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">
                    {t(`faq.q${i}`)}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-ge-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t(`faq.a${i}`)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-transparent via-ge-green/10 dark:via-ge-green/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-8 lg:p-12 rounded-3xl glass-crystal border border-ge-gold/20">
            <Leaf className="w-12 h-12 text-ge-green dark:text-ge-green-light mx-auto mb-4" />
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('finalCta.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {t('finalCta.line1')}
            </p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('finalCta.line2')}
            </p>
            <p className="text-lg text-ge-gold font-medium mb-8">
              {t('finalCta.line3')}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-ge-green to-ge-green-light rounded-xl font-bold text-lg text-white hover:from-ge-green-light hover:to-ge-green transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                {t('finalCta.button1')}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+15023142158"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl font-bold text-lg text-gray-700 dark:text-white border border-gray-200 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                {t('finalCta.button2')}
              </a>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
              {t('finalCta.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
