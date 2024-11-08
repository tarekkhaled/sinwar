import React from 'react';

const FormattedDescription = ({ text }) => {
    const processText = (text) => {
        const result = [];
        let currentIndex = 0;

        // Function to process dash lists section
        const processDashList = (text) => {
            const lines = text.split('\n');
            const listItems = lines
                .filter(line => line.trim().startsWith('- '))
                .map(line => line.trim().slice(2));

            if (listItems.length > 0) {
                return (
                    <ul key={`dash-${currentIndex}`} className="list-disc list-outside ml-6 mb-4 space-y-2">
                        {listItems.map((item, idx) => (
                            <li key={idx} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                );
            }
            return null;
        };

        while (currentIndex < text.length) {
            const nextBulletIndex = text.indexOf('{bullet}', currentIndex);
            const nextDashIndex = text.indexOf('\n- ', currentIndex);

            if (nextBulletIndex === -1 && nextDashIndex === -1) {
                // No more special formatting, add remaining text as paragraph
                const remainingText = text.slice(currentIndex).trim();
                if (remainingText) {
                    result.push(
                        <p key={`p-${currentIndex}`} className="text-gray-700 mb-4">
                            {remainingText}
                        </p>
                    );
                }
                break;
            }

            // Handle regular text before any list
            const nextSpecialIndex = nextBulletIndex !== -1 && (nextDashIndex === -1 || nextBulletIndex < nextDashIndex)
                ? nextBulletIndex
                : nextDashIndex;

            const textBeforeList = text.slice(currentIndex, nextSpecialIndex).trim();
            if (textBeforeList) {
                result.push(
                    <p key={`p-${currentIndex}`} className="text-gray-700 mb-4">
                        {textBeforeList}
                    </p>
                );
            }

            // Process lists
            if (nextBulletIndex !== -1 && (nextDashIndex === -1 || nextBulletIndex < nextDashIndex)) {
                // Process bullet points
                const { bulletPoints, endIndex } = processBulletPoints(nextBulletIndex);
                if (bulletPoints.length > 0) {
                    result.push(
                        <ul key={`bullet-${currentIndex}`} className="list-disc list-outside ml-6 mb-4 space-y-2">
                            {bulletPoints.map((point, idx) => (
                                <li key={idx} className="text-gray-700">{point}</li>
                            ))}
                        </ul>
                    );
                }
                currentIndex = endIndex;
            } else {
                // Process dash list
                const dashList = processDashList(text.slice(nextDashIndex));
                if (dashList) {
                    result.push(dashList);
                }
                currentIndex = nextDashIndex + text.slice(nextDashIndex).indexOf('\n\n');
                if (currentIndex === -1) currentIndex = text.length;
            }
        }

        return result;
    };

    return <div className="space-y-2">{processText(text)}</div>;
};

export default FormattedDescription;
