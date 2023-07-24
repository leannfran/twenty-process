

const redirectWithScroll = (router, page, section) => {
  const handleRedirectWithScroll = () => {
    router.push(page).then(() => {
      const sectionElement = document.querySelector(section);
      if (sectionElement) {
        const offsetTop = sectionElement.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  };

  return handleRedirectWithScroll;
};

export default redirectWithScroll;


