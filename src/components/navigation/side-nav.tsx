'use client';
import Logo from '../shared/logo';
import { useParams, usePathname } from 'next/navigation';
import { classNames } from '@/utils/string';
import TagIcon from '../shared/icons/tag';
import HomeIcon from '../shared/icons/home';
import ArchiveIcon from '../shared/icons/archive';
import ChevronRightIcon from '../shared/icons/chevron-right';
const navigation = [
  {
    name: 'All Notes',
    href: '/notes',
    icon: HomeIcon,
    current: true,
  },
  {
    name: 'Archived Notes',
    href: '/archived-notes',
    icon: ArchiveIcon,
    current: false,
  },
];
const tags = [
  {
    id: 'cooking',
    name: 'Cooking',
    href: '/tags/cooking/notes',
    current: false,
  },
  {
    id: 'dev',
    name: 'Dev',
    href: '/tags/dev/notes',
    current: false,
  },
  {
    id: 'fitness',
    name: 'Fitness',
    href: '/tags/fitness/notes',
    current: true,
  },
  {
    id: 'health',
    name: 'Health',
    href: '/tags/health/notes',
    current: true,
  },
  {
    id: 'personal',
    name: 'Personal',
    href: '/tags/personal/notes',
    current: true,
  },
  {
    id: 'react',
    name: 'React',
    href: '/tags/react/notes',
    current: true,
  },
  {
    id: 'recipes',
    name: 'Recipes',
    href: '/tags/recipes/notes',
    current: true,
  },
  {
    id: 'shopping',
    name: 'Shopping',
    href: '/tags/shopping/notes',
    current: true,
  },
  {
    id: 'travel',
    name: 'Travel',
    href: '/tags/travel/notes',
    current: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    href: '/tags/typescript/notes',
    current: true,
  },
];
export function SideNav() {
  const pathname = usePathname();
  const params = useParams<{ tagId: string }>();
  return (
    <nav className="flex h-dvh flex-col gap-y-4 border-r border-neutral-200 px-4 py-3 dark:border-neutral-800">
      <div className="flex h-13 flex-row items-center">
        <Logo />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-2">
          <li className="border-b-1 border-neutral-200 pb-2 dark:border-neutral-800">
            <ul role="list" className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      pathname.startsWith(item.href)
                        ? 'bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white',

                      'group flex gap-x-2 rounded-lg px-3 py-2.5 text-sm font-medium',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        pathname.startsWith(item.href)
                          ? 'color-blue-500'
                          : 'color-neutral-700 group-hover:color-blue-500 dark:color-neutral-200',
                        'size-5 shrink-0',
                      )}
                    />
                    <span className="flex-1">{item.name}</span>
                    {pathname.startsWith(item.href) && (
                      <ChevronRightIcon className="items-right color-neutral-950 dark:color-white size-5 shrink-0" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="mx-2 text-sm font-medium text-neutral-500">
              Tags
            </div>
            <ul role="list" className="mt-2 space-y-1">
              {tags.map((tag) => (
                <li key={tag.name}>
                  <a
                    href={`/tags/${tag.id}/notes`}
                    className={classNames(
                      tag.id === params.tagId
                        ? 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white',
                      'group flex justify-between rounded-lg px-3 py-2.5 text-sm font-medium',
                    )}
                  >
                    <div className="flex gap-x-2">
                      <TagIcon
                        className={classNames(
                          tag.id === params.tagId
                            ? 'color-blue-500'
                            : 'color-neutral-700 group-hover:color-blue-500 dark:color-neutral-200',
                          'size-5 shrink-0',
                        )}
                      />
                      <span className="truncate">{tag.name}</span>
                    </div>
                    {tag.id === params.tagId && (
                      <ChevronRightIcon className="color-neutral-950 dark:color-white size-5 shrink-0 self-end" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
