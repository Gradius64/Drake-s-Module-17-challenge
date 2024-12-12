interface ReactionBody {

    postId: string; // The ID of the post being reacted to
  
    userId: string; // ID of the user performing the reaction
  
    reactionType: 'like' | 'dislike' | 'heart'; // Possible reaction types
  
    // Add any other relevant properties like timestamps or additional data based on your application
  
  }