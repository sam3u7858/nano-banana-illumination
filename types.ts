import React from 'react';

export interface Preset {
  name: string;
  prompt: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
