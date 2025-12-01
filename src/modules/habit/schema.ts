import z from "zod";

export const HabitNoteSchema = z.object({
  id: z.number().positive(),
  content: z.string().max(2000),
});

export const HabitSchema = z.object({
  id: z.number().positive(),
  iconId: z.number(),
  title: z
    .string()
    .min(1, "Invalid Data: Habit title minimum 1 character")
    .max(30, "Invalid Data: Habit title maximal 30 charater"),
  isDone: z.boolean(),
  notes: z.array(HabitNoteSchema),
});

export const HabitsSchema = HabitSchema.array();

export type Habit = z.infer<typeof HabitSchema>;
export type Habits = z.infer<typeof HabitsSchema>;
