export function hello() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const color = isDarkMode ? ' #ffffff' : '#293241'

  console.log(`%cHej!`, `font-size: 16px; font-weight: bold; color: ${color};`)
  console.log(
    '%cBehöver den här sidan åtgärdas eller förbättras? Vänligen meddela mig https://github.com/TiberiusGh/robertonebygg.',
    `font-size: 12px; font-weight: bold; color: ${color};`
  )
  console.log(
    '%c/Tiberius https://linkedin.com/in/tiberius-gh/',
    `font-size: 12px; font-weight: bold; color: ${color};`
  )
}
