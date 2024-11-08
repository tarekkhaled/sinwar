import React, { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import IntroHeader from './components/IntroHeader';
import NarrativeSection from './components/NarrativeSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
  };

  const narrativeKeys = [
    'sinwar_wife',
    'sinwar_tunnel',
    'alshifa_tunnel',
    'targeting_hospitals',
    'aid_theft',
    'human_shields',
    'october_seventh_casualties',
    'beheaded_babies',
    'burned_children',
    'tortured_family',
    'pregnant_woman',
    'systematic_rape',
    'only_democracy',
    'land_without_people',
    'david_vs_goliath',
    'holocaust_legacy',
    'historical_connection',
    'ancient_jewish_kingdoms',
    'religious_significance',
    'jerusalem_holy_city',
    'contemporary_challenges',
    'cultural_linguistic_ties',
    'archaeological_evidence',
    'exile_and_return',
    'zionism_origins_implications',
    'self_determination',
    'security_expansion',
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 ${
        language === 'ar' ? 'font-noto-arabic' : 'font-open-sans'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <IntroHeader toggleLanguage={toggleLanguage} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {narrativeKeys.map((key) => (
            <NarrativeSection key={key} narrativeKey={key} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
