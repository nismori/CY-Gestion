import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

export function LoginFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-none shadow-input md:rounded-2xl relative translate-y-2/3 top-50% md:p-8 dark:bg-black">
      <h2 className="flex justify-center mx-auto text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Log in
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Addresse e-mail</Label>
          <Input id="email" placeholder="adresse@mail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Mot de passe</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword"></Label>
          <p className="max-w-sm mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Ou bien vous n'avez pas encore de
             <span className="text-black hover:opacity-[0.9] dark:text-neutral-400 underline mx-1.5">
                <Link to={"/inscription"}>compte</Link>
            </span>?
          </p>
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Log in &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover/btn:opacity-100" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 inset-x-10 -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
