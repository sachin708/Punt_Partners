export interface FontVariant {
    variants: string[];
    url: string;
  }
  
  export interface FontData {
    [fontName: string]: FontVariant;
  }
  