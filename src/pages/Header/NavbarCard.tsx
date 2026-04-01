import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function NavbarCard({
  title,
  path,
  className,
}: {
  title: string;
  path: string;
  className: string;
}) {
  return (
    <Link
      to={path}
      className={twMerge(
        "relative inline-flex items-center px-3 py-1.5",
        "text-sm font-medium text-zinc-400",
        "rounded-md transition-all duration-300 ease-out",
        "hover:text-amber-300 hover:bg-white/5",
        "focus:text-amber-300 focus:bg-white/5 focus:outline-none",
        "active:scale-x-[0.98]",
        className,
      )}
    >
      {title}
    </Link>
  );
}
export default NavbarCard;
