import { cache } from 'react';
import { getReader } from '../reader';

function getNodeText(node: any): string {
  if (!node) return '';
  if (typeof node.text === 'string') return node.text;
  if (node.type === 'text') return node.value || '';
  if (node.children) {
    return node.children.map(getNodeText).join('');
  }
  return '';
}

export const getChangelogs = cache(async () => {
  const reader = await getReader();
  if (!reader) return [];
  const allChangelogs = await reader.collections.changelog.all();
  
  const entries = [];
  for (const item of allChangelogs) {
    const { slug, entry } = item;
    const children = await entry.content();
    
    // Summary consists of children until the first heading
    const firstHeadingIndex = children.findIndex((child: any) => child.type === 'heading');
    const summaryChildren = firstHeadingIndex > -1 ? children.slice(0, firstHeadingIndex) : children;
    
    // Construct summary Markdoc node
    const summaryNode = {
      type: 'document',
      children: summaryChildren,
    };
    
    // Extract category list items
    const improvements: string[] = [];
    const fixes: string[] = [];
    const api: string[] = [];
    const shortcuts: string[] = [];
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 'heading') {
        const headingText = child.children ? child.children.map(getNodeText).join('').toLowerCase() : '';
        const nextChild = children[i + 1];
        
        if (nextChild && (nextChild.type === 'unordered-list' || nextChild.type === 'ordered-list' || nextChild.type === 'list')) {
          const listItems = nextChild.children || [];
          const itemsText = listItems.map((li: any) => getNodeText(li).trim()).filter(Boolean);
          
          if (headingText.includes('improvements')) {
            improvements.push(...itemsText);
          } else if (headingText.includes('fixes')) {
            fixes.push(...itemsText);
          } else if (headingText.includes('api')) {
            api.push(...itemsText);
          } else if (headingText.includes('shortcuts')) {
            shortcuts.push(...itemsText);
          }
        }
      }
    }
    
    // Dot color based on type
    let dotColor = 'bg-emerald-500';
    if (entry.type === 'New') {
      dotColor = 'bg-orange-500';
    } else if (entry.type === 'Fix') {
      dotColor = 'bg-amber-500';
    }
    
    // Format date for UI (e.g. "May 20, 2026")
    const dateObj = new Date(entry.releaseDate || '');
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });
    const dateStr = dateObj.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC'
    });
    
    // Mockup mapping based on slug
    let mockup = entry.image;
    if (!mockup) {
      if (slug.includes('v2-4-0')) mockup = '/mockups/dark/Meetings Dark.png';
      else if (slug.includes('v2-3-0')) mockup = '/mockups/dark/Motion Dark.png';
      else if (slug.includes('v2-2-0')) mockup = '/mockups/dark/Dashboard Dark.png';
      else if (slug.includes('v2-1-0')) mockup = '/mockups/dark/Task Overview Dark.png';
      else mockup = '/mockups/dark/Dashboard Dark.png';
    }
    
    entries.push({
      slug,
      version: entry.version || slug,
      date: formattedDate,
      dateStr,
      dotColor,
      title: entry.title || `${entry.version} — Release`,
      mockup,
      summaryNode,
      summaryText: summaryChildren.map(getNodeText).join(' ').trim(),
      improvements,
      fixes,
      api,
      shortcuts,
      timestamp: dateObj.getTime(),
    });
  }
  
  // Sort descending by timestamp
  return entries.sort((a, b) => b.timestamp - a.timestamp);
});
