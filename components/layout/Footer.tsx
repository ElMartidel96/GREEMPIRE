'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Leaf, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-ge-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 inline-block mb-2 border border-white/20">
                <Image
                  src="/logo_greempir.png"
                  alt="Green Empire Lawn & Landscape"
                  width={160}
                  height={88}
                  className="object-contain h-14 w-auto"
                />
              </div>
              <div>
                <div className="font-bold text-xl">{t('brand.name')}</div>
                <div className="text-xs text-ge-gold">{t('brand.tagline')}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t('brand.description')}
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-ge-green-light transition-colors">
                <Phone className="w-4 h-4" />
                <span>(800) 555-1234</span>
              </a>
              <a href="mailto:info@greenempirellc.com" className="flex items-center gap-2 hover:text-ge-green-light transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@greenempirellc.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{t('brand.location')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('brand.hours')}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('services.title')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/#services" className="hover:text-ge-green-light transition-colors">
                  {t('services.mowing')}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ge-green-light transition-colors">
                  {t('services.cleanup')}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ge-green-light transition-colors">
                  {t('services.gutters')}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ge-green-light transition-colors">
                  {t('services.pressure')}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-ge-green-light transition-colors">
                  {t('services.garden')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('company.title')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/#about" className="hover:text-ge-green-light transition-colors">
                  {t('company.about')}
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-ge-green-light transition-colors">
                  {t('company.pricing')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ge-green-light transition-colors">
                  {t('company.contact')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ge-green-light transition-colors">
                  {t('company.quote')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('areas.title')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{t('areas.area1')}</li>
              <li>{t('areas.area2')}</li>
              <li>{t('areas.area3')}</li>
              <li>{t('areas.area4')}</li>
              <li>{t('areas.area5')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            {t('bottom.copyright')}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Leaf className="w-4 h-4 text-ge-green-light" />
              <span>{t('bottom.licensed')}</span>
            </div>
            <span>|</span>
            <span>{t('bottom.insured')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
