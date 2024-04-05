# Input Validation Package

This package provides a set of Zod schemas for validating user inputs in various authentication-related scenarios, such as sign-up, sign-in, forgot password, and reset password. It utilizes the powerful Zod library for data validation and type inference.

## Installation

To install the package, run the following command:

```
npm install @abhiram2k03/input-validation
```

## Usage

Import the required schema and type from the package:

```typescript
import { signupSchema, SignupInput } from '@abhiram2k03/input-validation';
```

```javascript
const { signupSchema, SignupInput } = require('@abhiram2k03/input-validation');
```

Then, you can use the schema to validate the input data:

```typescript
const validatedData = signupSchema.safeParse(inputData);

if (!validatedData.success) {
  // Handle validation errors
  console.error(validatedData.error);
} else {
  // Use the validated data
  const validData: SignupInput = validatedData.data;
  // ...
}
```

You can use the types in the frontend as follows:

```javascript
const [signupData, setSignupData] = useState<SignupInput>({
    username: '',
    email: '',
    password: '',
    cPassword: '',
  });
```

## Schemas

The package provides the following schemas:

### `signupSchema`

This schema validates the sign-up input data, ensuring that the `username` is a string, `email` is a valid email address, `password` is a string with a minimum length of 8 characters, and `cPassword` (confirmation password) is a string with a minimum length of 8 characters.

### `signinSchema`

This schema validates the sign-in input data, ensuring that `email` is a valid email address and `password` is a string with a minimum length of 8 characters.

### `forgotPasswordSchema`

This schema validates the forgot password input data, ensuring that `email` is a valid email address.

### `resetPasswordSchema`

This schema validates the reset password input data, ensuring that `currPassword` and `password` is a string with a minimum length of 8 characters, and `cPassword` (confirmation password) is a string with a minimum length of 8 characters.

## Type Inference

The package also provides type inference for each schema, allowing you to easily access the validated data types in your TypeScript code. The inferred types are:

- `SignupInput`
- `SigninInput`
- `forgotPasswordInput`
- `resetPasswordInput`

## Contributing

Contributions to this package are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the package's GitHub repository.

