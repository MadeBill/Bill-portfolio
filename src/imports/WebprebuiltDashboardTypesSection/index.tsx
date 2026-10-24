const assetPathPrefix = "/assets/webprebuilt";

const dashboardTypes = [
  { label: "E commerce", image: `${assetPathPrefix}/f841c.png` },
  { label: "Listing dashboard", image: `${assetPathPrefix}/953d9.png` },
  { label: "Booking dashboard", image: `${assetPathPrefix}/e6cdf.png` },
];

function DashboardDescription({
  children,
  title,
  isMainTitle,
}: {
  children: React.ReactNode;
  title: string;
  isMainTitle?: boolean;
}) {
  return (
    <div>
      {isMainTitle ? (
        <h2
          className="font-['Instrument_Sans:Bold'] text-[20px] sm:text-[22px] font-bold leading-[1.4] text-white mb-[10px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {title}
        </h2>
      ) : (
        <h3
          className="font-['Instrument_Sans:Bold'] text-[18px] font-bold leading-[1.4] text-[#fcce00] mt-[32px] mb-[10px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {title}
        </h3>
      )}
      <div
        className="space-y-2 font-['Instrument_Sans:Medium'] text-[15px] font-medium leading-[1.6] text-[#ffffff99]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {children}
      </div>
    </div>
  );
}

export default function WebprebuiltDashboardTypesSection() {
  return (
    <section
      id="webprebuilt-dashboard-types"
      className="scroll-mt-24 bg-black px-5 text-white sm:px-8 lg:px-[120px]"
      data-node-id="257:42"
    >
      <div className="mx-auto max-w-[1275px]">
        <div data-node-id="257:44">
          <DashboardDescription title="Decision 3 — Three Dashboard Types for Nine Niches" isMainTitle>
            <p>
              Eight niches sounds like eight dashboards. It is not. After mapping what each niche
              actually needs to manage day-to-day, three clear patterns emerged — and every niche
              fits cleanly into one of them.
            </p>
          </DashboardDescription>

          <DashboardDescription title="E-commerce — for businesses selling products.">
            <p>Retail, Food &amp; Hospitality, Transport &amp; Automotive.</p>
            <p>
              The core operational need is managing products, processing orders, and tracking
              revenue.
            </p>
          </DashboardDescription>

          <DashboardDescription title="Listing — for businesses displaying inventory or availability.">
            <p>Construction &amp; Real Estate, Education.</p>
            <p>
              The core need is keeping listings current and managing enquiries or reservations
              against them.
            </p>
          </DashboardDescription>

          <DashboardDescription title="Booking — for businesses that run on appointments and reservations.">
            <p>Service Business, Health &amp; Wellness, Events &amp; Creative.</p>
            <p>
              The core need is managing a calendar of bookings, processing payments, and handling
              discounts.
            </p>
          </DashboardDescription>

          <DashboardDescription title="Why this matters">
            <p>
              I grouped eight business niches into three dashboard types because a salon and a restaurant have different operational needs. This keeps each dashboard focused on relevant tools without cluttering the interface with unnecessary features.
            </p>
          </DashboardDescription>
        </div>

        <div
          className="mt-20 overflow-hidden bg-[#37fc00] px-5 pt-[14px] text-black lg:h-[323px] lg:px-[52px]"
          data-node-id="257:51"
        >
          <div className="grid gap-8 md:grid-cols-3 lg:gap-[64px] xl:gap-[110px]">
            {dashboardTypes.map(({ image, label }) => (
              <article
                className="flex min-w-0 items-start justify-between gap-3 md:h-[442px]"
                key={label}
              >
                <h3
                  className="mt-[117px] font-['Instrument_Sans:Bold'] text-[20px] font-bold leading-[32px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {label}
                </h3>
                <img
                  alt={`${label} sidebar`}
                  className="h-[442px] w-[113px] shrink-0 object-cover object-top"
                  src={image}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
