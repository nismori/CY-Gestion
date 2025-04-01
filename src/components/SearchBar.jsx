import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Quelles sont les horaires de bus ?",
    "Quelle musée est ouvert aujourd'hui ?",
    "Quand est le prochain concert ?"
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>
  );
}
