import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { internal } from '../convex/_generated/api';
import { Auth } from 'convex/server';
export const getUserId = async (ctx: { auth: Auth }) => {
    return (await ctx.auth.getUserIdentity())?.subject;
  };

// Get all notes for a specific user
export const getSelectedTopics = query({
    args: {},
    handler: async (ctx) => {
      const userId = await getUserId(ctx);
      if (!userId) return null;
  
      const userSelectedTopics = await ctx.db
        .query('userSelectedTopics')
        .filter((q) => q.eq(q.field('userId'), userId))
        .collect();
  
      return userSelectedTopics;
    },
  });
// Create a new topic  for a user
export const selectTopic = mutation({
    args: {
      subTopic: v.string(),
      topicId: v.id('topics'),
    },
    handler: async (ctx, { subTopic,topicId }) => {
      const userId = await getUserId(ctx);
      if (!userId) throw new Error('User not found');
      const subtopicId = await ctx.db.insert('userSelectedTopics', { userId, subTopic, topicId });
      return subtopicId;
    },
  });
