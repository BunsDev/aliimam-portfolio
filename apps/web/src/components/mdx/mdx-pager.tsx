import Link from 'next/link';

import { cn, truncate } from 'ai-utilities';

interface MdxPagerItem {
  title: string;
  slug: string;
}

interface MdxPagerProps extends React.HTMLAttributes<HTMLDivElement> {
  currentItem: MdxPagerItem;
  allItems: MdxPagerItem[];
}

export function MdxPager({ currentItem, allItems, className, ...props }: MdxPagerProps) {
  const pager = getPager(currentItem, allItems);

  if (!pager) {
    return null;
  }

  return (
    <div className={cn('flex items-center justify-between', className)} {...props}>
      {pager?.prev ? (
        <Link
          aria-label="Previous post"
          href={pager.prev.slug}
          className=""
        >
         
          {truncate(pager.prev.title, 20)}
        </Link>
      ) : null}
      {pager?.next ? (
        <Link
          aria-label="Next post"
          href={pager.next.slug}
          className=""
        >
          {truncate(pager.next.title, 20)}
          
        </Link>
      ) : null}
    </div>
  );
}

export function getPager(currentItem: MdxPagerItem, allItems: MdxPagerItem[]) {
  const flattenedLinks = allItems.flat();
  const activeIndex = flattenedLinks.findIndex((link) => currentItem.slug === link?.slug);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next
  };
}
