
import React from "react";
export default function PremiumModal({open,onClose,feature}){ if(!open) return null;
  return (<div className="premium-modal"><h3>Unlock Premium</h3><p>{feature}</p><button onClick={onClose}>Close</button></div>);
}
