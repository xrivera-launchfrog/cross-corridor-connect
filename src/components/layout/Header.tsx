import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/project-overview", label: "Project Overview" },
  { to: "/strategic-advantages", label: "Strategic Advantages" },
  { to: "/economic-environmental-benefits", label: "Benefits" },
  { to: "/partners", label: "Partners" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="TGP Home">
          <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-[var(--gradient-primary)]">TGP</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild size="sm" variant="hero">
            <Link to="/project-brief">Project Brief</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto py-4 grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild size="sm" variant="hero" onClick={() => setOpen(false)}>
              <Link to="/project-brief">Project Brief</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
