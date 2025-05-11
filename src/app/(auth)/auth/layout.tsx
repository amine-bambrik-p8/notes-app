import { ReactNode } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-100 p-4 dark:bg-neutral-700">
      <div className="w-full max-w-130.5 md:max-w-135">{children}</div>
    </div>
  );
}
