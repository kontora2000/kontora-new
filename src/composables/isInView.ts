export const isInView = (isVisible: boolean, entry: any) => {
  isVisible ? entry.target.classList.add('is-visible') : entry.target.classList.remove('is-visible');
};
