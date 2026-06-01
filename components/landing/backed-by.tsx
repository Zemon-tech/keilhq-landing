export function BackedBy() {
  return (
    <section className="w-full py-12 bg-background border-y border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">

          <div className="shrink-0">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Integrates with:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-10 gap-y-5 w-full">

            {/* Slack */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v6.313A2.528 2.528 0 0 1 8.823 24a2.528 2.528 0 0 1-2.52-2.522v-6.313zm2.52-10.123a2.528 2.528 0 0 1-2.52-2.522A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.522 2.52v2.52H8.823zm0 1.261a2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.522H2.522A2.528 2.528 0 0 1 0 8.823a2.528 2.528 0 0 1 2.522-2.52h6.301zm10.122 2.52a2.528 2.528 0 0 1 2.522-2.52A2.528 2.528 0 0 1 24 8.823a2.528 2.528 0 0 1-2.522 2.522h-2.52V8.823zm-1.261 0a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.52 2.522v6.301zm-2.52 10.122a2.528 2.528 0 0 1 2.52 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522zm0-1.261a2.528 2.528 0 0 1-2.522-2.52 2.528 2.528 0 0 1 2.522-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.52h-6.313z"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Slack</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
            </div>

            {/* Google Calendar */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Google Calendar</span>
            </div>

            {/* Notion */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Notion</span>
            </div>

            {/* Linear */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                <path d="M3.493 11.66a.5.5 0 0 0 .707.707l6.5-6.5a.5.5 0 0 0-.707-.707l-6.5 6.5zm.5 4.5a.5.5 0 0 0 .707.707l9.5-9.5a.5.5 0 0 0-.707-.707l-9.5 9.5zm4 4a.5.5 0 0 0 .707.707l9.5-9.5a.5.5 0 0 0-.707-.707l-9.5 9.5zm4.5 1.5a.5.5 0 0 0 .707.707l5.5-5.5a.5.5 0 0 0-.707-.707l-5.5 5.5zm4.5.5a.5.5 0 0 0 .707.707l1.5-1.5a.5.5 0 0 0-.707-.707l-1.5 1.5z"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Linear</span>
            </div>

            {/* Jira */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.723-5.756H5.757a5.215 5.215 0 0 0 5.214 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.005 1.005 0 0 0-1.021-1.005zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24.019 12.49V1.005A1.005 1.005 0 0 0 23.013 0z"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Jira</span>
            </div>

            {/* Google Gemini / AI */}
            <div className="flex items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor">
                <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/>
              </svg>
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Google Gemini</span>
            </div>

            {/* +50 more */}
            <div className="flex items-center gap-1.5 cursor-default">
              <span className="text-sm font-semibold text-muted-foreground/60">+50 more</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
