import { ExternalLink } from "lucide-react";

interface ModelCardProps {
  name: string;
  provider: string;
  providerUrl: string;
  modelUrl: string;
  tokens: string;
  latency: string;
  growth: string;
  iconSrc: string;
  featured?: boolean;
  providerName: string;
}

export default function ModelCard({ 
  name, 
  provider, 
  providerUrl, 
  modelUrl, 
  tokens, 
  latency, 
  growth, 
  iconSrc, 
  featured = false,
  providerName 
}: ModelCardProps) {
  const isNegativeGrowth = growth.startsWith('-');
  
  return (
    <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${featured ? 'md:border-primary' : 'border-slate-6'}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href={modelUrl}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className={`overflow-hidden rounded-full ${providerName === 'openai' ? 'dark:invert' : ''}`}>
                  <img 
                    width="256" 
                    height="256" 
                    alt={`Favicon for ${providerName}`} 
                    className="h-full w-full object-cover" 
                    src={iconSrc} 
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by <a className="text-primary hover:underline" href={providerUrl}>{provider}</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${isNegativeGrowth ? 'text-red-10' : 'text-green-10'}`}>
              {growth}
            </p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}