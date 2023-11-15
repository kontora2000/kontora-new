export const isInView = (isVisible: boolean, entry: any) => {
  if (isVisible) entry.target.classList.add('is-visible');
};
