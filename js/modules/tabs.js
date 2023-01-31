
function tabs () {

    const tabs= document.querySelectorAll('.cases_item'),
    tabsContent = document.querySelectorAll('.cases_text'),
    tabsParent = document.querySelector('.cases_cases');

        
    function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
        item.classList.remove('_item_active');
    });
    }
    function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('_item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    if(target && target.classList.contains('cases_item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
    });

}

export default tabs;