'use client';

import SearchIcon from '@/components/shared/icons/search';
import SettingsIcon from '@/components/shared/icons/settings';
import Input from '@/components/shared/input';

export default function AllNotesPage({
  children,
}: Readonly<{ children: React.ReactNode; menu: React.ReactNode }>) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-row items-center justify-between px-8 max-md:hidden md:border-b-1 md:border-b-neutral-200 md:py-4.5 dark:md:border-b-neutral-800">
        <h1 className="text-2xl font-bold text-neutral-950 dark:text-white">
          All Notes
        </h1>
        <div className="flex flex-row items-center space-x-4">
          <div className="inline-block w-80">
            <Input
              name="search"
              placeholder="Search by title, content, or tags…"
              type="text"
              prefix={
                <SearchIcon className="size-5 fill-neutral-700 dark:fill-neutral-400" />
              }
            ></Input>
          </div>
          <div>
            <button className="flex size-10.5 cursor-pointer items-center justify-center text-neutral-500">
              <SettingsIcon className="size-5 fill-neutral-700 dark:fill-neutral-400"></SettingsIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
