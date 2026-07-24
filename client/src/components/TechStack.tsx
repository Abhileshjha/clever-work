const BlueAsterisk = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="4" fill="hsl(210, 80%, 55%)" />
    <line x1="10" y1="0" x2="10" y2="20" stroke="hsl(210, 80%, 55%)" strokeWidth="2" />
    <line x1="0" y1="10" x2="20" y2="10" stroke="hsl(210, 80%, 55%)" strokeWidth="2" />
    <line x1="3" y1="3" x2="17" y2="17" stroke="hsl(210, 80%, 55%)" strokeWidth="1.5" />
    <line x1="17" y1="3" x2="3" y2="17" stroke="hsl(210, 80%, 55%)" strokeWidth="1.5" />
  </svg>
);

const techs = ["SEO", "Google Ads", "Social Media", "Meta Ads", "Lead Generation", "Web Design", "Branding", "Content"];

export function TechStack() {
  const items = [...techs, ...techs, ...techs, ...techs];

  return (
    <section className="py-5 border-y border-border overflow-hidden" data-testid="section-techstack">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <div key={i} className="services-category-item">
            <BlueAsterisk />
            <h5>{tech}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
