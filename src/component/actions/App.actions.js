export function INC(val) {
    return {
      type: "INC",
      payload: val
    }
  };
  
  export function DEC(val) {
    return {
      type: "DEC",
      payload: val
    }
  };