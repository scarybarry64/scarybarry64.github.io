// Page Transition
// https://www.youtube.com/watch?v=ckJ7gdIeebc

// window.onload = () =>
// {
//     const transition_element = document.querySelector('.transition');
//     const anchors = document.querySelectorAll('a');

//     setTimeout(() => 
//     {
//         transition_element.classList.remove('is-active');
//     }, 500)


//     for (let i = 0; i < anchors.length; ++i)
//     {
//         const anchor = anchors[i];
//         anchor.addEventListener('click', e =>
//         {
//             e.preventDefault();
//             let target = e.target.href;

//             transition_element.classList.add('is-active');

//             setTimeout(() => 
//             {
//                 window.location.href = target;
//             }, 500);
//         })
//     }
// }


// Portfolio Dropdown
// container is the outer-most element, holds dropdown
// dropdown holds the portfolio links and is the thing that will be shown/hidden

const games = document.querySelector(".header__games");
const gamesDropdown = document.querySelector(".header__games-dropdown");
isOpen = false;

function toggleGamesDropdown()
{
    if (!isOpen)
    {
        openGamesDropdown();
    }
    else
    {
        closeGamesDropdown();
    }
}

function openGamesDropdown()
{
    gamesDropdown.classList.add('header__games-dropdown--open');
    document.addEventListener("click", closeGamesDropdownOnOutsideClick);
    isOpen = true;
}

function closeGamesDropdown()
{
    gamesDropdown.classList.remove('header__games-dropdown--open');
    document.removeEventListener("click", closeGamesDropdownOnOutsideClick);
    isOpen = false;
}

function closeGamesDropdownOnOutsideClick(event)
{
    if (event.target != games)
    {   
        closeGamesDropdown();
    }
}