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



// Page Transition

// make opacity, transform 