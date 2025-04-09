import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>Nazka.Tech | Eco-Friendly Tech Accessories</title>
        <meta name="description" content="Eco-friendly tech accessories - biodegradable phone cases, solar power banks, and more. Where eco meets tech." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ 
        padding: '2rem', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        fontFamily: 'system-ui, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem',
          color: '#2F6538',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Nazka.Tech Eco-Friendly Accessories
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 3rem auto',
          color: '#333'
        }}>
          Sustainable tech accessories for the environmentally conscious consumer.
        </p>

        <div style={{
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#e9f5f0',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p>Counter: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              backgroundColor: '#2F6538',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              marginTop: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Increment
          </button>
        </div>

        <p>
          This is a simplified version of our homepage to diagnose rendering issues.
        </p>
      </div>
    </>
  );
}
