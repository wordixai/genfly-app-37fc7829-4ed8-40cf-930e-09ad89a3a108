import { User, CreditCard, Key, Mail } from "lucide-react";

export default function GetStartedSection() {
  const steps = [
    {
      number: 1,
      title: "Signup",
      description: "Create an account to get started. You can set up an org for your team later.",
      icon: User,
      mockData: (
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-12 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
          </div>
          <div className="flex flex-row gap-2 max-w-56">
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11V8l5 4-5 4v-3H8v-2h4Z" fill="#4285F4"></path>
                <path d="M12 5c1 0 2 .2 3 .5 1 .4 1.8.9 2.5 1.5L20 4.7a11.3 11.3 0 0 0-15.2-.1L7 6.9c.8-.6 1.6-1.1 2.5-1.5 1-.3 2-.5 3-.5L12 5Z" fill="#EA4335"></path>
                <path d="M5 12c0-1 .2-2 .5-3C6 8 6.4 7.2 7 6.5L4.7 4a11.3 11.3 0 0 0-.1 15.2L6.9 17a7.6 7.6 0 0 1-1.5-2.5c-.3-1-.5-2-.5-3l.1.5Z" fill="#FBBC05"></path>
                <path d="M12 19c-1 0-2-.2-3-.5-1-.4-1.8-.9-2.5-1.5L4 19.3a11.3 11.3 0 0 0 15.2.1L17 17.1c-.8.6-1.6 1.1-2.5 1.5-1 .3-2 .5-3 .5l.5-.1Z" fill="#34A853"></path>
                <path d="M19 12c0 1 0 2-.4 3s-.9 1.8-1.5 2.5l2.3 2.4a11.3 11.3 0 0 0 .1-15.2L17.2 7c.6.8 1.1 1.6 1.5 2.5.3 1 .5 2 .5 3L19 12Z" fill="#4285F4"></path>
              </svg>
            </div>
            <div className="w-10 h-10 bg-muted rounded-lg"></div>
            <div className="w-10 h-10 bg-muted rounded-lg"></div>
            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Buy credits",
      description: "Credits can be used with any model or provider.",
      icon: CreditCard,
      mockData: (
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-6 flex flex-col justify-center">
                <div className="h-1 bg-primary/20 rounded"></div>
                <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Apr 1</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$99</span>
            </div>
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Mar 30</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$10</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Get your API key",
      description: (
        <>
          Create an API key and start making requests. <a href="/docs/quickstart" className="text-primary hover:underline">Fully OpenAI compatible</a>.
        </>
      ),
      icon: Key,
      mockData: (
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            <div className="h-6 flex-1 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground tracking-wide">OPENROUTER_API_KEY</span>
            </div>
          </div>
          <div className="h-6 bg-primary/5 rounded flex items-center px-2">
            <span className="text-xs tracking-wider">••••••••••••••••</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
                {step.number}
              </div>
              <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
            </div>
            <div className="min-h-10 md:min-h-12">
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
            {step.mockData}
          </div>
        ))}
      </div>
    </div>
  );
}