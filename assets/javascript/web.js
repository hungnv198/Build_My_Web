const Main = document.querySelector('#main');
var myApp = document.createElement('div');
myApp.classList.add('grid');
myApp.classList.add('wide');
Main.appendChild(myApp);

{
    // Tạo header
    const header = document.createElement('div');
    header.setAttribute('id', 'heading');
    myApp.appendChild(header);
    // Tạo menu
    let menu = document.createElement('div');
    menu.classList.add('heading__menu');
    header.appendChild(menu);
    let menuList = document.createElement('ul')
    menuList.classList.add('heading__menu--list')
    menu.appendChild(menuList)
}