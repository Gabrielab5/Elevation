
import Navigation from './Navigation';
import Controls from './Controls';

export default function Header() {

  return (
    <header style={{ marginBottom: '20px' }}>
      <Navigation/>
      <Controls />
    </header>
  );
}