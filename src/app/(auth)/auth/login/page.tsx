'use client';
import { EyeIcon } from '@heroicons/react/24/outline';
import GoogleIcon from '@/components/shared/icons/google';
import Input from '@/components/shared/input';
import Logo from '@/components/shared/logo';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="xs:py-12 w-full rounded-xl border-1 border-neutral-200 bg-white px-4 py-10 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="m-auto flex w-full max-w-114.5 flex-col space-y-4 md:max-w-111">
        <div className="self-center">
          <Logo />
        </div>

        <div className="self-center text-center">
          <h1 className="text-preset-1 mb-2 text-neutral-950 dark:text-white">
            Welcome to Note
          </h1>
          <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            Please log in to continue
          </p>
        </div>

        <form className="flex flex-col space-y-4 pt-6">
          <Input
            name="emailAddress"
            type="email"
            label="Email Address"
            placeholder="email@example.com"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            link={
              <Link
                href="/auth/forgot-password"
                className="text-xs leading-[1.4] tracking-normal text-neutral-600 underline dark:text-neutral-400"
              >
                Forgot
              </Link>
            }
            suffix={
              <button
                type="button"
                className="cursor-pointer bg-transparent text-neutral-500 focus:outline-2 focus:outline-neutral-600 disabled:text-neutral-300 dark:disabled:text-neutral-700"
              >
                <EyeIcon aria-hidden="true" className="size-5" />
              </button>
            }
          />

          <button
            className="btn btn--primary text-preset-3 justify-center"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col items-center space-y-4 border-t-1 border-b-1 border-neutral-200 pt-6 pb-4 dark:border-neutral-800">
          <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            Or log in with:
          </p>
          <button
            className="btn btn--border text-preset-3 justify-center"
            type="button"
          >
            <div className="-ms-4 me-4">
              <GoogleIcon aria-hidden="true" className={'dark:fill-white'} />
            </div>
            Google
          </button>
        </div>

        <div className="text-preset-5 flex flex-col items-center">
          <p>
            <span className="text-neutral-600 dark:text-neutral-300">
              No account yet?
            </span>{' '}
            <Link
              href="/auth/sign-up"
              className="text-neutral-950 dark:text-white"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
