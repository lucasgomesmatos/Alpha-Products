export const Head = (pros) => {
  if (pros.title) document.title = pros.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute('content', pros.description);
  return <></>;
};
