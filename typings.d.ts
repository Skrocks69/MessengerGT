

interface SearchUserInput {
  email: string;
}

interface SearchUsersData {
  searchUsers: Array<SearchedUser>;
}

interface SearchedUser {
  id: string;
  email: string;
  name: string;
  image: string;
}

interface CreateConversationData {
  createConversation: {
    conversationId: string;
  };
}

interface CreateConversationInput {
  participantIds: Array<string>;
}

interface ConversationsData {
  conversations: Array<any>;
}

interface ConversationUpdatedData {
  conversationUpdated: {
    conversation: any;
  };
}

export interface User {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

interface MessagesData {
  messages: Array<MessagePopulated>;
}

interface MessagesVariables {
  conversationId: string;
}

interface SendMessageVariables {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
}

interface MessagesSubscriptionData {
  subscriptionData: {
    data: {
      messageSent: MessagePopulated;
    };
  };
}
