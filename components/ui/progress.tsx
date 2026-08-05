'use client';

import * as React from 'react';
import { Progress as ProgressPrimitive } from 'radix-ui';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'relative flex h-3 w-full items-center overflow-x-hidden bg-muted',
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: 'easeOut',
        }}
        className="h-full bg-secondary"
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
