import React from 'react';
import { Preset } from './types';

// SVG Icon Components
// FIX: Converted JSX to React.createElement calls to be compatible with a .ts file extension.
// The original JSX syntax is only supported in .tsx files.
const FrontalKeylightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('path', { d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" }),
    React.createElement('path', { d: "M12 12v10m-4-6 4 6 4-6" }),
    React.createElement('path', { d: "M2 12a10 10 0 0 1 1.4-5" }),
    React.createElement('path', { d: "M22 12a10 10 0 0 0-1.4-5" })
  )
);

const ThreePointIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "4" }),
    React.createElement('path', { d: "m19 5-1.5 1.5M5 5l1.5 1.5M16 19l-4-2-4 2" })
  )
);

const RembrandtIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "9" }),
    React.createElement('path', { d: "M12 12a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Z", fill: "currentColor", opacity: "0.3" }),
    React.createElement('path', { d: "M15 13.5 13.5 16h-3L9 13.5" })
  )
);

const SplitLightingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "9" }),
    React.createElement('path', { d: "M12 3v18" }),
    React.createElement('path', { d: "M12 3a9 9 0 0 0 0 18Z", fill: "currentColor", opacity: "0.3" })
  )
);

const ButterflyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "9" }),
    React.createElement('path', { d: "M10 13c.2-.5.5-1 1-1h2c.5 0 .8.5 1 1l1 2H9l1-2Z", fill: "currentColor", opacity: "0.3" }),
    React.createElement('path', { d: "M12 6V3m-2.5 5.5L8 7M16.5 8.5 18 7" })
  )
);

const LoopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "9" }),
    React.createElement('path', { d: "M14 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z", stroke: "none", fill: "currentColor", opacity: "0.3" }),
    React.createElement('path', { d: "m7 7 2 2" })
  )
);

const ClamshellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "4" }),
    React.createElement('path', { d: "M5 9a7 7 0 0 1 14 0" }),
    React.createElement('path', { d: "M5 15a7 7 0 0 0 14 0" })
  )
);

const LowAngleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "5" }),
    React.createElement('path', { d: "M12 21v-4m-3 1 3-3 3 3" })
  )
);

const SideRimIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "9" }),
    React.createElement('path', { d: "M18.5 18.5a9 9 0 0 1-13 0" }),
    React.createElement('path', { d: "M20 14a8 8 0 0 0-16 0" })
  )
);

const SpotlightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('path', { d: "m6 6 12 12" }),
    React.createElement('path', { d: "m14 6-8 8" }),
    React.createElement('circle', { cx: "12", cy: "12", r: "2" }),
    React.createElement('path', { d: "m3 11 8-8" }),
    React.createElement('path', { d: "m21 13-8 8" })
  )
);

const SoftAmbientIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "4" }),
    React.createElement('path', { d: "M12 3v1M19.07 4.93l-.7.7M21 12h-1M19.07 19.07l-.7-.7M12 21v-1M4.93 19.07l.7-.7M3 12h1M4.93 4.93l.7.7", strokeLinecap: "round" })
  )
);

const DualToneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
    React.createElement('circle', { cx: "12", cy: "12", r: "9" }),
    React.createElement('path', { d: "M12 3a9 9 0 0 0 0 18Z", fill: "#ff7f50", opacity: "0.4", strokeWidth: "0" }),
    React.createElement('path', { d: "M12 3a9 9 0 0 1 0 18Z", fill: "#0000ff", opacity: "0.4", strokeWidth: "0" }),
    React.createElement('path', { d: "M12 3v18" })
  )
);

const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round"},
      React.createElement('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
    )
);

// New Fix Preset Icons
const FixOverexposureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
      React.createElement('path', { d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" }),
      React.createElement('path', { d: "M12 4V2M12 22v-2M5.6 5.6l-1.4-1.4M19.8 19.8l-1.4-1.4M4 12H2M22 12h-2M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4" }),
      React.createElement('path', { d: "M12 13v-3m-1.5 1.5L12 10l1.5 1.5" })
    )
);

const FixUnderexposureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
      React.createElement('path', { d: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A5.5 5.5 0 0 1 12 15a5.5 5.5 0 0 1-6.9-5.14A9 9 0 0 0 12 3z" }),
      React.createElement('path', { d: "M12 11v3m-1.5-1.5L12 14l1.5-1.5" })
    )
);

const BalancedDRCIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
      React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
      React.createElement('path', { d: "M12 2v20" }),
      React.createElement('path', { d: "M8 9.5 6 12l2 2.5" }),
      React.createElement('path', { d: "M16 14.5 18 12l-2-2.5" })
    )
);
  
const NaturalHDRIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    React.createElement('svg', { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" },
      React.createElement('rect', { x: "4", y: "8", width: "16", height: "10", rx: "2", opacity: "0.5" }),
      React.createElement('rect', { x: "2", y: "6", width: "16", height: "10", rx: "2" })
    )
);

export const FIX_PRESETS: Preset[] = [
    {
        name: 'presets.fixOverexposure.name',
        prompt: 'Reduce highlight intensity while preserving detail in bright areas. Apply tone compression to restore texture on the skin and clothing.',
        icon: FixOverexposureIcon,
    },
    {
        name: 'presets.fixUnderexposure.name',
        prompt: 'Brighten shadow regions without washing out midtones. Enhance visibility in dark areas while maintaining contrast.',
        icon: FixUnderexposureIcon,
    },
    {
        name: 'presets.balancedDR.name',
        prompt: 'Apply adaptive tone mapping: lower excessive highlights, lift deep shadows, and compress midtones for even exposure.',
        icon: BalancedDRCIcon,
    },
    {
        name: 'presets.naturalHDR.name',
        prompt: 'Blend multiple simulated exposures to preserve detail across shadows and highlights. Result is natural, not artificial.',
        icon: NaturalHDRIcon,
    }
]

export const PRESETS: Preset[] = [
  {
    name: 'presets.removeAllLight.name',
    prompt: 'Remove all existing light sources. Make the scene very dark, dim, and shadowy, but ensure the main subject remains slightly visible and recognizable. The overall mood should be mysterious and ready for new lighting to be added.',
    icon: MoonIcon,
  },
  {
    name: 'presets.frontalKeylight.name',
    prompt: 'Place a soft white light directly in front of the subject to evenly illuminate facial features. Add a subtle rim light from behind to outline the head and shoulders, producing a natural glow around the subject. Make the background very dark and dim, creating a sense of deep darkness.',
    icon: FrontalKeylightIcon,
  },
  {
    name: 'presets.threePoint.name',
    prompt: 'Apply a key light from the front-left, a fill light from the opposite side with lower intensity, and a backlight to create depth. Balanced cinematic look. Make the background very dark and dim, creating a sense of deep darkness.',
    icon: ThreePointIcon,
  },
  {
    name: 'presets.rembrandt.name',
    prompt: 'Position a key light high and to the side, forming a small illuminated triangle under the eye on the shadowed cheek. Creates dramatic yet natural portraits. Make the background very dark and dim, creating a sense of deep darkness.',
    icon: RembrandtIcon,
  },
  {
    name: 'presets.split.name',
    prompt: 'Illuminate only one side of the face with a strong key light, leaving the other side in deep shadow. Enhances drama and sharp contrast.',
    icon: SplitLightingIcon,
  },
  {
    name: 'presets.butterfly.name',
    prompt: 'Place the light directly above and in front of the subject’s face, casting a small shadow under the nose. Produces glamorous, classic portrait effects.',
    icon: ButterflyIcon,
  },
  {
    name: 'presets.loop.name',
    prompt: 'Move the key light slightly off-center and higher than eye level, creating a loop-shaped nose shadow. Natural and flattering for portraits.',
    icon: LoopIcon,
  },
  {
    name: 'presets.clamshell.name',
    prompt: 'Position one light high in front and a reflector or second light below the chin, softly filling shadows. Smooth, magazine-style beauty effect.',
    icon: ClamshellIcon,
  },
  {
    name: 'presets.lowAngle.name',
    prompt: 'Place a light low and in front, angled upward. Shadows cast dramatically on the face, emphasizing structure and intensity.',
    icon: LowAngleIcon,
  },
  {
    name: 'presets.sideRim.name',
    prompt: 'Add a strong rim light from the side or slightly behind, defining the edge of the face and shoulders. Works well for silhouettes with glowing contours.',
    icon: SideRimIcon,
  },
  {
    name: 'presets.spotlight.name',
    prompt: 'Use a small, focused light source aimed directly at the face, leaving the background and edges in darkness. Produces theatrical, isolated emphasis.',
    icon: SpotlightIcon,
  },
  {
    name: 'presets.softAmbient.name',
    prompt: 'Flood the subject with large, diffused light to eliminate harsh shadows. Creates an evenly lit, natural daylight effect.',
    icon: SoftAmbientIcon,
  },
  {
    name: 'presets.dualTone.name',
    prompt: 'Apply two opposing lights: one warm (orange/red) from the left, one cool (blue) from the right. Produces a stylized, cinematic two-tone look.',
    icon: DualToneIcon,
  },
];