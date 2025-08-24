import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedModels from "@/components/FeaturedModels";
import StatsSection from "@/components/StatsSection";
import GetStartedSection from "@/components/GetStartedSection";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import { Boxes, BarChart3, ArrowRight } from "lucide-react";

export default function Index() {
  const announcements = [
    {
      title: "Tool Calling Accuracy",
      description: "After just one week on the platform, GPT-5 has taken the #1 spot for tool calling accuracy on OpenRouter. Here's how the leaderboard looks and what this means for developers.",
      date: "8/13/2025",
      href: "/announcements/tool-calling-accuracy",
      isNew: true
    },
    {
      title: "GPT-5 is now live",
      description: "GPT-5 is here on OpenRouter — long-context, built for complex reasoning and code workflows.",
      date: "8/6/2025",
      href: "/announcements/gpt-5-is-now-live"
    },
    {
      title: "Audio Inputs and PDF URLs for Apps",
      description: "Add voice input and send PDFs by URL, on any model.",
      date: "8/3/2025",
      href: "/announcements/audio-inputs-and-pdf-urls-for-apps"
    }
  ];

  return (
    <main className="tabular-nums">
      <Navigation />
      
      <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
          {/* Hero Section */}
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
            <HeroSection />
            <FeaturedModels />
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-8 md:gap-12">
            <StatsSection />
          </div>

          {/* Get Started Section */}
          <GetStartedSection />

          {/* Feature Cards */}
          <FeatureCards />

          {/* Bottom Section with Links and Announcements */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-8 gap-16 md:gap-8">
            <div className="flex flex-col gap-4 h-full w-full md:col-span-3">
              <a className="flex-1" href="/models">
                <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
                  <div className="flex flex-col gap-2 h-full">
                    <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold">
                      <Boxes className="inline size-6 mr-2 mb-1" />
                      <span>Explore Models</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Discover AI models across our collection, from all major labs and providers.
                    </p>
                  </div>
                  <span className="text-muted-foreground inline-flex items-center">
                    View models
                    <ArrowRight className="ml-1 inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
              
              <a className="flex-1" href="/rankings">
                <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg p-4 flex flex-col gap-4 group h-full">
                  <div className="flex flex-col gap-2 h-full">
                    <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-lg font-semibold">
                      <BarChart3 className="inline size-6 mr-2 mb-1" />
                      <span>Model & App Rankings</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Explore token usage across models, labs, and public applications.
                    </p>
                  </div>
                  <span className="text-muted-foreground inline-flex items-center">
                    View rankings
                    <ArrowRight className="ml-1 inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </div>

            <div className="md:col-span-5 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Recent Announcements</h3>
                  <a className="text-slate-10 group inline-flex text-sm" href="/announcements">
                    <span className="inline-flex items-center gap-1">
                      <span>View all</span>
                      <ArrowRight className="inline-flex size-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </div>
                
                <div className="flex flex-col gap-6">
                  {announcements.map((announcement) => (
                    <a key={announcement.title} className="group" href={announcement.href}>
                      <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col gap-2 p-4">
                        <h3 className="group-hover/card:text-slate-12 duration-200 text-lg font-medium transition-colors">
                          {announcement.title}
                        </h3>
                        <p className="text-slate-10 text-sm line-clamp-2">
                          {announcement.description}
                        </p>
                        <div className="flex items-center text-muted-foreground text-xs">
                          <time>{announcement.date}</time>
                          {announcement.isNew && (
                            <span className="bg-muted text-muted-foreground ml-2 rounded-sm px-1.5 py-0.5 text-[10px]">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}