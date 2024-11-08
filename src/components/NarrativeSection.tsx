import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Link } from 'lucide-react';

interface NarrativeSectionProps {
  narrativeKey: string;
}

const NarrativeSection: React.FC<NarrativeSectionProps> = ({
  narrativeKey,
}) => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const basePath = `${narrativeKey}`;
  const isRTL = i18n.language === 'ar';

  // Get resources from translation
  const resources = t(`${basePath}.resources`, { returnObjects: true, defaultValue: [] });

  console.log({
    isRtL: isRTL
  })

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-6 py-4 flex justify-between items-center bg-green-50 hover:bg-green-100 transition-colors duration-200`}
      >
        <h2 className="text-xl font-semibold text-green-800">
          {t(`${basePath}.title`)}
        </h2>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-green-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-green-600" />
        )}
      </button>

      {isExpanded && (
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-red-700 mb-2">
              {isRTL ? 'الادعاء الصهيوني:' : 'Zionist Claim:'}
            </h3>
            <p className="text-gray-700">
              {t(`${basePath}.zionist_claim`)}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              {isRTL ? 'الرد:' : 'Response:'}
            </h3>
            <p className="text-gray-700">
              {t(`${basePath}.palestine_response.description`)}
            </p>
          </div>

          {resources && resources.length > 0 && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                {isRTL ? 'المصادر:' : 'Resources:'}
              </h3>
              <ul className="space-y-2">
                {resources.map((resource: string, index: number) => (
                  <li key={index} className="flex items-center text-blue-600 hover:text-blue-800">
                    <Link className="w-4 h-4 mr-2" />
                    <a href={resource} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {isRTL ? 'مصدر' : 'Source'} {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NarrativeSection;
