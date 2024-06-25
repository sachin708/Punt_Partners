import React from 'react';
import fontData from './fontData';

interface FontSelectorProps {
  fontFamily: string;
  fontWeight: string;
  italic: boolean;
  onFontFamilyChange: (fontFamily: string) => void;
  onFontWeightChange: (fontWeight: string) => void;
  onItalicChange: (italic: boolean) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({
  fontFamily,
  fontWeight,
  italic,
  onFontFamilyChange,
  onFontWeightChange,
  onItalicChange,
}) => {
  const fonts = Object.keys(fontData);

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFontFamilyChange(e.target.value);
  };

  const handleFontWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFontWeightChange(e.target.value);
  };

  const handleItalicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onItalicChange(e.target.checked);
  };

  const variants = fontData[fontFamily].variants;
  const weights = variants.filter((v: string) => !v.includes('italic')).map((v: string) => v);
  const supportsItalic = variants.includes(`${fontWeight}italic`);

  return (
    <div>
      <div>
        <label>Font Family:</label>
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Font Weight:</label>
        <select value={fontWeight} onChange={handleFontWeightChange}>
          {weights.map((weight) => (
            <option key={weight} value={weight}>
              {weight}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={italic}
            onChange={handleItalicChange}
            disabled={!supportsItalic}
          />
          Italic
        </label>
      </div>
    </div>
  );
};

export default FontSelector;
