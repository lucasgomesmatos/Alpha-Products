export const Head = (pros) => {
  document.title = pros.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute('content', pros.description);
  return <></>;
};
