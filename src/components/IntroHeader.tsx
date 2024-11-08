import React from 'react';
import { Leaf, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface IntroHeaderProps {
  toggleLanguage: () => void;
}

const IntroHeader: React.FC<IntroHeaderProps> = ({ toggleLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 text-white">
      {/* Top Bar */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8" />
            <h1 className="text-2xl font-bold">{t('nav.siteTitle')}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-lg px-2">
              {t('hero.tagline')}
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 hover:text-green-200"
            >
              <Globe className="w-5 h-5" />
              <span>{i18n.language === 'en' ? 'عربي' : 'English'}</span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            {t('hero.mainTitle')}
          </h2>

          <p className="text-2xl text-green-100 mb-8">
            {t('hero.subtitle')}
          </p>

          <div className="prose prose-xl prose-invert mx-auto text-left space-y-6">
            <p>{t('hero.intro.part1')}</p>
            <p>{t('hero.intro.part2')}</p>
            <p>{t('hero.intro.part3')}</p>

            <blockquote className="text-2xl font-semibold italic border-l-4 border-green-500 pl-4">
              {t('hero.quote.text')}
              <span className="block text-lg mt-2">- {t('hero.quote.attribution')}</span>
            </blockquote>
          </div>

          <div className="mt-12 space-y-4">
            <p className="text-xl">
              {t('hero.closing.callToAction')}
            </p>
            <p className="text-lg text-green-200">
              {t('hero.closing.impact')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHeader;
