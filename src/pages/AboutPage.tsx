import React from 'react';
import { LegalLayout } from './LegalLayout';

const team = [
  {
    name: 'Stephan Brunner',
    role: 'CEO, Co-Founder',
    image: '/team/stephan.png',
    phone: '+41 76 569 99 22',
    email: 'stephan@winfluence.net',
  },
  {
    name: 'Benno Burkhardt',
    role: 'CIO, Co-Founder',
    image: '/team/benno.png',
    phone: '+41 79 277 01 22',
    email: 'benno@winfluence.net',
  },
  {
    name: 'Cornelius Beck',
    role: 'CBO, Co-Founder',
    image: '/team/cornelius.png',
    phone: '+41 79 462 97 64',
    email: 'cornelius@winfluence.net',
  },
  {
    name: 'David Hablützel',
    role: 'CCO, Co-Founder',
    image: '/team/david.png',
    phone: '+41 79 101 51 42',
    email: 'david@winfluence.net',
  },
];

export const AboutPage: React.FC = () => (
  <LegalLayout title="Team">
    <div>
      {team.map((member) => (
        <article
          key={member.name}
          className="grid grid-cols-[88px_1fr] items-center gap-5 border-b border-zinc-200 py-5 first:pt-0 last:border-0 sm:grid-cols-[120px_1fr] sm:gap-7"
        >
          <img
            src={member.image}
            alt={member.name}
            className="aspect-square w-full object-cover"
          />
          <div>
            <strong className="block font-medium text-zinc-900">{member.name}</strong>
            <span className="block">{member.role}</span>
            <a
              className="block hover:text-zinc-900 hover:underline"
              href={`tel:${member.phone.replace(/\s/g, '')}`}
            >
              {member.phone}
            </a>
            <a
              className="block break-all hover:text-zinc-900 hover:underline"
              href={`mailto:${member.email}`}
            >
              {member.email}
            </a>
          </div>
        </article>
      ))}
    </div>
  </LegalLayout>
);
