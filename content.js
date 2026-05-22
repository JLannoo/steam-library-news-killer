(async () => {
  const SELECTORS = [
    "._17uEBe5Ri8TMsnfELvs8-N" // News container class
  ];

  function removeElements() {
    for (const selector of SELECTORS) {
      document.querySelectorAll(selector).forEach((el) => {
        console.log(el);
        el.remove()
      });
    }
  }

  // Run immediately on load
  removeElements();

  // Watch for dynamically injected banners
  const observer = new MutationObserver(removeElements);
  observer.observe(document.body, { childList: true, subtree: true });
})();

console.log("Steam Library News Killer content script running.");