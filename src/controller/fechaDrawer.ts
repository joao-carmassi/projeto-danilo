export default function fechaDrawer() {
  const inputDrawer = document.querySelectorAll(
    ".drawers"
  ) as NodeListOf<HTMLInputElement>;
  inputDrawer.forEach((element) => {
    element.checked = false;
  });
}
