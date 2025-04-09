import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        padding: '1rem 2rem',
        backgroundColor: '#2F6538',
        color: 'white'
      }}>
        <h1 style={{ margin: 0 }}>Nazka.Tech</h1>
      </header>
      
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      
      <footer style={{ 
        padding: '1rem 2rem',
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #eaeaea',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>© 2023 Nazka.Tech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
