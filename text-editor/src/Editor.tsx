import React from 'react';

interface EditorProps {
  text: string;
  fontFamily: string;
  fontWeight: string;
  italic: boolean;
  onTextChange: (text: string) => void;
}

const Editor: React.FC<EditorProps> = ({ text, fontFamily, fontWeight, italic, onTextChange }) => {
  const style = {
    fontFamily,
    fontWeight,
    fontStyle: italic ? 'italic' : 'normal',
  };

  return (
    <textarea
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      style={style}
    />
  );
};

export default Editor;
