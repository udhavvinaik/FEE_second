import React from 'react';
import './Grid.css';

export default function Grid() {
  return (
    <div className="grid-container">
      <div className="promo-banner">
        <div className="promo-text">
          UPTO 70% Off <div>on Fresh Collection</div>
        </div>
      </div>
      <div className="grid bg-clean">
        <div className="subgrid">
          <div className="subb">
            <img className="subimg" src='https://images.unsplash.com/photo-1567282026984-fbad0228317d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Fashion 1' />
          </div>
          <div className="subb">
            <img className="subimg" src='https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww' alt='Fashion 2' />
          </div>
          <div className="subb">
            <img className="subimg" src='https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww' alt='Fashion 3' />
          </div>
          <div className="subb">
            <img className="subimg" src='https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Fashion 4' />
          </div>
        </div>
      </div>
    </div>
  );
}
