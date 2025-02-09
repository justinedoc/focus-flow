import { Search } from "lucide-react";
import calendarIcon from "../../../assets/icons/calender.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

function Navbar() {
  return (
    <nav className="py-4 px-6 flex items-center justify-between w-full border-b">
      <div className="flex gap-5 items-center">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <section id="search" className="relative bg-gray-100 w-fit rounded-md">
          <input
            type="text"
            placeholder="Search for anything..."
            title="Press Enter to search"
            aria-label="Search for anything"
            className="min-w-[30rem] max-w-xl px-4 py-2 pl-10 rounded-md text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          />
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 dark:text-blue-300/40 text-gray-500"
          />
        </section>
      </div>

      <div className="flex gap-5">
        <section id="actions" className="flex gap-2 items-center">
          <img src={calendarIcon} alt="calendar" />

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z"
              stroke="#787486"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
              stroke="#787486"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06"
              stroke="#787486"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <circle cx="18" cy="4" r="3" fill="#D8727D" />
          </svg>
        </section>

        <section id="profile" className="flex text-sm gap-3">
          <article>
            <h1 className="font-semibold text-black">Anima Kelly</h1>
            <p className="text-gray-500">U.P, india</p>
          </article>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
