import { useTheme } from './ThemeContext';

export default function Article() {

const {theme} = useTheme();
  return (
    <article>
      <h1>Article Title</h1>
      <p>This content uses the {theme} theme. Notice how theme props are passed through every component!</p>
    </article>
  );
}