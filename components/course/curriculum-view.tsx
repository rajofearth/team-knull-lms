import { Play, Settings, Download, FileText, FileArchive, ArrowLeft, ArrowRight, ArrowDownToLine } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface CurriculumViewProps {
  enrolled: boolean;
  isOverview?: boolean;
}

export function CurriculumView({ enrolled, isOverview }: CurriculumViewProps) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
      
      {/* Left Column (1fr) split into Accordion/About and Video Player */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
        
        {/* Sub-Left: Accordion or About */}
        <div>
          {isOverview ? (
            <div>
              <h3 className="mb-4 text-base font-bold text-foreground">About This Course</h3>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                This bootcamp is designed to take you from zero to job-ready web developer. You&apos;ll learn the fundamentals and build real-world projects to strengthen your portfolio.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { title: "Beginner Friendly", desc: "No prior coding experience required. We start from the basics.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { title: "Hands-on Projects", desc: "Build real-world projects and apply what you learn.", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" },
                  { title: "Learn at Your Pace", desc: "Lifetime access so you can learn anytime, anywhere.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full rounded-lg border border-border bg-background shadow-none">
                <AccordionItem value="item-1" className="px-5">
                  <AccordionTrigger className="py-4 text-sm font-bold text-foreground hover:no-underline">
                    <div className="flex flex-1 w-full items-center justify-between pr-2 gap-4">
                      <span className="text-left line-clamp-1">Module 1 - Getting Started</span>
                      <span className="shrink-0 font-normal text-muted-foreground text-xs">5 / 5</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="flex flex-col gap-5 pt-2">
                      {[
                        { title: "1. Introduction to Web Development", time: "04:32", done: true },
                        { title: "2. How the Web Works", time: "06:18", done: true },
                        { title: "3. Setting Up Your Environment", time: "05:45", done: true },
                        { title: "4. HTML Basics", time: "08:23", done: true },
                        { title: "5. HTML Elements and Structure", time: "10:15", done: true, active: true },
                      ].map((lesson, i) => (
                        <div key={i} className="flex cursor-pointer items-center justify-between transition-opacity hover:opacity-100 group">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="flex shrink-0 size-4 items-center justify-center rounded-full border border-success text-success">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <span className={`text-xs truncate transition-colors ${lesson.active ? 'font-bold text-foreground' : 'font-medium text-muted-foreground group-hover:text-foreground'}`}>
                              {lesson.title}
                            </span>
                          </div>
                          <span className="shrink-0 text-xs text-muted-foreground ml-3">{lesson.time}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                {[
                  { mod: "CSS Fundamentals", num: "0 / 6" }, 
                  { mod: "JavaScript Basics", num: "0 / 7" }, 
                  { mod: "Projects", num: "0 / 5" }, 
                  { mod: "Advanced Topics", num: "0 / 5" }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i+2}`} className="px-5">
                    <AccordionTrigger className="py-4 text-sm font-bold text-foreground hover:no-underline">
                      <div className="flex flex-1 w-full items-center justify-between pr-2 gap-4">
                        <span className="text-left">{item.mod}</span>
                        <span className="shrink-0 font-normal text-muted-foreground text-xs">{item.num}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-muted-foreground">
                      Coming soon...
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>

        {/* Sub-Right: Video Player */}
        <div>
          <div className="relative mb-8 flex aspect-video w-full flex-col overflow-hidden rounded-xl bg-foreground shadow-lg border border-border">
            <div className="relative flex-1 w-full h-full bg-[#1e1e1e] p-6 text-sm font-mono overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-10 bg-[#252526] flex items-center px-4 gap-2">
                <div className="flex items-center gap-2 bg-[#1e1e1e] px-3 py-1.5 rounded-t text-xs text-[#9cdcfe]">
                  <span className="text-[#569cd6]">#</span> index.html <span className="text-muted-foreground ml-2">x</span>
                </div>
              </div>
              <div className="mt-6 flex text-xs">
                <div className="text-[#858585] text-right pr-4 select-none flex flex-col gap-1">
                  1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16
                </div>
                <div className="text-[#d4d4d4] flex flex-col gap-1">
                  <div><span className="text-[#808080]">&lt;!DOCTYPE html&gt;</span></div>
                  <div><span className="text-[#569cd6]">&lt;html</span> <span className="text-[#9cdcfe]">lang</span>=<span className="text-[#ce9178]">"en"</span><span className="text-[#569cd6]">&gt;</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;head&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;meta</span> <span className="text-[#9cdcfe]">charset</span>=<span className="text-[#ce9178]">"UTF-8"</span> <span className="text-[#569cd6]">/&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;meta</span> <span className="text-[#9cdcfe]">name</span>=<span className="text-[#ce9178]">"viewport"</span> <span className="text-[#9cdcfe]">content</span>=<span className="text-[#ce9178]">"width=device-width, initial-scale=1.0"</span> <span className="text-[#569cd6]">/&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;title&gt;</span>My Website<span className="text-[#569cd6]">&lt;/title&gt;</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;/head&gt;</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;body&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;header&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;h1&gt;</span>Welcome to Web Development<span className="text-[#569cd6]">&lt;/h1&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;/header&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;main&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;p&gt;</span>Building awesome websites, one line of code at a time.<span className="text-[#569cd6]">&lt;/p&gt;</span></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;/main&gt;</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#569cd6]">&lt;/body&gt;</span></div>
                  <div><span className="text-[#569cd6]">&lt;/html&gt;</span></div>
                </div>
              </div>
            </div>

            {/* Video Controls Footer */}
            <div className="relative z-20 flex items-center justify-between px-5 py-4 text-background border-t border-background/20">
              {/* Playback progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-background/20 -translate-y-full cursor-pointer hover:h-1.5 transition-all">
                <div className="h-full w-[50%] bg-background" />
              </div>

              <div className="flex items-center gap-5">
                <Play className="size-5 fill-background cursor-pointer hover:opacity-80 transition-opacity" />
                <span className="text-xs font-medium">05:12 / 10:15</span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 border border-background/30 rounded px-2 py-0.5 cursor-pointer hover:bg-background/20 transition-colors">
                  <span className="text-[10px] font-bold">CC</span>
                </div>
                <span className="text-xs font-bold cursor-pointer hover:opacity-80">1x</span>
                <Settings className="size-5 cursor-pointer text-background/80 hover:text-background transition-colors" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="cursor-pointer text-background/80 hover:text-background transition-colors"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
              </div>
            </div>
          </div>

          {!isOverview && (
            <div>
              <h2 className="mb-2 text-xl font-bold text-foreground">5. HTML Elements and Structure</h2>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">Learn about common HTML elements and how to structure a basic webpage.</p>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" className="h-11 rounded-md px-5 text-sm font-semibold border-border bg-background">
                  <ArrowLeft className="mr-2 size-4" />
                  Previous Lesson
                </Button>
                <Button className="h-11 rounded-md bg-foreground px-5 text-sm font-semibold text-background hover:bg-foreground/90">
                  Next Lesson
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column (320px) */}
      <div>
        {isOverview ? (
          <div className="sticky top-24">
            <h3 className="mb-6 text-base font-bold text-foreground">You&apos;ll Learn</h3>
            <div className="flex flex-col gap-5">
              {[
                "HTML5 & CSS3 Fundamentals",
                "JavaScript Basics to Advanced",
                "Responsive Web Design",
                "Build and Deploy Projects",
                "Modern Development Tools"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-transparent text-foreground">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="sticky top-24 rounded-xl border border-border bg-background p-6 shadow-subtle">
            <h3 className="mb-6 text-base font-bold text-foreground">Lesson Resources</h3>
            <div className="flex flex-col gap-6">
              {[
                { icon: FileText, name: "Cheatsheet", format: "PDF" },
                { icon: FileArchive, name: "Starter Files", format: "ZIP" },
                { icon: FileText, name: "Notes", format: "PDF" },
              ].map((res, i) => (
                <div key={i} className="group flex cursor-pointer items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                      <res.icon className="size-4 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{res.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{res.format}</p>
                    </div>
                  </div>
                  <ArrowDownToLine className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={2} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
