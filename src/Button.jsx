import React from 'react'

export default function Button({ children, type = 'button', className = '', ...props }) {
  const baseClasses =
    'w-full h-[48px] bg-[rgba(144,122,255,1)] text-white rounded-md hover:bg-[rgba(124,104,240,1)] transition-colors duration-300 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]'

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
