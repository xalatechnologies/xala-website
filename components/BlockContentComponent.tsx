import { IPortableTextBlock } from '@/lib/interfaces/IPortableTextBlock';
import { PortableText, PortableTextBlock, PortableTextReactComponents, PortableTextTypeComponentProps } from '@portabletext/react';

interface BlockContentComponentProps {
  blockContent: IPortableTextBlock[];
  className?: string;
}

const portableTextComponents: PortableTextReactComponents = {
  types: {
    block: ({ value }: PortableTextTypeComponentProps<PortableTextBlock>) => {
      if (!value.children || !Array.isArray(value.children)) {
        return null;
      }
      
      switch (value.style) {
        case 'h1':
          return <h1>{value.children.map(child => ('text' in child ? child.text : null))}</h1>;
        case 'h2':
          return <h2>{value.children.map(child => ('text' in child ? child.text : null))}</h2>;
        default:
          return <p>{value.children.map(child => ('text' in child ? child.text : null))}</p>;
      }
    }
  },
  marks: {}, // You can define custom renderers for marks if needed, leave as empty if not used
  list: () => null, // Return null for unhandled lists
  listItem: () => null, // Return null for unhandled list items
  hardBreak: () => <br />, // Provide default handling for hard breaks
  unknownMark: () => null, // Default handling for unknown marks
  unknownType: () => null, // Default handling for unknown types
  block: {},
  unknownBlockStyle: () => null,
  unknownList:  () => null,
  unknownListItem:  () => null,
};

const BlockContentComponent: React.FC<BlockContentComponentProps> = ({ blockContent, className }) => {
  return <div className={className}>
    <PortableText value={blockContent} components={portableTextComponents} />
  </div>
};


export default BlockContentComponent;