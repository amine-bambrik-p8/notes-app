'use client';
import Input from '@/components/shared/input';
import Logo from '@/components/shared/logo';
import ShowPasswordIcon from '@/components/shared/icons/show-password';

export default function ResetPasswordPage() {
  return (
    <div className="xs:py-12 rounded-xl border-1 border-neutral-200 bg-white px-4 py-10 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="m-auto flex w-full max-w-114.5 flex-col space-y-4 md:max-w-111">
        <div className="self-center">
          <Logo />
        </div>
        <div className="self-center text-center">
          <h1 className="text-preset-1 mb-2 text-neutral-950 dark:text-white">
            Reset Your Password
          </h1>
          <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            Choose a new password to secure your account.
          </p>
        </div>
        <form className="space-y-4 pt-6">
          <Input
            type="password"
            name="new-password"
            label="New Password"
            suffix={
              <button
                type="button"
                className="cursor-pointer bg-transparent text-neutral-500 focus:outline-2 focus:outline-neutral-600 disabled:text-neutral-300 dark:disabled:text-neutral-700"
              >
                <ShowPasswordIcon
                  aria-hidden="true"
                  className="size-5 fill-neutral-700 dark:fill-neutral-400"
                />
              </button>
            }
            validation={{
              validationFn: (value) => value.length >= 8,
              hint: 'At least 8 characters',
            }}
          />
          <Input
            type="password"
            name="confirm-password"
            label="Confirm New Password"
            suffix={
              <button
                type="button"
                className="cursor-pointer bg-transparent text-neutral-500 focus:outline-2 focus:outline-neutral-600 disabled:text-neutral-300 dark:disabled:text-neutral-700"
              >
                <ShowPasswordIcon
                  aria-hidden="true"
                  className="size-5 fill-neutral-700 dark:fill-neutral-400"
                />
              </button>
            }
          />
          <button
            className="text-preset-3 btn btn--primary justify-center"
            type="button"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
