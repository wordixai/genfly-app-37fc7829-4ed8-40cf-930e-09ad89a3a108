import { Search, Slash } from "lucide-react";
import { Button } from "@/components/ui/button";
import OpenRouterLogo from "./OpenRouterLogo";

export default function Navigation() {
  return (
    <nav 
      id="main-nav" 
      className="sticky top-0 z-40 transition-all duration-150 bg-background mx-auto px-6 py-3.5 lg:py-6 max-w-screen-4xl"
    >
      <div className="align-center relative flex flex-row justify-between text-sm md:text-base">
        <div className="flex flex-1 items-center gap-4">
          <a className="text-muted-foreground" href="/">
            <Button variant="ghost" className="gap-2 leading-6 h-9 px-3 w-auto justify-center text-accent-foreground">
              <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out">
                <OpenRouterLogo className="size-4" />
                OpenRouter
              </span>
            </Button>
          </a>
          
          <div className="flex items-center gap-2 rounded-md h-9 w-0 ring-ring md:w-64 transition-colors relative bg-slate-3 text-slate-11 focus-within:bg-slate-4 focus-within:text-slate-12">
            <div className="flex items-center border-b px-3 w-full focus-visible:outline-none">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input 
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="Search" 
                type="text" 
              />
            </div>
            <kbd className="flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-border text-xs text-muted-foreground absolute right-3.5 transition-opacity duration-200">
              <Slash className="h-3 w-3" />
            </kbd>
          </div>
        </div>
        
        <div className="hidden lg:flex lg:gap-1 text-sm">
          <a className="text-muted-foreground" href="/models">
            <Button variant="ghost" className="gap-2 leading-6 h-9 px-3 w-auto justify-center text-muted-foreground">
              Models
            </Button>
          </a>
          <a className="text-muted-foreground" href="/chat">
            <Button variant="ghost" className="gap-2 leading-6 h-9 px-3 w-auto justify-center text-muted-foreground">
              Chat
            </Button>
          </a>
          <a className="text-muted-foreground" href="/rankings">
            <Button variant="ghost" className="gap-2 leading-6 h-9 px-3 w-auto justify-center text-muted-foreground">
              Rankings
            </Button>
          </a>
          <a className="text-muted-foreground" href="/enterprise">
            <Button variant="ghost" className="gap-2 leading-6 h-9 px-3 w-auto justify-center text-muted-foreground">
              Enterprise
            </Button>
          </a>
          <a href="/docs/quick-start" className="text-muted-foreground">
            <Button variant="ghost" className="gap-2 leading-6 h-9 px-3 w-auto justify-center text-muted-foreground">
              Docs
            </Button>
          </a>
          <div className="flex w-24 justify-end">
            <Button 
              variant="outline" 
              className="gap-2 leading-6 px-3 h-full w-full rounded-full"
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}