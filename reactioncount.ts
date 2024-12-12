export interface ReactionCounts {
    like: number;
    love: number;
    laugh: number;
    sad: number;
    angry: number;
}

const initialCounts: ReactionCounts = {
    like: 0,
    love: 0,
    laugh: 0,
    sad: 0,
    angry: 0,
};

let reactionCounts: ReactionCounts = { ...initialCounts };

export const addReaction = (reaction: keyof ReactionCounts): ReactionCounts => {
    reactionCounts[reaction]++;
    return { ...reactionCounts };
};

export const removeReaction = (reaction: keyof ReactionCounts): ReactionCounts => {
    if (reactionCounts[reaction] > 0) {
        reactionCounts[reaction]--;
    }
    return { ...reactionCounts };
};

export const getReactionCounts = (): ReactionCounts => {
    return { ...reactionCounts };
};

export const resetReactions = (): void => {
    reactionCounts = { ...initialCounts };
};