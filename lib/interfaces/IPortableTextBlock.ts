// Type definition for a PortableText block (Sanity block content)
export interface IPortableTextBlock {
    _type: 'block';
    _key: string;
    style?: string;
    children: Array<{
      _key: string;
      _type: 'span';
      text: string;
      marks?: string[];
    }>;
    markDefs?: Array<any>;
  }
  