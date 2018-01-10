export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const toggleModal = function(payload){
  return {
    type: TOGGLE_MODAL,
    payload
  };
};
