import React from 'react';

const team = [
  { name: 'Stephan Brunner', role: 'Influencer-Marketing', image: '/team/SB.png', phone: '+41 76 569 99 22', email: 'stephan@winflunece.net' },
  { name: 'Sergei Malovanyi', role: 'SW-Development', image: '/team/SM.png' },
  { name: 'Benno Burkhardt', role: 'SW-Mangement', image: '/team/BB.png' },
  { name: 'Cornelius Beck', role: 'Brand-Marketing', image: '/team/CB.png', phone: '+41 79 462 97 64', email: 'cornelius@winflunece.net' },
  { name: 'Selena Wang', role: 'Community Management', image: '/team/SW.png' },
];

// Inhalt und Kontaktdaten entsprechen https://winfluence.net/about.html.
export const AboutPage: React.FC = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="mb-10 text-[#f15e5e] font-bold text-4xl md:text-5xl">Team</h1>
      <div>
        {team.map((member) => (
          <article key={member.name} className="grid grid-cols-[100px_1fr] gap-6 items-center py-5 border-b border-[#231f20]">
            <img src={member.image} alt={member.name} className="w-full max-w-[100px]" />
            <div className="text-[#231f20] leading-normal">
              <strong className="block text-2xl">{member.name}</strong>
              <span className="block text-lg">{member.role}</span>
              {member.phone && <a className="block text-lg hover:underline" href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a>}
              {member.email && <a className="block text-lg hover:underline" href={`mailto:${member.email}`}>{member.email}</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
