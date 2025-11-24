import z from "zod";

export const HabitSchema = z.object({
  id: z.number().positive(),
  icon: z.any(),
  title: z
    .string("Title has to be string")
    .min(1, "Too short, min 1 character")
    .max(30, "Too long, max 30 characters"),
  isDone: z.boolean(),
});

export const HabitsSchema = HabitSchema.array();

export type Habit = z.infer<typeof HabitSchema>;
export type Habits = z.infer<typeof HabitsSchema>;
