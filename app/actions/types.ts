export type ActionResult<T = void> =
  | {
      success: true;
      data?: T;
    }
  | {
      success: false;
      formErrors?: string[];
      fieldErrors?: Record<string, string[] | undefined>;
      message?: string;
    };
