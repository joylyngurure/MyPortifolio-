import { profile } from "@/content/portfolio";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep py-8 text-sm text-white/70">
      <div className="wrap flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CurrentYear /> {profile.name}. All rights reserved.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
