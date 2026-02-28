'use server';
/**
 * @fileOverview An AI agent that explains War Thunder game mechanics for new players.
 *
 * - explainGameMechanic - A function that provides simplified explanations for game mechanics.
 * - GameMechanicExplainerInput - The input type for the explainGameMechanic function.
 * - GameMechanicExplainerOutput - The return type for the explainGameMechanic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GameMechanicExplainerInputSchema = z.object({
  mechanicTerm: z.string().describe('The War Thunder game mechanic or term to explain.'),
});
export type GameMechanicExplainerInput = z.infer<typeof GameMechanicExplainerInputSchema>;

const GameMechanicExplainerOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A concise, beginner-friendly explanation of the game mechanic.'),
});
export type GameMechanicExplainerOutput = z.infer<typeof GameMechanicExplainerOutputSchema>;

export async function explainGameMechanic(input: GameMechanicExplainerInput):
  Promise<GameMechanicExplainerOutput> {
  return gameMechanicExplainerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'gameMechanicExplainerPrompt',
  input: {schema: GameMechanicExplainerInputSchema},
  output: {schema: GameMechanicExplainerOutputSchema},
  prompt: `You are an expert War Thunder guide for new players. Explain the following game mechanic or term in a concise, beginner-friendly way. Focus on its relevance and impact on a new player's progress in War Thunder.

Mechanic: {{{mechanicTerm}}}`,
});

const gameMechanicExplainerFlow = ai.defineFlow(
  {
    name: 'gameMechanicExplainerFlow',
    inputSchema: GameMechanicExplainerInputSchema,
    outputSchema: GameMechanicExplainerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
