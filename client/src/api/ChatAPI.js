

const ChatAPI = {
  getUserConversations: async (updateUserConversations, token) => {
      let url = new URL('http://localhost:3001/users/me/conversations');
      url.search = new URLSearchParams({secret_token: token}).toString();
      const userConvs = await fetch(url).then(data => data.json());
      console.log(userConvs);
      if (userConvs && Array.isArray(userConvs) && userConvs.length) {
        updateUserConversations(userConvs);
        }
      }
};

export default ChatAPI;