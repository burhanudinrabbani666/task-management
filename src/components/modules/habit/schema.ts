import z from "zod";

export const HabitSchema = z.object({
  id: z.number().positive(),
  icon: z.any(),
  title: z
    .string()
    .min(1, "Invalid Data: Habit title minimum 1 character")
    .max(30, "Invalid Data: Habit title maximal 30 charater"),
  isDone: z.boolean(),
});

export const HabitsSchema = HabitSchema.array();

export type Habit = z.infer<typeof HabitSchema>;
export type Habits = z.infer<typeof HabitsSchema>;
