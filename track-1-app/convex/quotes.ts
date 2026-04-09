import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const addQuote = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const quoteAdded = await ctx.db.insert("quotes", { text: args.text });
    console.log("Added quote: ", quoteAdded);
  },
});

export const getQuotes = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("quotes").collect();
  },
});
