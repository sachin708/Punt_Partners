import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import FontSelector from './FontSelector';
import fontData from './fontData';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState(localStorage.getItem('text') || '');
  const [fontFamily, setFontFamily] = useState(localStorage.getItem('fontFamily') || 'Roboto');
  const [fontWeight, setFontWeight] = useState(localStorage.getItem('fontWeight') || '400');
  const [italic, setItalic] = useState(localStorage.getItem('italic') === 'true');

  useEffect(() => {
    localStorage.setItem('text', text);
    localStorage.setItem('fontFamily', fontFamily);
    localStorage.setItem('fontWeight', fontWeight);
    localStorage.setItem('italic', italic.toString());
  }, [text, fontFamily, fontWeight, italic]);

  const handleFontFamilyChange = (newFontFamily: string) => {
    setFontFamily(newFontFamily);
    const variants = fontData[newFontFamily].variants;
    const newFontWeight = variants.includes(fontWeight) ? fontWeight : variants[0];
    setFontWeight(newFontWeight);
    setItalic(variants.includes(`${newFontWeight}italic`));
  };

  const handleReset = () => {
    setText('');
    setFontFamily('Roboto');
    setFontWeight('400');
    setItalic(false);
  };

  const handleSubmit = () => {
    alert('Submitted!');
  };

  return (
    <div className="app">
      <FontSelector
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        italic={italic}
        onFontFamilyChange={handleFontFamilyChange}
        onFontWeightChange={setFontWeight}
        onItalicChange={setItalic}
      />
      <Editor
        text={text}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        italic={italic}
        onTextChange={setText}
      />
      <div className="buttons">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
