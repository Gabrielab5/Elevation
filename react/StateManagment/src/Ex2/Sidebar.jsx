export default function Sidebar({ theme }) {
  return (
    <aside style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  );
}