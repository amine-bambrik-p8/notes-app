'use client';
import Input from '@/components/shared/input';
import Logo from '@/components/shared/logo';

export default function ForgotPasswordPage() {
  return (
    <div className="xs:py-12 w-full rounded-xl border-1 border-neutral-200 bg-white px-4 py-10 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="m-auto flex w-full max-w-114.5 flex-col space-y-4 md:max-w-111">
        <div className="self-center">
          <Logo />
        </div>

        <div className="space-y-2 self-center text-center">
          <h1 className="text-preset-1 mb-2 text-neutral-950 dark:text-white">
            Forgotten your password?
          </h1>
          <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            Enter your email below, and we'll send you a link to reset it.
          </p>
        </div>

        <form className="space-y-4 pt-6">
          <Input
            name="emailAddress"
            type="email"
            label="Email Address"
            placeholder="email@example.com"
          />
          <button
            className="btn btn--primary text-preset-3 justify-center"
            type="button"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
