'use client';

import { classNames } from '@/utils/string';
import { usePathname } from 'next/navigation';
import HomeIcon from '../shared/icons/home';
import TagIcon from '../shared/icons/tag';
import ArchiveIcon from '../shared/icons/archive';
import SearchIcon from '../shared/icons/search';
import SettingsIcon from '../shared/icons/settings';
import Link from 'next/link';

export function MenuBar() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Tabs"
      className="bor xs:h-18.5 isolate flex h-14 justify-center divide-x divide-neutral-100 border-t-1 border-t-neutral-200 px-4 py-3 shadow-md dark:divide-neutral-800 dark:border-t-neutral-800"
    >
      <Link
        href="/notes"
        aria-current="page"
        className={classNames(
          'group flex min-w-0 grow items-center justify-center overflow-hidden',
        )}
      >
        <div
          className={classNames(
            pathname.startsWith('/notes')
              ? 'bg-blue-50 text-blue-500 dark:bg-neutral-700'
              : 'text-neutral-700 hover:text-blue-500 dark:text-neutral-400',

            'xs:w-20 flex grow-0 flex-col items-center space-y-1 rounded-sm px-5.5 py-1 text-center text-xs hover:bg-blue-50 dark:hover:bg-neutral-700',
          )}
        >
          <HomeIcon
            className={classNames(
              pathname.startsWith('/notes')
                ? 'fill-blue-500'
                : 'fill-neutral-700 group-hover:fill-blue-500 dark:fill-neutral-400',
              'size-6 shrink-0',
            )}
          ></HomeIcon>
          <span className="xs:block text-preset-5 hidden">Home</span>
        </div>
      </Link>
      <Link
        href="/search"
        className={classNames(
          'group flex min-w-0 grow items-center justify-center overflow-hidden',
        )}
      >
        <div
          className={classNames(
            pathname.startsWith('/search')
              ? 'bg-blue-50 text-blue-500 dark:bg-neutral-700'
              : 'text-neutral-700 hover:text-blue-500 dark:text-neutral-400',

            'xs:w-20 flex grow-0 flex-col items-center space-y-1 rounded-sm px-5.5 py-1 text-center text-xs hover:bg-blue-50 dark:hover:bg-neutral-700',
          )}
        >
          <SearchIcon
            className={classNames(
              pathname.startsWith('/search')
                ? 'fill-blue-500'
                : 'fill-neutral-700 group-hover:fill-blue-500 dark:fill-neutral-400',
              'size-6 shrink-0',
            )}
          ></SearchIcon>
          <span className="xs:block text-preset-5 hidden">Search</span>
        </div>
      </Link>
      <Link
        href="/archived-notes"
        className={classNames(
          'group flex min-w-0 grow items-center justify-center overflow-hidden',
        )}
      >
        <div
          className={classNames(
            pathname.startsWith('/archived-notes')
              ? 'bg-blue-50 text-blue-500 dark:bg-neutral-700'
              : 'text-neutral-700 hover:text-blue-500 dark:text-neutral-400',

            'xs:w-20 flex grow-0 flex-col items-center space-y-1 rounded-sm px-5.5 py-1 text-center text-xs hover:bg-blue-50 dark:hover:bg-neutral-700',
          )}
        >
          <ArchiveIcon
            className={classNames(
              pathname.startsWith('/archived-notes')
                ? 'stroke-blue-500'
                : 'stroke-neutral-700 group-hover:stroke-blue-500 dark:stroke-neutral-400',
              'size-6 shrink-0',
            )}
          ></ArchiveIcon>
          <span className="xs:block text-preset-5 hidden">Archived</span>
        </div>
      </Link>
      <Link
        href="/tags"
        className={classNames(
          'group flex min-w-0 grow items-center justify-center overflow-hidden',
        )}
      >
        <div
          className={classNames(
            pathname.startsWith('/tags')
              ? 'bg-blue-50 text-blue-500 dark:bg-neutral-700'
              : 'text-neutral-700 hover:text-blue-500 dark:text-neutral-400',

            'xs:w-20 flex grow-0 flex-col items-center space-y-1 rounded-sm px-5.5 py-1 text-center text-xs hover:bg-blue-50 dark:hover:bg-neutral-700',
          )}
        >
          <TagIcon
            className={classNames(
              pathname.startsWith('/tags')
                ? 'stroke-blue-500'
                : 'stroke-neutral-700 group-hover:stroke-blue-500 dark:stroke-neutral-400',
              'size-6 shrink-0',
            )}
          ></TagIcon>
          <span className="xs:block text-preset-5 hidden">Tags</span>
        </div>
      </Link>
      <Link
        href="/settings"
        className={classNames(
          'group flex min-w-0 grow items-center justify-center overflow-hidden',
        )}
      >
        <div
          className={classNames(
            pathname.startsWith('/settings')
              ? 'bg-blue-50 text-blue-500 dark:bg-neutral-700'
              : 'text-neutral-700 hover:text-blue-500 dark:text-neutral-400',

            'xs:w-20 flex grow-0 flex-col items-center space-y-1 rounded-sm px-5.5 py-1 text-center text-xs hover:bg-blue-50 dark:hover:bg-neutral-700',
          )}
        >
          <SettingsIcon
            className={classNames(
              pathname.startsWith('/settings')
                ? 'fill-blue-500'
                : 'fill-neutral-700 group-hover:fill-blue-500 dark:fill-neutral-400',
              'size-6 shrink-0',
            )}
          ></SettingsIcon>
          <span className="xs:block text-preset-5 hidden">Settings</span>
        </div>
      </Link>
    </nav>
  );
}
