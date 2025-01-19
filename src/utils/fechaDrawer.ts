export default function fechaDrawer() {
  const inputDrawer = document.querySelectorAll(
    ".drawers"
  ) as NodeListOf<HTMLInputElement>;
  console.log(inputDrawer);
  inputDrawer.forEach((element) => {
    element.checked = false;
  });
}
