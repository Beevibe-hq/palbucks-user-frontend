export const opensidebar = () => {
  return {
    type: "open sidebar",
  };
};

export const closesidebar = () => {
  return {
    type: "close sidebar",
  };
};

export const reducesidebar = () => {
  return {
    type: "reduce sidebar",
  };
};

export const increasesidebar = () => {
  return {
    type: "increase sidebar",
  };
};

export const setlinkcolor = (data) => {
  return {
    type: "set link color",
    payload: data,
  };
};

//Action to render between homebody or detailedevent in home
export const sethomeorevent = (data) => {
  return {
    type: "sethomeorevent",
    payload: data,
  };
};

export const addCrowdfundEvent = (data) => {
  return {
    type: "addCrowdfundEvent",
    payload: data,
  };
};

export const loadCrowdfundEvents = (data) => {
  return {
    type: "loadCrowdfundEvents",
    payload: data,
  };
};

export const setothers = () => {
  return {
    type: "setothers",
  };
};

export const setforyou = () => {
  return {
    type: "setforyou",
  };
};

//Action to set all data that will be displayed on homepage. This data should come from backend.
export const sethomebodydata = (data) => {
  return {
    type: "sethomebodydata",
    payload: data,
  };
};

//Action to set profilepage active
export const setprofilepageactive = () => {
  return {
    type: "set profilepage active",
  };
};

//Action to set profilepage inactive
export const setprofilepageinactive = () => {
  return {
    type: "set profilepage inactive",
  };
};

//Action to set notificationspage active
export const setnotificationspageactive = () => {
  return {
    type: "set notificationspage active",
  };
};

//Action to set notificationspage inactive
export const setnotificationspageinactive = () => {
  return {
    type: "set notificationspage inactive",
  };
};

// Define an action to update the scroll position
export const setScrollPosition = (scrollPosition) => ({
  type: "SET_SCROLL_POSITION",
  payload: scrollPosition,
});

// Update sign up info in preparation for sign up
export const setSignupInfo = (data) => {
  return {
    type: "updateSignupInfo",
    payload: data,
  };
};

export const addOtp = (data) => {
  console.log("addOtp action dispatched with otp:", data);
  return {
    type: "addOtp",
    payload: data,
  };
};

// set authenticated state
export const setIsAuthenticated = (data) => {
  return {
    type: "setisauthenticated",
    payload: data,
  };
};

// set loading state
export const setLogoutLoading = (data) => {
  return {
    type: "setlogoutloading",
    payload: data,
  };
};

// Set otp verified state
export const setOtpVerified = (data) => {
  return {
    type: "setotpverified",
    payload: data,
  };
};

export const editEventData = (data) => {
  return {
    type: "editEventData",
    payload: data,
  };
};

// Load notifications
export const loadNotifications = (data) => {
  return {
    type: "loadNotifications",
    payload: data,
  };
};

// Add notification
export const addNotification = (data) => {
  return {
    type: "addNotification",
    payload: data,
  };
};

export const removeNotificationAlert = () => {
  return {
    type: "removeNotificationAlert",
  };
};

export const setPaymentMode = (data) => {
  return {
    type: "setPaymentMode",
    payload: data,
  };
};

export const addSearchValue = (data) => {
  return {
    type: "addSearchValue",
    payload: data,
  };
};

export const addCountryOptions = (data) => {
  return {
    type: "addCountryOptions",
    payload: data,
  };
};

export const updateAnonymousCrowdfundData = (data) => {
  return {
    type: "updateAnonymousCrowdfundData",
    payload: data,
  };
};
