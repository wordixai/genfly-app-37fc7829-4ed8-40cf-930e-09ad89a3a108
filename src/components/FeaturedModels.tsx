import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModelCard from "./ModelCard";

export default function FeaturedModels() {
  const models = [
    {
      name: "Gemini 2.5 Pro",
      provider: "google",
      providerUrl: "/google",
      modelUrl: "/google/gemini-2.5-pro", 
      tokens: "136.1B",
      latency: "2.6s",
      growth: "-18.54%",
      iconSrc: "https://openrouter.ai/images/icons/GoogleGemini.svg",
      providerName: "google"
    },
    {
      name: "GPT-5",
      provider: "openai", 
      providerUrl: "/openai",
      modelUrl: "/openai/gpt-5",
      tokens: "48.4B",
      latency: "6.3s", 
      growth: "-16.37%",
      iconSrc: "https://openrouter.ai/images/icons/OpenAI.svg",
      featured: true,
      providerName: "openai"
    },
    {
      name: "Claude Sonnet 4",
      provider: "anthropic",
      providerUrl: "/anthropic", 
      modelUrl: "/anthropic/claude-sonnet-4",
      tokens: "520.9B",
      latency: "1.8s",
      growth: "-10.96%", 
      iconSrc: "https://openrouter.ai/images/icons/Anthropic.svg",
      providerName: "anthropic"
    }
  ];

  const mobileProviders = [
    {
      name: "google",
      iconSrc: "https://openrouter.ai/images/icons/GoogleGemini.svg"
    },
    {
      name: "openai", 
      iconSrc: "https://openrouter.ai/images/icons/OpenAI.svg"
    },
    {
      name: "anthropic",
      iconSrc: "https://openrouter.ai/images/icons/Anthropic.svg"
    }
  ];

  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile routing visualization */}
      <div className="block md:hidden">
        <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6" />
            <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary" />
            <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6" />
          </g>
          <g className="text-slate-7">
            <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
            <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
            <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
          </g>
        </svg>
        
        <div className="grid grid-cols-3 gap-4 pb-3">
          {mobileProviders.map((provider) => (
            <Button
              key={provider.name}
              variant="ghost"
              className="h-11 flex items-center justify-center rounded-lg p-4"
            >
              <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className={`overflow-hidden rounded-full ${provider.name === 'openai' ? 'dark:invert' : ''}`}>
                  <img 
                    width="256" 
                    height="256" 
                    alt={`Favicon for ${provider.name}`} 
                    className="h-full w-full object-cover" 
                    src={provider.iconSrc} 
                  />
                </div>
              </div>
            </Button>
          ))}
        </div>
        
        <ModelCard {...models[1]} />
        
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline flex items-center gap-1" href="/rankings?view=trending">
            View Trending
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button 
            variant="link"
            className="h-6 px-1.5 text-primary gap-0 text-xs hover:underline"
          >
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        
        <div className="space-y-3">
          {models.map((model) => (
            <ModelCard key={model.name} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
}