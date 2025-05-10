import React, { useContext } from 'react';
import { CartOrderContext } from "./context/cartContext";

const NotificationBadge = () => {
  const context = useContext(CartOrderContext);

  if (!context) {
    // No context available, show nothing or zero
    return null;
  }

  const { addedItem } = context;

  // Calculate total quantity of all items
  const totalQuantity = addedItem.reduce((sum, item) => sum + (item.quantity || 0), 0);

  if (totalQuantity === 0) {
    return null; // Don't show the badge if no items
  }

  return (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      right: 45,
      zIndex : 999
    }}>
      <span style={{
        position: 'absolute',
        top: -8,
        right: -8,
        padding: '2px 6px',
        minWidth: 20,
        height: 20,
        boxShadow: '0 0 0 2px white',
        pointerEvents: 'none'
      }} className='absolute top-[-8] right-[-8] bg-emerald-600 text-white text-sm font-bold rounded-full px-2 py-2 flex items-center justify-center min-w-[20] h-[20]'>
        {totalQuantity}
      </span>
    </div>
  );
};

export default NotificationBadge;

