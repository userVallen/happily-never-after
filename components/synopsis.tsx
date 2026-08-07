'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const firstParagraph =
  "After spending seven years building a life together in South Korea, Chinese-Indonesian couple Jane and Noah begin to realize they're no longer moving in the same direction. As Jane struggles to find her voice in a language that never quite feels like her own, Noah becomes increasingly rooted in the life he's built abroad.";
const secondParagraph =
  "When an invitation to a close friend's wedding back home begins to stir questions about identity, belonging, and the future they once dreamed of, they are forced to confront the quiet sacrifices that come with building a life far from home.";

export default function Synopsis() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex w-[clamp(200px,95%,800px)] text-center items-center justify-between py-5">
      <Image
        src="/images/flower-left.webp"
        alt="Flower decoration"
        width={267}
        height={642}
        className="z-1 w-[clamp(100px,50%,267px)] md:w-[267px]"
      />

      <div className="hidden md:flex absolute w-[clamp(100px,40%,400px)] flex-col items-center top-[50%] left-[50%] transform-[translate(-50%,-50%)]">
        <p className="font-heading text-3xl font-bold underline">Synopsis</p>

        <p className="w-full text-center text-fluid-md py-5">
          {`${firstParagraph} ${secondParagraph}`}
        </p>
      </div>

      <motion.div
        layout
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="md:hidden absolute inset-0 flex flex-col items-center justify-start pt-13 z-2"
      >
        <motion.div className="w-[clamp(100px,40%,400px)]">
          <p className="font-heading text-3xl font-bold underline">Synopsis</p>

          <AnimatePresence mode="wait">
            <motion.p
              key={expanded ? 'more' : 'less'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="pt-5 pb-3 text-[clamp(0.8rem,3.8vw,1.3rem)]"
            >
              {expanded ? secondParagraph : firstParagraph}
            </motion.p>
          </AnimatePresence>

          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="text-fluid-md font-heading hover:bg-transparent hover:underline active:scale-[0.9]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={expanded ? 'end' : 'start'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {expanded ? 'Previous' : 'Next'}
              </motion.span>
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>

      <Image
        src="/images/flower-right.webp"
        alt="Flower decoration"
        width={267}
        height={642}
        className="z-1 w-[clamp(100px,50%,267px)] md:w-[267px]"
      />
    </div>
  );
}
