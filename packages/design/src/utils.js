export const mediaQuery = ({ media, rule }) =>
  `@media (min-width:${media}) { ${rule}}`;

export const breakpoint = (media) => (rule) => mediaQuery({ media, rule });
