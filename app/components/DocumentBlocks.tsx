import type { DocumentBlock } from '../lib/policies';

export function DocumentBlocks({ blocks }: { blocks: DocumentBlock[] }) {
  return blocks.map((block, index) => {
    if (block.type === 'list') {
      return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    }
    if (block.type === 'heading') return <h3 key={index}>{block.text}</h3>;
    return <p key={index}>{block.text}</p>;
  });
}
