export default function TherapyServices() {
  const services = [
    "Stress Management",
    "Relationship Skills",
    "Anxiety Reduction",
    "Depression Relief",
    "Behavioral",
    "Trauma Healing"
  ];

  return (
    <section>
      <h2 className="text-lg font-medium mb-4">I offer therapy for</h2>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <span
            key={service}
            className="px-4 py-1.5 bg-white border border-blue-100 text-[#29B6F6] rounded-full text-sm"
          >
            {service}
          </span>
        ))}
      </div>
    </section>
  );
}