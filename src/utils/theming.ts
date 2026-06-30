export type Themes = 'default' | 'mylight' | 'terminal' | 'retro-light';

export function changeTheme(newTheme: Themes) {
  const html = document.getElementsByTagName('html')[0];
  html!.setAttribute('data-theme', newTheme);
}
