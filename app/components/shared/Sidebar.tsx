"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../../constants/index";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="sidebar h-full"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <div className="h-10" />
        </Link>

        <nav className="sidebar-nav h-fit">
          <ul className="sidebar-nav_elements">
            {routes?.map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`group p-[-10] rounded-xl w-full  ${
                    isActive
                      ? "bg-black text-white font-bold hover:bg-black"
                      : "text-gray-700 hover:bg-slate-400"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <span>{link.icon}</span>

                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
