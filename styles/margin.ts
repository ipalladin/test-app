type MarginStyles = Record<MarginStylesParams, number>;
enum MarginStylesParams {
  small = "small",
  medium = "medium",
  big = "big",
  large = "large",
  gigant = "gigant",
}

export const MARGIN = {
  xs: 2,
  xm: 4,
  m: 8,
  xl: 12,
  xxl: 24,
} as const;

export const BORDER_RADIUS = {
  s: 4,
  m: 8,
  l: 16,
  xxl: 100,
} as const;

export const styledMargin = <T extends keyof MarginStyles>(
  value: MarginStyles[T]
) => `${value}px`;
