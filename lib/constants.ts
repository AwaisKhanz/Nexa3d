export const EXAMPLE_PROMPTS = [
  "Full body 3D model of Pikachu. No humans, no text.",
  "Full body 3D model of Charizard. No humans, no text.",
  "Full body 3D model of Bulbasaur. No humans, no text.",
  "Full body 3D model of Squirtle. No humans, no text.",
  "Full body 3D model of Eevee. No humans, no text.",
];

export const WORKSPACE_OPTIONS = [
  {
    id: "text-to-3d",
    name: "Text to 3D",
    icon: "🎲",
    description: "Generate 3D models from text descriptions",
    comingSoon: false,
  },
  {
    id: "image-to-3d",
    name: "Image to 3D",
    icon: "🖼️",
    description: "Convert images into 3D models",
    comingSoon: true,
  },
  {
    id: "ai-texturing",
    name: "AI Texturing",
    icon: "🎨",
    description: "Automatically generate textures for 3D models",
    comingSoon: true,
  },
  {
    id: "text-to-voxel",
    name: "Text to Voxel",
    icon: "📦",
    description: "Create voxel-based models from text",
    comingSoon: true,
  },
];

export const MAX_GENERATIONS = 3;
export const TWITTER_URL = "https://x.com/PokePrint3D";
