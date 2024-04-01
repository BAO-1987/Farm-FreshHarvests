const tabsContainer = document.querySelector('.tabs');
const tabsList = tabsContainer?.querySelector('.tabs__nav');
const tabButtons = tabsList ?.querySelectorAll('.tabs__link');
const tabPanels = tabsContainer?.querySelectorAll('.tabs__panels > div');

tabButtons?.forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  if (index === 0) {
    tab.classList.add('selected');
    // we'll add something here
  } else {
    tabPanels[index].setAttribute('hidden', '');
  }
});

tabsContainer?.addEventListener('click', e => {
  const clickedTab = e.target.closest('.tabs__link');
  const allTabs = tabsContainer.querySelectorAll('.tabs__link');

  if (!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);

  allTabs.forEach(tab => {
    tab.classList.remove('selected');
  });
  
  clickedTab.classList.add('selected');
});


function switchTab(newTab) {
  const activePanelId = newTab.getAttribute('href');
  const activePanel = tabsContainer.querySelector(activePanelId);

  // Check if activePanel is null before attempting to use removeAttribute
  if (activePanel) {
    // Hide all tab panels
    tabPanels?.forEach(panel => {
      panel.setAttribute('hidden', true);
    });

    // Show the panel corresponding to the clicked tab
    activePanel.removeAttribute('hidden');
  } else {
    console.error('Active panel not found');
  }
}
