export default function Footer() {
  const footerLinks = [
    { label: "Status", href: "https://status.openrouter.ai/" },
    { label: "Announcements", href: "/announcements" },
    { label: "Docs", href: "/docs" },
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Careers", href: "/careers" },
    { label: "Pricing", href: "/models?fmt=table" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ];

  return (
    <footer>
      <div className="flex flex-col flex-wrap items-center justify-between gap-4 p-4 border-t bg-background font-medium md:flex-row-reverse">
        <menu className="flex flex-1 flex-wrap text-center md:justify-end">
          {footerLinks.map((link) => (
            <li key={link.label} className="basis-1/2 shrink md:basis-auto">
              <a className="text-muted-foreground" href={link.href}>
                <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md px-3 w-auto justify-center text-muted-foreground">
                  {link.label}
                </button>
              </a>
            </li>
          ))}
          <li className="basis-1/2 shrink md:basis-auto" aria-hidden="true">&nbsp;</li>
        </menu>
        
        <div className="flex flex-col items-center gap-4 m-auto md:flex-row md:gap-8 lg:m-0">
          <div className="text-center text-muted-foreground">© 2023 – 2025 OpenRouter, Inc</div>
          <div className="md:mr-auto">
            <div className="flex items-center justify-center gap-2">
              <a target="_blank" className="text-muted-foreground" href="https://discord.gg/fVyRaUDgxW" rel="noreferrer">
                <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 border border-transparent rounded-md justify-center text-muted-foreground aspect-square size-6 p-0 hover:bg-transparent hover:text-foreground dark:hover:text-white">
                  <span className="sr-only">Discord</span>
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </button>
              </a>
              
              <a target="_blank" className="text-muted-foreground" href="https://github.com/OpenRouterTeam" rel="noreferrer">
                <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 border border-transparent rounded-md justify-center text-muted-foreground aspect-square size-6 p-0 hover:bg-transparent hover:text-foreground dark:hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </a>
              
              <a target="_blank" className="text-muted-foreground" href="https://www.linkedin.com/company/104068329" rel="noreferrer">
                <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 border border-transparent rounded-md justify-center text-muted-foreground aspect-square size-6 p-0 hover:bg-transparent hover:text-foreground dark:hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="size-4">
                    <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z" fill="currentColor" />
                  </svg>
                </button>
              </a>
              
              <a target="_blank" className="text-muted-foreground" href="https://twitter.com/openrouterai" rel="noreferrer">
                <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 border border-transparent rounded-md justify-center text-muted-foreground aspect-square size-6 p-0 hover:bg-transparent hover:text-foreground dark:hover:text-white">
                  <span className="sr-only">X (Twitter)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-4">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="currentColor" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}