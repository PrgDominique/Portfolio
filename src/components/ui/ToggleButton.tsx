import { useEffect } from 'react'

export const ToggleButton = ({ colorMode, toggleColor }: any) => {
 
 

  return (
    <div>
      <button type='button' onClick={toggleColor}>
        {colorMode === 'light' ? (
          <>
            <h1>dark</h1>
          </>
        ) : (
          <>
            <h1>light</h1>
          </>
        )}
        {/* test */}
      </button>
    </div>
  )
}
