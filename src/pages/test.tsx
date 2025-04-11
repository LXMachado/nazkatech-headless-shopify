import React from 'react';

export default function TestPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#2F6538', fontSize: '2rem' }}>Test Page</h1>
      <p>This is a simple test page to verify that the app is working.</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ 
          width: '200px', 
          height: '200px', 
          backgroundColor: '#2F6538', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px'
        }}>
          This is a green box
        </div>
        
        <p>If you can see this page, the app is working correctly!</p>
      </div>
    </div>
  );
}