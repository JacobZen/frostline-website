import { z } from "zod";

export const bookingRequestSchema = z.object({
  route: z.string().min(1),
  vehicle: z.string().min(1),
  date: z.string().min(1),
  passengers: z.coerce.number().min(1).max(30),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
