export const commonIcons = {
  copyright: 'copyright',
} as const;

export type CommonIcons = (typeof commonIcons)[keyof typeof commonIcons];