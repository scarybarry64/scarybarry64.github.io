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

const container = document.querySelector(".portfolio-link-container");
const dropdown = document.querySelector(".portfolio-link-dropdown");
isOpen = false;

function togglePortfolioDropdown()
{
    if (!isOpen)
    {
        openPortfolioDropdown();
    }
    else
    {
        closePortfolioDropdown();
    }
}

function openPortfolioDropdown()
{
    dropdown.classList.add('portfolio-dropdown-open');
    document.addEventListener("click", closePortfolioDropdownOnOutsideClick);
    isOpen = true;
}

function closePortfolioDropdown()
{
    dropdown.classList.remove('portfolio-dropdown-open');
    document.removeEventListener("click", closePortfolioDropdownOnOutsideClick);
    isOpen = false;
}

function closePortfolioDropdownOnOutsideClick(event)
{
    if (event.target != container)
    {   
        closePortfolioDropdown();
    }
}