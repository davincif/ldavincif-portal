export function capitalize(
  prhase: string,
  options = {
    separator: ' ',
    ignoreUntilBiggerThen: 2,
  },
): string {
  return prhase
    .split(options.separator)
    .map((word) =>
      word.length <= options.ignoreUntilBiggerThen
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(options.separator);
}
