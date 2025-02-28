export const API_ENDPOINTS = {
  // Authentication
  login: "/auth/login",
  register: "/auth/register",
  logout: "/auth/logout",
  refreshToken: "/auth/refresh",

  // User Management
  getUser: "/user/get",
  updateUser: "/user/update",
  deleteUser: "/user/delete",
  searchUsers: "/user/search",
  getAllUsers: "/user/all",

  // Chat Messages
  sendMessage: "/chat/send",
  getMessages: "/chat/messages",
  deleteMessage: "/chat/delete",
  uploadFile: "/chat/upload",

  // Friends Management
  addFriend: "/friends/add",
  removeFriend: "/friends/remove",
  getFriendList: "/friends/list",
  checkFriendStatus: "/friends/status",

  // Groups
  createGroup: "/group/create",
  updateGroup: "/group/update",
  deleteGroup: "/group/delete",
  getGroupDetails: "/group/details",
  addGroupMember: "/group/add-member",
  removeGroupMember: "/group/remove-member",
  listUserGroups: "/group/user-groups",

  // Notifications
  getNotifications: "/notifications/list",
  markNotificationRead: "/notifications/read",
  deleteNotification: "/notifications/delete",
};
