// Handles dropdown menu for clicking portfolio link

const dropdown = document.querySelector(".nav-link-dropdown-content");
document.addEventListener("click", test);
state = false;

function toggleDropdown()
{
    dropdown.classList.toggle("open");
    state = !state;
}


function test(event)
{
    if (!event.target.closest(".nav-link-dropdown") && state)
    {
        toggleDropdown();
    }
}