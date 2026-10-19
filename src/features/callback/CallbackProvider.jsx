import { useCallback, useMemo, useState } from 'react'
import { CallbackContext } from './CallbackContext.js'
import CallbackModal from './CallbackModal.jsx'

export default function CallbackProvider({ children }) {
  const [state, setState] = useState({ open: false, product: null })
  // product передаём только если это реальный товар (а не событие клика)
  const openCallback = useCallback((product) => setState({ open: true, product: product?.name ? product : null }), [])
  const closeCallback = useCallback(() => setState({ open: false, product: null }), [])
  const value = useMemo(() => ({ openCallback, closeCallback }), [openCallback, closeCallback])
  return (
    <CallbackContext.Provider value={value}>
      {children}
      <CallbackModal open={state.open} product={state.product} onClose={closeCallback} />
    </CallbackContext.Provider>
  )
}
