import { z } from "zod";
export declare const signupSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    cPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    cPassword: string;
}, {
    username: string;
    email: string;
    password: string;
    cPassword: string;
}>;
export type SignupInput = z.infer<typeof signupSchema>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninInput = z.infer<typeof signinSchema>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export type forgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export declare const resetPasswordSchema: z.ZodObject<{
    currPassword: z.ZodString;
    password: z.ZodString;
    cPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    cPassword: string;
    currPassword: string;
}, {
    password: string;
    cPassword: string;
    currPassword: string;
}>;
export type resetPasswordInput = z.infer<typeof resetPasswordSchema>;
