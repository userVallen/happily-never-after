'use client';

import { motion } from 'motion/react';

const text = [
  [
    {
      text: "Growing up in a mixed culture, I've often felt like I never truly belonged anywhere. I was always caught between different identities—never feeling Indonesian enough, Chinese enough, or, after living in Korea for several years, Korean enough. That feeling inspired me to explore how difficult it can be to hold on to your identity while also trying to adjust, belong, and be accepted.",
    },
  ],
  [
    {
      text: 'Through ',
    },
    {
      text: 'Happily Never After',
      fontStyle: 'font-bold',
    },
    {
      text: ", I wanted to tell a love story where love itself doesn't disappear, but the people within it slowly change. Sometimes, it's not the absence of love that pulls two people apart, but the circumstances that quietly shape them into versions of themselves they never expected to become. I hope this film resonates with anyone who has ever questioned where they belong or struggled to recognize the person they've become.",
    },
  ],
  [
    {
      text: 'This story has been in the making for over a year, and my team and I have poured our hearts into bringing it to life. Every contribution, no matter the size, helps us create the best film we can. Your support will go toward production costs, meals, and coffee to keep our hardworking cast and crew going through long days on set.',
    },
  ],
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordVariant = {
  hidden: {
    opacity: 0,
    filter: 'blur(2px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.3 },
  },
};

export default function Logline() {
  return (
    <motion.div className="space-y-8">
      {text.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-fluid-md text-center max-w-xl px-8"
        >
          {paragraph.map((segment, i) =>
            segment.text.split(' ').map((word, j) => (
              <motion.span
                key={`${i}-${j}`}
                variants={wordVariant}
                className={`inline-block mr-1 ${segment.fontStyle}`}
              >
                {word}
              </motion.span>
            ))
          )}
        </motion.p>
      ))}
    </motion.div>
  );
}
