'use server';
/**
 * @fileOverview Provides AI-generated beginner-friendly tips for specific War Thunder vehicles.
 *
 * - getBeginnerVehicleTips - A function that generates tips for a given vehicle and nation.
 * - BeginnerVehicleTipsInput - The input type for the getBeginnerVehicleTips function.
 * - BeginnerVehicleTipsOutput - The return type for the getBeginnerVehicleTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BeginnerVehicleTipsInputSchema = z.object({
  nation: z
    .string()
    .describe('The nation of the vehicle (e.g., USA, Germany, USSR).'),
  vehicleName: z
    .string()
    .describe('The name of the vehicle (e.g., M4 Sherman, Panzer IV H).'),
});
export type BeginnerVehicleTipsInput = z.infer<
  typeof BeginnerVehicleTipsInputSchema
>;

const BeginnerVehicleTipsOutputSchema = z.object({
  tips: z.string().describe('Concise, beginner-friendly tips for the vehicle.'),
});
export type BeginnerVehicleTipsOutput = z.infer<
  typeof BeginnerVehicleTipsOutputSchema
>;

export async function getBeginnerVehicleTips(
  input: BeginnerVehicleTipsInput
): Promise<BeginnerVehicleTipsOutput> {
  return beginnerVehicleTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'beginnerVehicleTipsPrompt',
  input: {schema: BeginnerVehicleTipsInputSchema},
  output: {schema: BeginnerVehicleTipsOutputSchema},
  prompt: `You are an expert War Thunder guide for new players. Provide concise, beginner-friendly tips and strategies for playing the '{{{vehicleName}}}' vehicle from the '{{{nation}}}' nation.

Focus on its typical playstyle, key strengths, common weaknesses, and how to best utilize it in battle for a new player. Keep the tips practical and easy to understand.`,
});

const beginnerVehicleTipsFlow = ai.defineFlow(
  {
    name: 'beginnerVehicleTipsFlow',
    inputSchema: BeginnerVehicleTipsInputSchema,
    outputSchema: BeginnerVehicleTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
