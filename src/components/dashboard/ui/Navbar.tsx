import { ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 py-4 px-6 flex items-center justify-between w-full border-b bg-white">
      <div className="flex gap-5 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <section id="search" className="relative bg-gray-100 w-fit rounded-md">
          <input
            type="text"
            placeholder="Search for anything..."
            title="Press Enter to search"
            aria-label="Search for anything"
            className="min-w-[30rem] max-w-xl px-4 py-2 pl-10 rounded-md text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400/20"
          />
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 dark:text-blue-300/40 text-gray-500"
          />
        </section>
      </div>

      <div className="flex gap-5">
        <section
          id="profile"
          className="flex text-sm gap-2 items-center cursor-pointer"
        >
          <article>
            <h1 className="font-semibold text-black">Anima Kelly</h1>
            <p className="text-gray-500">U.P, india</p>
          </article>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <ChevronDown size={15} />
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
